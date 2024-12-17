<template>
    <div class="overflow-hidden">
        <Navbar />
        <div class="w-[90%] lg:w-[90%] mx-auto mt-10">
            <h2 class="text-3xl font-bold text-[#2B70BE] mb-6 text-center">Filtered Results</h2>

            <!-- Filtered Destinations -->
            <div v-if="filteredDestinations.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="dest in filteredDestinations" :key="dest.id"
                    class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <router-link :to="{ name: 'details', params: { id: dest.id } }">
                        <img :src="dest.image" alt="Destination Image" class="w-full h-56 object-fill rounded-lg mb-4">
                        <h3 class="text-xl font-semibold text-[#2B70BE] mb-2">{{ dest.name }}</h3>
                        <p class="text-gray-700">Duration: {{ dest.duration }} days</p>
                        <p class="text-gray-700">Period: {{ dest.booking_period }}</p>
                        <p class="text-gray-600 mt-2">{{ dest.activities }}</p>
                        <div class="flex justify-between mt-4">
                            <span class="text-sm text-gray-500">Group Size: {{ dest.group_size }}</span>
                            <span class="text-sm text-gray-500">Difficulty: {{ dest.difficulty }}</span>
                        </div>
                    </router-link>
                </div>
            </div>

            <!-- No Results Message -->
            <div v-else>
                <p class="text-gray-700 text-center font-semibold">No destinations match your criteria.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/navbar.vue';

const route = useRoute();

// Initializing filteredDestinations and parsing query results
let filteredDestinations = ref([]);

try {
    const results = route.query.filteredResults
        ? JSON.parse(decodeURIComponent(route.query.filteredResults))
        : [];
    filteredDestinations.value = results;
} catch (error) {
    console.error("Failed to parse filteredResults:", error);
    filteredDestinations.value = [];
}
</script>

<style scoped>
/* Additional Styling */
.bg-white {
    background-color: #ffffff;
}

.shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.hover\:shadow-2xl:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08);
}

.transition-shadow {
    transition: box-shadow 0.3s ease-in-out;
}

img {
    border-radius: 8px;
    object-fit: cover;
}

h2 {
    font-size: 2rem;
    color: #2B70BE;
}

h3 {
    font-size: 1.2rem;
    color: #2B70BE;
}

.text-gray-700 {
    color: #4a4a4a;
}

.text-gray-600 {
    color: #6b6b6b;
}

.text-gray-500 {
    color: #9b9b9b;
}

.text-sm {
    font-size: 0.875rem;
}

.text-center {
    text-align: center;
}

.font-semibold {
    font-weight: 600;
}

.mt-4 {
    margin-top: 1rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mt-2 {
    margin-top: 0.5rem;
}
</style>
