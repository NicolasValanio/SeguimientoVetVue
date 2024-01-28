<script setup>
import {computed} from 'vue'
import Alertas from './Alertas'

const validar =()=>{
  if (Object.values(props).includes('')) {
    Alertas.AlertaError('Todos los campos son obligatorios')
    return
  }else{
    Alertas.AlertaRegistro('Paciente registrado con éxito')
    emit('guardarPaciente')
  }
}


const emit = defineEmits(['update:nombre', 'update:propietario', 'update:telefono', 'update:email', 'update:alta','update:sintomas','guardarPaciente'])

const props = defineProps({
  id:{
    type:[String, null],
    required:true
  },
  nombre:{
    type: String,
    required: true 
  },
  propietario:{
    type: String,
    required: true
  },
  telefono:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  alta:{
    type: String,
    required: true
  },
  sintomas:{
    type: String,
    required: true
  }
})

const editando = computed(()=>{
  return props.id 
})

</script>


<template >
<div class="md:w-1/2">
    <h2 class="font-black text-3xl text-center ">Seguimiento Pacientes</h2>

    <p class="text-lg mt-5 text-center mb-10">
        Añade Pacientes y
        <span class="text-indigo-600 font-bold">Administralos</span>
    </p>

    <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
    @submit.prevent="validar">
        <div class="mb-5">
            <label for="mascota" class="block  text-gray-700 font-bold">
                Nombre Mascota
            </label>
            <input 
                type="text"
                placeholder="Nombre de la Mascota" 
                id="mascota"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                :value="nombre"
                @input="$emit('update:nombre', $event.target.value)"
                >
                
                
        </div>

        <div class="mb-5">
            <label for="propietario" class="block  text-gray-700 font-bold">
                Nombre Propietario
            </label>
            <input 
                type="text"
                placeholder="Nombre del propietario"
                id="propietario"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                :value="propietario"
                @input="$emit('update:propietario', $event.target.value)"
                >
                                    
        </div>

        <div class="mb-5">
            <label for="telefono" class="block  text-gray-700 font-bold">
                Telefono
            </label>
            <input 
                type="number"
                placeholder="Telefono del propietario"
                id="telefono"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                :value="telefono"
                @input="$emit('update:telefono', $event.target.value)"
               >
                
        </div>

        <div class="mb-5">
            <label for="email" class="block  text-gray-700 font-bold">
                Email
            </label>
            <input 
                type="email"
                placeholder="Email del propietario"
                id="email"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                :value="email"
                @input="$emit('update:email', $event.target.value)"
               >
                
        </div>

        <div class="mb-5">
            <label for="alta" class="block  text-gray-700 font-bold">
                Fecha de alta
            </label>
            <input 
                type="date"
                id="alta"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                :value="alta"
                @input="$emit('update:alta', $event.target.value)"
               >     
        </div>

        <div class="mb-5">
            <label for="sintomas" class="block  text-gray-700 font-bold">
                Síntomas
            </label>
            <textarea 
                placeholder="Describe los síntomas"
                id="Síntomas"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-40"
                :value="sintomas"
                @input="$emit('update:sintomas', $event.target.value)"
               >
            </textarea>
        </div>

        <input 
        class="bg-indigo-600 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors w-full p-3 "
        type="submit"
        :value="[editando ?  'Guardar Cambios' : 'Registrar Paciente']"

       >
    </form>
</div>
</template>