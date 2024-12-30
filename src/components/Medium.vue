<template>
    <div
        class="bg-[#f8f9fa] p-6 rounded-lg shadow-xl mx-auto mt-10 px-5 md:w-[90%] lg:h-[60vh] w-full md:flex md:flex-col md:justify-center md:items-center">
        <!-- Title Section -->
        <div class="text-center">
            <p class="text-4xl font-bold text-[#333]">Pack Ras n’Ouanoukrim et Timzguida</p>
            <p class="text-lg text-[#555] mt-2">
                An exceptional adventure offering the chance to conquer two of the most breathtaking peaks in the
                Atlas Mountains </p>
            <p class="text-lg text-[#555] italic">
                (click on one of the images to get more information about the mountain selected)
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold mt-5">
                <router-link :to="{ name: 'details', params: { id: 1 } }"> Show the program </router-link>
            </button>
        </div>

        <!-- Mountains Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
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
        id: 1,
        name: "Ras n’Ouanoukrim",
        image: "/images/ras_ouankrim.jpg",
        title: "Explore Ras n’Ouanoukrim: A Hidden Peak of the Atlas",
        discoverTitel: "Climbing Ras n’Ouanoukrim: An Adventurous Challenge",
        discover:
            "Ras n’Ouanoukrim is a challenging yet rewarding peak located in the High Atlas Mountains. Offering stunning panoramic views and a serene environment, this mountain is perfect for adventure seekers who crave a more remote trekking experience.",
        whyVisit: [
            {
                title: "Challenging Terrain",
                details:
                    "Ras n’Ouanoukrim provides a challenging and rugged trekking experience with steep inclines and rocky paths, ideal for seasoned trekkers."
            },
            {
                title: "Secluded Beauty",
                details:
                    "Less crowded than its more famous neighbors, Ras n’Ouanoukrim offers an opportunity to enjoy untouched natural beauty and peaceful landscapes."
            },
            {
                title: "Breathtaking Views",
                details:
                    "From the summit, you’ll be rewarded with views of neighboring peaks and valleys that are simply mesmerizing, offering both tranquility and awe."
            },
            {
                title: "Immersive Cultural Experience",
                details:
                    "Along the trek, immerse yourself in the culture of local Berber villages, enjoying their warm hospitality and traditional customs."
            }
        ],
        price: "350 DH",
        duration: "4 Days",
        level: "Moderate to Advanced"
    },

    {
        id: 2,
        name: "Timzguida",
        image: "/images/timezguida.jpg",
        title: "The Jewel of the High Atlas: Timzguida Peak",
        discoverTitel: "Discover Timzguida: A Peak with Majestic Views",
        discover:
            "Timzguida is one of the most scenic peaks in the High Atlas Mountains, offering trekkers an opportunity to explore rugged terrain, discover vibrant valleys, and enjoy unparalleled views of the surrounding regions. A perfect choice for those seeking a balance of adventure and natural beauty.",
        whyVisit: [
            {
                title: "Stunning Scenery",
                details:
                    "Timzguida is known for its picturesque landscapes, offering an incredible combination of rock formations, valleys, and panoramic views."
            },
            {
                title: "Diverse Terrain",
                details:
                    "The trek to Timzguida involves a variety of terrains, including rocky paths, meadows, and alpine environments, making it a unique hiking experience."
            },
            {
                title: "Cultural Richness",
                details:
                    "Explore Berber villages nestled in the mountains, interact with the locals, and experience authentic Moroccan culture."
            },
            {
                title: "Ideal for Moderate Hikers",
                details:
                    "Timzguida offers a trekking experience that is accessible to moderate-level hikers, while still providing enough challenge to make the summit a rewarding achievement."
            }
        ],
        price: "280 DH",
        duration: "3 Days",
        level: "Moderate"
    }
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
