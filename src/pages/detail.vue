<template>
    <div class="overflow-hidden">
        <Navbar />


        <div class="bg-gray-100 p-6 rounded-lg shadow-lg mx-auto my-10 w-[90%]">
            <!-- Mountain Overview -->
            <div class="text-center">
                <h1 class="text-3xl font-bold text-black mb-4">{{ destination?.name }}</h1>
                <p class="text-xl font-semibold text-gray-700">{{ destination?.overview }}</p>
            </div>

            <!-- Details Section -->
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Duration and Difficulty -->
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Duration</h2>
                    <p class="text-gray-700">{{ destination?.duration }}</p>
                </div>



                <!-- Age Range and Group Size -->
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Age Range</h2>
                    <p class="text-gray-700">{{ destination?.age_range }}</p>
                </div>



                <!-- Itinerary -->
                <div class="bg-white p-4 rounded-lg shadow-md col-span-2">
                    <h2 class="text-lg font-semibold text-[#2B70BE]">Itinerary</h2>
                    <ul class="list-disc pl-6 space-y-4">
                        <li v-for="(day, index) in destination?.itinerary" :key="index" class="text-gray-700">
                            <span class="font-semibold">{{ day.day }}</span>
                            <ul class="list-disc pl-4 space-y-2">
                                <li v-for="(detail, detailIndex) in day.details" :key="detailIndex"
                                    class="text-gray-600">
                                    {{ detail }}
                                </li>
                            </ul>
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
