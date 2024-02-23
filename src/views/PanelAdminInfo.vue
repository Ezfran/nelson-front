
<script setup>
    import HeaderComp from '../components/headerAdmin.vue';
</script>

<template>
    <HeaderComp/>

    <main class="bg-[rgba(26,39,52,255)] mt-8 rounded-lg overflow-hidden pb-10">

        <header class="bg-[rgba(18,58,110,255)] p-4 flex justify-between items-center">
            <div class=" flex gap-4 items-center">
                <h1 class="uppercase font-semibold text-white">
                    Información
                </h1>
            </div>
        </header>

        <section class="mt-4">

            <article class="bg-[rgba(18,58,110,255)] mx-4 rounded-2xl py-4 px-2 flex justify-around items-center">
                <section class=" flex flex-col gap-4 items-end  w-5/12">
                    <div class="flex gap-2">
                        <p class="font-semibold text-white">
                            Miembros
                        </p>
                        <div class="bg-white w-32 h-6 rounded-full overflow-hidden relative flex items-center justify-center">
                            <div class="bg-yellow-300 rounded-r-full w-10 h-full absolute left-0"></div>
                            <span class="z-50 text-black">
                                3/10
                            </span>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <p class="font-semibold text-white">
                            Puntos diarios
                        </p>
                        <div class="bg-white w-32 h-6 rounded-full overflow-hidden relative flex items-center justify-center">
                            <div class="bg-yellow-300 rounded-r-full w-10 h-full absolute left-0"></div>
                            <span class="z-50 text-black">
                                3/10
                            </span>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <p class="font-semibold text-white">
                            Nivel
                        </p>
                        <div class="bg-white w-32 h-6 rounded-full overflow-hidden relative flex items-center justify-center">
                            <div class="bg-yellow-300 rounded-r-full w-10 h-full absolute left-0"></div>
                            <span class="z-50 text-black">
                                3/10
                            </span>
                        </div>
                    </div>
                </section>
                <section class="flex flex-col gap-3 bg-red-200">
                    <button>
                        Actividades Diarias
                    </button>
                    <button>
                        Opciones
                    </button>
                </section>
            </article>

        </section>

    </main>


</template>

<style>

</style>
