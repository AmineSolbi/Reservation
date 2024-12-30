<template>
    <div
        class="bg-[#f8f9fa] p-6 rounded-lg shadow-xl mx-auto mt-10 px-5 md:w-[90%] lg:h-[60vh] w-full md:flex md:flex-col md:justify-center md:items-center">
        <!-- Title Section -->
        <div class="text-center">
            <p class="text-4xl font-bold text-[#333]">M’Goun ascent </p>
            <p class="text-lg text-[#555] mt-2">A thrilling adventure that takes you to the summit of M'Goun, one of the
                most majestic peaks in the Atlas Mountains."</p>
            <p class="text-lg text-[#555] italic">
                (click on one of the images to get more information about the mountain selected)
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold mt-5">
                <router-link :to="{ name: 'details', params: { id: 3 } }"> Show the program </router-link>
            </button>
        </div>

        <!-- Mountains Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
            <div v-for="Dest in softMountains" :key="Dest.id"
                class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                @click="openModal(Dest)">
                <!-- Mountain Name -->
                <p class="text-xl font-semibold text-[#333] mb-3">{{ Dest.name }}</p>
                <img :src="Dest.image" alt="Mountain Image" class="w-full h-48 object-cover rounded-lg mb-4" />

                <!-- Title -->
                <p class="text-lg font-medium text-[#444]">{{ Dest.title }}</p>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-all duration-300 ease-in-out">
            <div
                class="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] max-h-[90vh] overflow-auto relative animate-fadeIn">

                <!-- Close Button -->
                <button class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-all duration-300"
                    @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Modal Title -->
                <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center">
                    {{ selectedMountain.name }}
                </h2>
                <p class="text-md sm:text-lg text-gray-600 text-center mb-6 italic">
                    {{ selectedMountain.discoverTitel }}
                </p>

                <!-- Description -->
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-6">
                    {{ selectedMountain.discover }}
                </p>

                <!-- Why Visit Section -->
                <ul class="space-y-4">
                    <li v-for="(reason, index) in selectedMountain.whyVisit" :key="index"
                        class="border-b border-gray-200 pb-4">
                        <h3 class="text-lg sm:text-xl font-semibold text-gray-700">{{ reason.title }}</h3>
                        <p class="text-sm sm:text-base text-gray-600 mt-1">{{ reason.details }}</p>
                    </li>
                </ul>

                <!-- Close Button -->
                <button
                    class="block w-full bg-blue-600 text-white px-4 py-2 mt-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                    @click="closeModal">
                    Close
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";

const softMountains = [
    {
        id: 3,
        name: "M’Goun",
        image: "/images/magoun.jpg", // Replace with an actual image path for M'Goun
        title: "Climbing M'Goun: A Majestic Ascent in the Atlas Mountains",
        discoverTitel: "Conquer M'Goun: A Rewarding Trek to Morocco’s Hidden Gem",
        discover:
            "M'Goun, standing tall at 4,068 meters, is one of the highest peaks in the Atlas Mountains. Known for its rugged beauty, this mountain offers a challenging but awe-inspiring trek for adventure enthusiasts. Surrounded by untouched nature and steeped in Berber culture, M'Goun is a true hidden gem for those looking for a unique mountain experience.",
        whyVisit: [
            {
                title: "Majestic Views",
                details:
                    "From the summit of M'Goun, you'll be greeted by panoramic views of the High Atlas, offering an unforgettable perspective of Morocco’s landscapes."
            },
            {
                title: "Diverse Terrain",
                details:
                    "The trek to M'Goun takes you through varied terrain, from rocky paths to alpine meadows, making it a rewarding challenge for trekkers of all levels."
            },
            {
                title: "Immersive Berber Culture",
                details:
                    "Along the way, you’ll pass through traditional Berber villages, where you can immerse yourself in their rich culture and enjoy the hospitality of the locals."
            },
            {
                title: "Untouched Wilderness",
                details:
                    "M'Goun is less frequented than other peaks, allowing you to experience Morocco’s pristine wilderness without the crowds, making for a peaceful and intimate journey."
            }
        ],
        price: "400 DH",
        duration: "5 Days",
        level: "Moderate to Advanced"
    },
];


// State for modal
const showModal = ref(false);
const selectedMountain = ref({});

// Open modal with selected mountain
const openModal = (mountain) => {
    selectedMountain.value = mountain;
    showModal.value = true;
};

// Close modal
const closeModal = () => {
    showModal.value = false;
    selectedMountain.value = {};
};
</script>
