<template>
    <div
        class="bg-[#f8f9fa] p-6 rounded-lg shadow-xl mx-auto mt-10 px-5 md:w-[90%] lg:h-[60vh] w-full md:flex md:flex-col md:justify-center md:items-center">
        <!-- Title Section -->
        <div class="text-center">
            <p class="text-4xl font-bold text-[#333]">Pack Toubkal</p>
            <p class="text-lg text-[#555] mt-2">
                A marvelous package that includes three of the most stunning mountains
            </p>
            <p class="text-lg text-[#555] italic">
                (click on one of the images to get more information about the montain selected)
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold mt-5">
                <router-link :to="{ name: 'details', params: { id: 2 } }"> Show the program </router-link>
            </button>
        </div>

        <!-- Mountains Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
        name: "Toubkal Ouest",
        image: "/images/toubkal_west.jpg",
        title: "Exploring mount toubkal's twin",
        discoverTitel: "Explore Toubkal Ouest: A Hidden Gem of the Atlas",
        discover:
            "Toubkal Ouest offers an off-the-beaten-path adventure in the heart of the High Atlas. Standing close to its famous neighbor, Mount Toubkal, this peak is perfect for those seeking tranquility and untouched beauty. Ideal for trekkers and nature lovers, it provides a rare glimpse into Morocco's unspoiled wilderness.",
        whyVisit: [
            {
                title: "Serene and Less Crowded",
                details:
                    "Unlike its bustling counterpart, Toubkal Ouest offers a peaceful escape with fewer trekkers, making it perfect for those seeking solitude."
            },
            {
                title: "Unique Landscapes",
                details:
                    "Discover pristine valleys, dramatic ridges, and scenic trails that remain largely untouched by mass tourism."
            },
            {
                title: "Rich Berber Culture",
                details:
                    "Immerse yourself in the traditions of Berber communities, exploring quaint villages and enjoying the warmth of local hospitality."
            },
            {
                title: "Stunning Panoramic Views",
                details:
                    "From the summit, enjoy breathtaking views of the surrounding peaks, verdant valleys, and the distant Sahara Desert."
            },
            {
                title: "A Great Adventure for All Levels",
                details:
                    "The trek to Toubkal Ouest is suitable for hikers of all levels, with well-marked trails and excellent local guides ensuring a safe and rewarding journey."
            }
        ],
        price: "300 DH",
        duration: "4 Days",
        level: "Moderate"
    },

    {
        id: 2,
        name: "Toubkal",
        image: "/images/toubkal.jpg",
        title: "Discover Mount Toubkal: The Jewel of the High Atlas",
        description: "Mount Toubkal, standing at an impressive 4,167 meters (13,671 feet), is the crown jewel of the Atlas Mountains and the highest peak in North Africa...",
        discoverTitel: 'Discover Mount Toubkal: The Jewel of the High Atlas',
        discover:'Mount Toubkal, standing at an impressive 4,167 meters (13,671 feet), is the crown jewel of the Atlas Mountains and the highest peak in North Africa. This iconic destination offers a perfect blend of natural beauty, cultural richness, and adventure, making it a must-visit for both seasoned trekkers and nature enthusiasts.',
        whyVisit: [
            {
                title: "Breathtaking Scenery",
                details: "Immerse yourself in the stunning landscapes of the High Atlas, with dramatic peaks, verdant valleys..."
            },
            {
                title: "A Gateway to Adventure",
                details: "The trek to Toubkal is an exhilarating journey that caters to both beginners and experienced hikers..."
            },
            {
                title: "Cultural Experience",
                details: "Explore the rich Berber culture as you pass through traditional villages, meet friendly locals..."
            },
            {
                title: "Unforgettable Summit Experience",
                details: "Reaching the summit of Toubkal is a once-in-a-lifetime experience. From the top, you'll enjoy panoramic views..."
            },
            {
                title: "Accessible and Well-Supported",
                details: "The trek is well-supported with local guides, muleteers, and accommodations ranging from mountain refuges..."
            }
        ],
        price: "280 DH",
        duration: "3 Days",
        level: "Easy"
    },
    {
        id: 8,
        name: "Imouzzer (Tibherine)",
        image: "/images/Iferouane.jpg",
        title: "Imouzzer the mountain that calls you to adventure",
        discoverTitel: "Discover Imouzzer (Tibherine): A Cultural and Natural Escape",
        discover:
            "Nestled in the heart of the Atlas Mountains, Imouzzer (Tibherine) is a hidden paradise offering a perfect blend of rugged beauty and rich cultural heritage. Known for its lush landscapes and authentic Berber villages, this trek is an ideal escape for travelers looking to immerse themselves in nature while experiencing Morocco's unique cultural traditions.",
        whyVisit: [
            {
                title: "Cultural Richness",
                details:
                    "Imouzzer (Tibherine) is home to vibrant Berber communities, where you can witness centuries-old traditions, visit local markets, and experience Moroccan hospitality at its finest."
            },
            {
                title: "Stunning Waterfalls",
                details:
                    "One of the highlights of this trek is the breathtaking waterfall near Imouzzer, a serene spot perfect for relaxing and taking in the natural beauty."
            },
            {
                title: "Lush Green Valleys",
                details:
                    "The verdant valleys and terraced fields in this region create a picturesque landscape, with the contrast of the mountains and the greenery offering stunning panoramic views."
            },
            {
                title: "Off-the-Beaten-Path Experience",
                details:
                    "Unlike more popular trekking routes, Imouzzer offers an intimate experience with nature and local culture, making it ideal for those looking for something more peaceful and authentic."
            },
            {
                title: "A Journey Through Time",
                details:
                    "As you walk through the ancient villages, you'll be transported back in time, discovering the Berber way of life that has remained largely unchanged for generations."
            }
        ],
        price: "320 DH",
        duration: "5 Days",
        level: "Easy"
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
