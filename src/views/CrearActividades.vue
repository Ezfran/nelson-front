
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


        <section class="flex flex-col gap-4 mt-4 mx-4 bg-[rgba(18,58,110,255)] rounded-lg  px-4 py-2 ">
            <article class="flex gap-2 items-center">
                    <p class="font-semibold text-white w-[20%]">
                        Nombre de la Organización:
                    </p>
                    <form action="#" class="w-[100%]">
                        <input type="text" placeholder="Ingrese el titulo de la actividad" class="pl-4 w-full rounded-full py-2">
                    </form>
                </article>
            <article class="flex items-center gap-2">
                <p class="font-semibold text-white">
                    Tiempo de actividad:
                </p>
                <div class="rounded-2xl font-semibold p-2 text-2xl text-black bg-white">
                    <p>
                        01:00
                    </p>
                </div>
            </article>
            <article class="flex gap-2 items-center">
                <p class="font-semibold text-white w-[20%]">
                    Recompenza de la actividad:
                </p>
                <form action="#" class="w-[100%]">
                    <input type="text" placeholder="Ingrese el tipo de recompenza" class="pl-4 w-full rounded-full py-2">
                </form>
            </article>
            <article class="flex gap-2 items-center">
                <p class="font-semibold text-white w-[20%]">
                    Detalle de la actividad:
                </p>
                <form action="#" class="w-[120%]">
                    <textarea name="" id="" placeholder="Ingrede el detalle de la actividad" class="h-20 pl-4 w-full rounded-2xl py-2"></textarea>
                </form>
            </article>
            <article class="flex gap-2 items-center">
                <p class="font-semibold text-white">
                    Niveles de las Organizaciones:
                </p>
                <div class="flex gap-2 items-center">
                    <button class="px-4 py-1 text-white bg-[#1ce178] rounded-full">
                        Nivel 1
                    </button>
                    <button class="px-4 py-1 text-[rgba(18,58,110,255)] bg-white rounded-full">
                        Nivel 2
                    </button>
                    <button class="px-4 py-1 text-white bg-[#1ce178] rounded-full">
                        Nivel 3
                    </button>
                    <button class="px-4 py-1 text-[rgba(18,58,110,255)] bg-white rounded-full">
                        Nivel 4
                    </button>
                    <button class="px-4 py-1 text-white bg-[#1ce178] rounded-full">
                        Nivel 5
                    </button>
                </div>
            </article>
            <div class="self-center mt-4 pb-6">
                <button class="bg-[#1ce178] py-2 px-20 rounded-full text-white">
                    Crear Actividad
                </button>
            </div>
        </section>
     

    </main>


</template>

<style>

</style>
