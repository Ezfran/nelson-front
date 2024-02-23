
<script setup>
    import HeaderComp from '../components/header.vue';
</script>

<template>
    <HeaderComp/>

    <main class="bg-[rgba(26,39,52,255)] mt-8 rounded-lg overflow-hidden pb-10">

        <header class="bg-[rgba(18,58,110,255)] py-2 px-4 flex justify-between items-center">
            <div class=" flex gap-4 items-center">
                <h1 class="uppercase text-white">
                    Organizaciones
                </h1>
            </div>
            <div>
                <p class="font-semibold uppercase text-white">
                    Cantidad de Miembros
                </p>
            </div>
        </header>


        <section class="flex flex-col gap-4 mt-4 mx-4">

            <header class="flex flex-col justify-between bg-[rgba(18,58,110,255)] px-4 py-2  rounded-2xl">
                <article class="flex gap-2 items-center ">
                    <p class="font-semibold text-white w-[20%]">
                        Nombre de la Organización:
                    </p>
                    <form action="#" class="w-[100%]">
                        <input type="text" class="w-full rounded-full py-2">
                    </form>
                </article>
                <div class="self-center mt-4">
                    <button class="px-8 py-1 rounded-full bg-[rgb(45,168,139)] text-white">
                        Crear Organización
                    </button>
                </div>
            </header>

            <main class="bg-[rgba(18,58,110,255)] px-4 py-2 rounded-2xl">
                <header class="flex justify-between items-center gap-4">
                    <a href="#" class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Miembros
                    </a>
                    <a href="#" class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Agregar
                    </a>
                    <a href="#" class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Actividad
                    </a>
                    <a href="#" class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Puntos
                    </a>
                </header>

                <section class=" mt-10">

                    <div class="relative overflow-x-auto rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead class="text-xs text-white uppercase bg-[rgb(16,100,236)] ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Nombre
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ID Discord
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Rango
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Opciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Nelson Herrera
                                    </th>
                                    <td class="px-6 py-4">
                                        5345324634623452
                                    </td>
                                    <td class="px-6 py-4">
                                        Jefe
                                    </td>
                                    <td class="px-6 py-4">
                                        <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Nelson Herrera
                                    </th>
                                    <td class="px-6 py-4">
                                        5345324634623452
                                    </td>
                                    <td class="px-6 py-4">
                                        Jefe
                                    </td>
                                    <td class="px-6 py-4">
                                        <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Nelson Herrera
                                    </th>
                                    <td class="px-6 py-4">
                                        5345324634623452
                                    </td>
                                    <td class="px-6 py-4">
                                        Jefe
                                    </td>
                                    <td class="px-6 py-4">
                                        <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>

            </main>

        </section>
     

    </main>


</template>

<style>

</style>
