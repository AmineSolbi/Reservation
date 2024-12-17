<template>
    <div
        class="bg-[#f8f9fa] p-6 rounded-lg shadow-xl mx-auto mt-10 px-5 md:w-[90%] lg:h-[60vh] w-full md:flex md:flex-col md:justify-center md:items-center">
        <!-- Title Section for Medium Difficulty -->
        <div class="text-center">
            <p class="text-4xl font-bold text-[#333]">Medium Difficulties</p>
            <p class="text-lg text-[#555] mt-2">
                Ideal for intermediate trekkers seeking challenging yet rewarding trails with stunning views and more
                demanding terrain.
            </p>
        </div>

        <!-- Mountains Grid for Medium Difficulty -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="Dest in mediumMountains" :key="Dest.id"
                class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                <router-link :to="{ name: 'details', params: { id: Dest.id } }">

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
                            <Icon icon="token:lvl" class="text-[#cbda44]" />
                            <p class="text-[#333] font-semibold">{{ Dest.level }}</p>
                        </div>
                    </div>
                </router-link>

            </div>
        </div>
    </div>


</template>

<script setup>
import { Icon } from '@iconify/vue';
const mediumMountains = [
    {
        id:1,
        name: "Toubkal West (4030m) Marrakech",
        image: "/images/toubkal_west.jpg",
        titel: "Toubkal West Trekking Expedition",
        price: "350 DH",
        duration: "5 Days",
        level: "Medium"
    },
    {
        id:8,
        name: "Biquinoussen (4083m) Marrakech",
        image: "/images/ras_ouankrim.jpg",
        titel: "Biquinoussen Adventure",
        price: "$400",
        duration: "6 Days",
        level: "Medium"
    },
    {
        id:6,
        name: "Akioid (4030m) Marrakech",
        image: "/images/akioid.jpg",
        titel: "Akioid Peak Exploration",
        price: "$380",
        duration: "5 Days",
        level: "Medium"
    }
];

</script>