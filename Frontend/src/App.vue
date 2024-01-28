<script setup>
import {ref, reactive, watch, onMounted } from 'vue'
import {uid} from 'uid'
import Header from './components/Header.vue'
import Formulario from './components/Formulario.vue'
import PacienteAgg from './components/PacienteAgg.vue'
import Footer from './components/Footer.vue'
import Swal from 'sweetalert2'

const GuardarLocalStorage= ()=>{
  localStorage.setItem('pacientes', JSON.stringify(Pacientes.value))
}

onMounted(()=>{
  const pacientesStorage = localStorage.getItem('pacientes')
  if (pacientesStorage) {
    Pacientes.value = JSON.parse(pacientesStorage)
  }
})

const Pacientes= ref([])

const Paciente=reactive({
  id: null,  
  nombre:'',
  propietario:'',
  telefono:'',
  email:'',
  alta:'',
  sintomas:''
})

watch(Pacientes, ()=>{
  GuardarLocalStorage()
},{
  deep: true
})

const guardarPacientes=()=>{
  if (Paciente.id) {
    // editar
    const {id} = Paciente
    const i = Pacientes.value.findIndex((pacienteState)=>pacienteState.id=== id)
    Pacientes.value[i]={...Paciente}
  } else {
    // agregar

    Pacientes.value.push({
      ...Paciente,
      id:uid()
    })
    
  }
  //reiniciar el formulario
  Object.assign(Paciente,{   
    nombre:'',
    propietario:'',
    telefono:'',
    email:'',
    alta:'',
    sintomas:'',
    id: null
  })
}

const ActualizarPaciente=(id)=>{
  const pacienteEditar = Pacientes.value.filter(Paciente => Paciente.id === id)[0]
  Object.assign(Paciente , pacienteEditar)
}

const EliminarPaciente=((id)=>{
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta accion no se puede revertir',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
        
      Swal.fire({
        title: 'Eliminado',
        text: 'Paciente eliminado con éxito!',
        icon: 'success'
      })
      Pacientes.value=Pacientes.value.filter(paciente=>paciente.id !== id)

    }
  })

})


</script>


<template >
    <div class="container mx-auto mt-10">
        <Header />

        <div class="mt-12 md:flex">
            <Formulario 
            v-model:nombre="Paciente.nombre"
            v-model:propietario="Paciente.propietario"
            v-model:telefono="Paciente.telefono"
            v-model:email="Paciente.email"
            v-model:alta="Paciente.alta"
            v-model:sintomas="Paciente.sintomas"
            @guardarPaciente="guardarPacientes"
            :id="Paciente.id"

            />

            <div class="md:w-1/2 md:h-screen overflow-y-scroll">
                <h3 class="font-black text-3xl text-center">
                    Administra tus Pacientes
                </h3>
                
                <p class="text-lg mt-5 text-center mb-10">
                    Información de 
                    <span class="text-indigo-600 font-bold">Pacientes</span>
                </p>
                <div v-if="Pacientes.length >0">
                    <PacienteAgg 
                    v-for="Paciente in Pacientes"
                    :Paciente="Paciente"
                    @actualizar-paciente="ActualizarPaciente"
                    @eliminar-paciente="EliminarPaciente"
                    /> 
                </div>
                <p v-else class="mt-10 text-2xl text-center">
                    No Hay Pacientes
                </p>
            </div>
        </div>
    </div>
    <Footer/>
</template>