
<script setup>
    import HeaderComp from '../components/header.vue';
</script>

<template>
    <HeaderComp/>

    <main class="bg-[rgba(26,39,52,255)] mt-8 rounded-lg overflow-hidden pb-10">

        <header class="bg-[rgba(18,58,110,255)] p-4 flex justify-between items-center">
            <div class=" flex gap-4 items-center">
                <h1 class="uppercase text-white">
                    Organizaciones
                </h1>
                <a href="#" class="font-semibold py-2 px-6 border-2 border-[rgba(79,183,168,255)] rounded-full bg-[rgba(12,45,79,255)] text-sm text-[rgba(79,183,168,255)]">
                    Notificaciones
                </a>
            </div>
            <div>
                <p class="font-semibold uppercase text-white">
                    Cantidad de Miembros
                </p>
            </div>
        </header>

        <section class="mt-4">

            <article class="bg-[rgba(18,58,110,255)] mx-4 rounded-2xl py-4 px-2">
                <header class="flex gap-4 text-white relative">
                    <h1 class="text-xl relative flex items-center gap-1 font-semibold">
                        <span>
                            &#9760;
                        </span>
                            Los Mercenarios Oficial 2
                        <span class="bg-white text-black text-base font-semibold h-6 w-6 rounded-full flex items-center justify-center">
                            2 
                        </span>
                    </h1>
                    <div class="flex gap-2 border-l-2 border-[rgba(255,255,255,0.1)] pl-2.5">
                        <p>
                            Puntos diarios
                        </p>
                        <div class="bg-white w-56 h-6 rounded-full overflow-hidden relative flex items-center justify-center">
                            <div class="bg-yellow-300 rounded-r-full w-14 h-full absolute left-0"></div>
                            <span class="z-50 text-black">
                                58/160
                            </span>
                        </div>
                    </div>
                    <p class="absolute top-0 right-0">
                        2/10
                        <span class="">
                            &#10148;
                        </span>
                    </p>
                </header>
                <div class="mt-3 flex items-center gap-2">
                    <p class="font-semibold text-white">
                        Puntos
                    </p>
                    <div class="flex gap-2">
                        <a href="#" class="px-4 py-1 rounded-full text-[rgb(45,168,139)] border-2 border-[rgba(62,137,165,255)]">
                            Agregar
                        </a>
                        <a href="#" class="px-4 py-1 rounded-full text-[rgba(175,59,88,255)] border-2 border-[rgba(175,59,88,255)]">
                            Eliminar
                        </a>
                        <a href="#" class="px-4 py-1 rounded-full text-[rgb(173,159,92)] border-2 border-[rgba(112,138,133,255)]">
                            Agregar integrantes
                        </a>
                    </div>
                </div>
            </article>

        </section>

    </main>


</template>

<style>

</style>
