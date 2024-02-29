
<script>
    import HeaderComp from '../components/header.vue';
    import Miembros from '../components/action_component/miembros.vue';
    import Agregar from '../components/action_component/agregar.vue';
    import Actividad from '../components/action_component/actividad.vue';
    import Puntos from '../components/action_component/puntos.vue';
    export default {
        data() {
            return {
                currentView: 'miembros',
            };
        },
        components: {
            HeaderComp,
            Miembros,
            Agregar,
            Actividad,
            Puntos
        },
        methods: {
            changeView(view) {
                this.currentView = view;
            },
        },
    };
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
                    <button class="px-8 py-1 rounded-full bg-[#1ce178] text-white">
                        Crear Organización
                    </button>
                </div>
            </header>

            <main class="bg-[rgba(18,58,110,255)] px-4 py-2 rounded-2xl">
                <header class="flex justify-between items-center gap-4">

                    <button @click="changeView('miembros')" 
                    :class="{ 'bg-[rgb(16,100,236)]': currentView === 'miembros', 'bg-transparent': currentView !== 'miembros' }"
                    class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Miembros
                    </button>
                    <button @click="changeView('agregar')" 
                    :class="{ 'bg-[rgb(16,100,236)]': currentView === 'agregar', 'bg-transparent': currentView !== 'agregar' }"
                    class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Agregar
                    </button>
                    <button @click="changeView('actividad')" 
                    :class="{ 'bg-[rgb(16,100,236)]': currentView === 'actividad', 'bg-transparent': currentView !== 'actividad' }"
                    class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Actividad
                    </button>
                    <button @click="changeView('puntos')" 
                    :class="{ 'bg-[rgb(16,100,236)]': currentView === 'puntos', 'bg-transparent': currentView !== 'puntos' }"
                    class="w-full text-center py-1 rounded-full text-white border-2 uppercase">
                        Puntos
                    </button>

                </header>

                <section class="mt-3">

                    <div v-if="currentView === 'miembros'" class="relative overflow-x-auto rounded-lg">
                        <h2 class="pb-3 text-lg text-white font-semibold">
                            Lista de Miembros
                        </h2>
                        <Miembros/>
                    </div>
                    <div v-if="currentView === 'agregar'" class="relative overflow-x-auto rounded-lg">
                        <h2 class="pb-3 text-lg text-white font-semibold">
                            Jugadores Cercanos
                        </h2>
                        <Agregar/>
                    </div>
                    <div v-if="currentView === 'actividad'" class="relative overflow-x-auto rounded-lg">
                        <Actividad/>
                    </div>
                    <div v-if="currentView === 'puntos'" class="relative overflow-x-auto rounded-lg">
                        <Puntos/>
                    </div>

                </section>

            </main>

        </section>
     

    </main>


</template>

<style>

</style>
