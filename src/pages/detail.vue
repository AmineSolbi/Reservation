<template>
    <div class="overflow-hidden">
        <Navbar />

        <div class="bg-gray-50 py-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-[#2B70BE] mb-6">Gallery</h2>
            </div>
        </div>

        <div class="bg-gray-100 p-6 rounded-lg shadow-lg mx-auto my-10 w-[90%]">
            <!-- Mountain Overview -->
            <div class="text-center">
                <h1 class="text-3xl font-bold text-[#2B70BE] mb-4">{{ destination?.name }}</h1>
                <p class="text-xl font-semibold text-gray-700">{{ destination?.overview }}</p>
            </div>

            <!-- Details Section -->
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Duration and Difficulty -->
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Duration</h2>
                    <p class="text-gray-700">{{ destination?.duration }}</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Difficulty</h2>
                    <p class="text-gray-700">{{ destination?.difficulty }}</p>
                </div>

                <!-- Age Range and Group Size -->
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Age Range</h2>
                    <p class="text-gray-700">{{ destination?.age_range }}</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Group Size</h2>
                    <p class="text-gray-700">{{ destination?.group_size }}</p>
                </div>

                <!-- Itinerary -->
                <div class="bg-white p-4 rounded-lg shadow-md col-span-2">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Itinerary</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li v-for="(day, index) in destination?.itinerary" :key="index" class="text-gray-700">
                            <span class="font-semibold">Day {{ index + 1 }}:</span> {{ day }}
                        </li>
                    </ul>
                </div>

                <!-- Cost Includes & Excludes -->
                <div class="bg-white p-4 rounded-lg shadow-md col-span-2">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Cost Includes</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li v-for="(item, index) in destination?.cost_includes" :key="index" class="text-gray-700">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md col-span-2">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Cost Excludes</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li v-for="(item, index) in destination?.cost_excludes" :key="index" class="text-gray-700">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Booking Period -->
                <div class="bg-white p-4 rounded-lg shadow-md col-span-2">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Booking Period</h2>
                    <p class="text-gray-700">{{ destination?.booking_period }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/navbar.vue';
import Destination from '../Destination.json' // Change to the correct path

const route = useRoute()
const id = route.params.id
const destination = ref(null)

onMounted(() => {
    // Check if the id exists and find the corresponding destination
    const dest = Destination.find((item) => item.id == id)
    destination.value = dest
})
</script>
