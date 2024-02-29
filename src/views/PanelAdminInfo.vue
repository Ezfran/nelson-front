
<script>
    import HeaderComp from '../components/headerAdmin.vue';
    import modalActivides from '../components/modals/actividades.vue'
    export default {
        components: {
            HeaderComp,
            modalActivides
        },
        data() {
            return {
                option: true,
                closeModal: false,
                option2: true
            };
        },
        methods: {
            changeOption() {
                this.option = !this.option;
            },
            changeOption2() {
                this.option2 = !this.option2;
            },
            
            closeModalFunc() {
                this.closeModal = !this.closeModal;
            },
        },
    };
</script>

<template>
    <HeaderComp/>

    <main class="bg-[rgba(26,39,52,255)] mt-8 rounded-lg overflow-hidden pb-5">

        <header class="bg-[rgba(9,102,233,255)] p-4 flex justify-between items-center">
            <div class=" flex gap-4 items-center">
                <h1 class="uppercase font-semibold text-white">
                    Información
                </h1>
            </div>
        </header>

        <section class="mt-4 flex flex-col gap-4">

            <article class="bg-[rgba(18,58,110,255)] mx-4 rounded-2xl py-4 px-2 flex justify-around items-center">
                <section class=" flex flex-col gap-4 items-end ">
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
                <section class="flex flex-col gap-3 items-start">
                    <button  @click="closeModalFunc()" class="w-48 py-2 bg-[rgba(8,35,78,255)] border relative border-white rounded-full self-center text-white font-semibold">
                        <i class="fa-solid fa-clipboard-list mr-1"></i>
                        Actividades Diarias
                        <span class="h-6 w-6 absolute text-white right-0 top-0 translate-x-3 -translate-y-1 rounded-full bg-red-500 flex items-center justify-center">
                            2
                    </span>
                    </button>
                    <button class="w-48 py-2 bg-[rgba(8,35,78,255)] border border-white rounded-full self-center text-white font-semibold">
                        <i class="fa-solid fa-gear mr-1"></i>
                        Opciones
                    </button>
                </section>
            </article>
            <article class="bg-[rgba(18,58,110,255)] mx-4 rounded-2xl overflow-hidden flex justify-around items-center flex-col">
                <header class="flex justify-between items-center w-full bg-[rgba(9,102,233,255)]  p-4">
                    <p class="uppercase font-semibold text-white">
                        Miembros
                    </p>
                    <p class="uppercase font-semibold text-white">
                        Rangos
                    </p>
                </header>
                <section class="flex w-full justify-between items-center p-4">
                   <div>
                        <article class="flex items-center gap-2 text-white">
                        <div class="h-3 w-3 bg-[#1ce178] rounded-full">

                        </div> 
                        <p>
                            Salami
                        </p>
                        </article>
                        <article class="flex items-center gap-2 text-white">
                        <div class="h-3 w-3 bg-gray-800 rounded-full">

                        </div> 
                        <p>
                            Nelson
                        </p>
                        </article>
                   </div>
                   <div class="flex flex-col text-end text-white">
                    <p>
                        Jefe
                    </p>
                    <p>
                        Mano Derecha
                    </p>
                   </div>
                </section>
            </article>

        </section>

    </main>
    <main class="bg-[rgba(26,39,52,255)] mt-8 rounded-lg overflow-hidden ">

        <header class="bg-[rgba(9,102,233,255)] p-4 flex justify-between items-center">
            <div class=" flex gap-4 items-center">
                <h1 class="uppercase font-semibold text-white">
                    Notificaciones
                </h1>
            </div>
        </header>

        <section class="flex w-full justify-between items-center p-4 font-semibold">
            <div class="flex flex-col text-[rgba(255,255,255,0.5)] gap-4">
                <p>
                    Nueva actividad disponible: SuperGangWar
                </p>
                <p>
                    Has fallado el examen para la verificacion Dueño de empresa, puedes volver a intentarlo una vez cada 45 minutos.
                </p>
            </div>
            <div class="flex flex-col text-end text-[rgba(255,255,255,0.5)] ">
                <p>
                    2m
                </p>
                <p>
                    5m
                </p>
            </div>
        </section>

    </main>

    <section>

        <main v-if="closeModal" class="bg-[rgba(0,0,0,0.5)] overflow-y-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <section class="relative p-4 w-full max-w-xl max-h-full">
                <div class="relative bg-[#142340] rounded-3xl text-white p-6">
                    <header class="flex justify-between items-center">
                        <h1 class="uppercase text-2xl font-bold">
                            Actividades diarias
                        </h1>
                        <button @click="closeModalFunc()" class="h-5 w-5 rounded-full border-red-700 border-2 bg-transparent text-lg text-white grid place-content-center p-4">
                            X
                        </button>
                    </header>
                    <article class="flex flex-col mt-4">
                        <p>
                            Aquí veras las actividades diarias de la organización.
                        </p>
                        <p class="-mt-1">
                            ¡Procura completarlas todas para mantener a la organización activa!
                        </p>
                    </article>

                    <section class="flex flex-col gap-2.5">

                        <article class="px-5 py-6 bg-[#113a78] rounded-2xl mt-5">
                            <header class="flex justify-between items-center">
                                <div>
                                    <p class="text-lg font-semibold">
                                    <i class="fa-solid fa-car mr-1"></i>
                                        Roba un vehiculo
                                    </p>
                                </div>
                                <article class="flex items-center gap-2">
                                    <div class="bg-gray-500 w-40 h-6 rounded-full overflow-hidden relative flex items-center justify-center">
                                        <div class="bg-green-500 rounded-r-full w-8 h-full absolute left-0"></div>
                                        <span class="z-50 text-white">
                                            1/7
                                        </span>
                                    </div>
                                    <button class="" @click="changeOption2()">
                                        <span class="inline-block transform text-lg" :class="option ? 'rotate-90' : '-rotate-90'">
                                            &#10095;
                                        </span>
                                    </button>
                                </article>
                            </header>
                            <div class="flex gap-2 mt-3">

                                <div v-if="option2" class="w-full flex gap-2">
                                    <p class="text-[#a59f6d] font-semibold pr-2 border-r-2 border-[rgba(255,255,255,0.3)]">
                                        Disponible
                                    </p>
                                    <p class="flex items-center gap-2">
                                        Tiempo para completar:
                                        <span class="font-bold inline-block text-xl text-[#1ea670]">
                                            01:00
                                        </span>
                                    </p>
                                </div>

                                <div v-if="!option2" class="w-full">
                                    <div class="w-full h-52 overflow-hidden rounded-2xl">
                                        <img src="../assets/gta.webp" class="w-full h-full object-cover" alt="">
                                    </div>
                                    <p class="leading-5 font-medium mt-2">
                                        Deberás ir en busqueda de un vehiculo para robarlo y luego entregarlo a un contacto de venta rápida.
                                    </p>
                                    <button class="mt-4 w-full bg-[#0964e6] py-2 rounded-full text-lg font-semibold">
                                        <span class="transform inline-block translate-y-[0.4px] mx-1">
                                            <i class="fa-solid fa-play"></i>
                                        </span>
                                        Iniciar actividad 
                                        #<span class="inline-block">
                                            2
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </article>
                        
                        <article class="px-5 py-6 bg-[#113a78] rounded-2xl">
                            <header class="flex justify-between items-center">
                                <div>
                                    <p class="text-lg font-semibold">
                                        <i class="fa-solid fa-house mr-1"></i>
                                        Roba una casa
                                    </p>
                                </div>
                                <article class="flex items-center gap-2">
                                    <div class="bg-gray-500 w-40 h-6 rounded-full overflow-hidden relative flex items-center justify-center">
                                        <div class="bg-green-500 rounded-r-full w-8 h-full absolute left-0"></div>
                                        <span class="z-50 text-white">
                                            1/7
                                        </span>
                                    </div>
                                    <button class="" @click="changeOption()">
                                        <span class="inline-block transform text-lg" :class="option ? 'rotate-90' : '-rotate-90'">
                                            &#10095;
                                        </span>
                                    </button>
                                </article>
                            </header>

                            <div class="flex gap-2 mt-3">

                                <div v-if="option" class="w-full flex gap-2">
                                    <p class="text-[#a59f6d] font-semibold pr-2 border-r-2 border-[rgba(255,255,255,0.3)]">
                                        Disponible
                                    </p>
                                    <p class="flex items-center gap-2">
                                        Tiempo para completar:
                                        <span class="font-bold inline-block text-xl text-[#1ea670]">
                                            01:00
                                        </span>
                                    </p>
                                </div>

                                <div v-if="!option" class="w-full">
                                    <div class="w-full h-52 overflow-hidden rounded-2xl">
                                        <img src="../assets/gta.webp" class="w-full h-full object-cover" alt="">
                                    </div>
                                    <p class="leading-5 font-medium mt-2">
                                        Dirige a una propiedad a la cual puedes ingresar para robar lo que encuentres de valor en su interior para luego venderlo y obtener tu ganancia.
                                    </p>
                                    <button class="mt-4 w-full bg-[#0964e6] py-2 rounded-full text-lg font-semibold">
                                        <span class="transform inline-block translate-y-[0.4px] mx-1">
                                            <i class="fa-solid fa-play"></i>
                                        </span>
                                        Iniciar actividad 
                                        #<span class="inline-block">
                                            2
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </article>

                    </section>

                </div>
            </section>
        </main>
        
    </section>


</template>

<style>

</style>
