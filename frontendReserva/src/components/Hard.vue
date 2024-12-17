<template>
    <div
        class="bg-[#f8f9fa] p-6 rounded-lg shadow-xl mx-auto mt-10 px-5 md:w-[90%] lg:h-[60vh] w-full md:flex md:flex-col md:justify-center md:items-center">
        <!-- Title Section for Hard Difficulty -->
        <div class="text-center">
            <p class="text-4xl font-bold text-[#333]">Hard Difficulties</p>
            <p class="text-lg text-[#555] mt-2">
                Designed for experienced trekkers who are looking for extreme challenges with technical terrain and high
                altitudes.
            </p>
        </div>


        <!-- Mountains Grid for Hard Difficulty -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="Dest in hardMountains" :key="Dest.id"
                class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ">
                <!-- Mountain Name -->
                <p class="text-xl font-semibold text-[#333] mb-3">{{ Dest.name }}</p>
                <img :src="Dest.image" alt="Mountain Image" class="w-full h-48 object-cover rounded-lg mb-4">

                <!-- Title -->
                <p class="text-lg font-medium text-[#444]">{{ Dest.titel }}</p>

                <hr class="my-4 border-t-2 border-gray-200">

                <!-- Info Section -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <!-- Price -->
                    <div class="flex items-center justify-start space-x-2">
                        <Icon icon="iconoir:coins" class="text-[#1D4ED8]" />
                        <p class="text-[#333] font-semibold">{{ Dest.price }}</p>
                    </div>

                    <!-- Duration -->
                    <div class="flex items-center justify-start space-x-2">
                        <Icon icon="ic:baseline-access-time" class="text-[#F59E0B]" />
                        <p class="text-[#333] font-semibold">{{ Dest.duration }}</p>
                    </div>

                    <!-- Level -->
                    <div class="flex items-center justify-start space-x-2">
                        <Icon icon="token:lvl" class="text-[#DC2626]" />
                        <p class="text-[#333] font-semibold">{{ Dest.level }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { Icon } from '@iconify/vue';
const hardMountains = [
    {
        id:2,
        name: "Toubkal (4167m) Marrakech",
        image: "src/assets/images/toubkal.jpg",
        titel: "Toubkal Summit Challenge",
        price: "600 DH",
        duration: "7 Days",
        level: "Hard"
    },
    {
        id:9,
        name: "Iferouane (4001m) Kesh",
        image: "src/assets/images/timezguida.jpg",
        titel: "Iferouane Peak Expedition",
        price: "700 DH",
        duration: "8 Days",
        level: "Hard"
    },
    {
        id:10,
        name: "Mgoun (4071m) Azilal",
        image: "src/assets/images/magoun.jpg",
        titel: "Mgoun Summit Adventure",
        price: "650 DH",
        duration: "6 Days",
        level: "Hard"
    }
];

</script>