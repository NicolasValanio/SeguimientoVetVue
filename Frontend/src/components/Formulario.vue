<script setup>
// import { Ref } from 'vue'

// const 


</script>


<template >
<div class="md:w-1/2">
    <h2 class="font-black text-3xl text-center ">Seguimiento Pacientes</h2>

    <p class="text-lg mt-5 text-center mb-10">
        Añade Pacientes y
        <span class="text-indigo-600 font-bold">Administralos</span>
    </p>

    <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div class="mb-5">
            <label for="mascota" class="block  text-gray-700 font-bold">
                Nombre Mascota
            </label>
            <input 
                type="text"
                placeholder="Nombre de la Mascota"
                id="mascota"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                
        </div>

        <div class="mb-5">
            <label for="propietario" class="block  text-gray-700 font-bold">
                Nombre Propietario
            </label>
            <input 
                type="text"
                placeholder="Nombre del propietario"
                id="propietario"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                
        </div>

        <div class="mb-5">
            <label for="telefono" class="block  text-gray-700 font-bold">
                Telefono
            </label>
            <input 
                type="number"
                placeholder="Telefono del propietario"
                id="telefono"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                
        </div>

        <div class="mb-5">
            <label for="email" class="block  text-gray-700 font-bold">
                Email
            </label>
            <input 
                type="email"
                placeholder="Email del propietario"
                id="email"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                
        </div>

        <div class="mb-5">
            <label for="alta" class="block  text-gray-700 font-bold">
                Fecha de alta
            </label>
            <input 
                type="date"
                id="alta"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">     
        </div>

        <div class="mb-5">
            <label for="sintomas" class="block  text-gray-700 font-bold">
                Síntomas
            </label>
            <textarea 
                placeholder="Describe los síntomas"
                id="Síntomas"
                class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-40">
            </textarea>
        </div>

        <input 
        class="bg-indigo-600 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors w-full p-3 "
        type="submit"
        value="Registrar Paciente ">
    </form>
</div>
</template>