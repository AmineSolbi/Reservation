<template>
    <div class="overflow-hidden pb-5">
        <!-- Header Section -->
        <Navbar @scroll-to-about="scrollToAboutMe" />
        <!-- Filter Section -->
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] lg:w-[80%] mx-auto p-6 bg-[#0E2641] rounded-lg shadow-lg mt-5">
            <!-- Destination Selector -->
            <div
                class="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full">
                <Icon icon="material-symbols:map-outline-sharp" class="text-2xl text-[#2B70BE]" />
                <select v-model="selectedDestination"
                    class="border-2 border-gray-300 rounded-lg p-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#2B70BE] transition-all duration-300">
                    <option value="">Destinations</option>
                    <option v-for="Dest in Destination" :key="Dest.id" :value="Dest.name">
                        {{ Dest.name }}
                    </option>
                </select>

            </div>

            <!-- Duration Slider -->
            <div class="bg-gray-50 p-4 rounded-lg w-full">
                <label for="range-slider" class="block text-gray-700 font-semibold mb-2">Duration: {{ sliderValue }}
                    day</label>
                <input id="range-slider" type="range" min="2" max="10" v-model="sliderValue"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none" />
                <div class="flex justify-between text-sm text-gray-500 mt-2">
                    <span>2</span>
                    <span>10</span>
                </div>
            </div>

            <!-- Period Selector -->
            <select v-model="selectedPeriod"
                class="border-2 border-gray-300 rounded-lg p-2 w-full sm:w-auto focus:outline-none">
                <option value="">Period</option>
                <option v-for="Dest in Period" :key="Dest.id" :value="Dest.perdios">
                    {{ Dest.perdios }}
                </option>
            </select>


            <!-- Search Button -->
            <div @click="handleSearch"
                class="flex justify-center text-[#2B70BE] bg-white rounded-lg hover:text-white hover:bg-[#2B70BE] duration-300 cursor-pointer">
                <div class="flex items-center justify-center space-x-2">
                    <Icon icon="iconamoon:search-bold" class="text-3xl" />
                    <p class="font-bold text-2xl">Go</p>
                </div>
            </div>
        </div>

        <!-- Other Components -->
        <div class="mt-[40%] md:mt-0">
            <EasyComp />
            <Medium />
            <Hard />
        </div>
        <Me id="AboutMe" />
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue';
import EasyComp from '../components/EasyComp.vue';
import Medium from '../components/Medium.vue';
import Hard from '../components/Hard.vue';
import Me from '../components/Me.vue';
import { useRouter } from 'vue-router';
import destinationData from '../Destination.json'

const router = useRouter();
const scrollToAboutMe = () => {
    const section = document.getElementById('AboutMe');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const selectedDestination = ref('');
const sliderValue = ref(2);
const selectedPeriod = ref(''); 
const Destination = [
    { id: 1, name: 'Toubkal West (4030m) Marrakech' },
    { id: 2, name: 'Toubkal (4167m) marrakech' },
    { id: 3, name: 'Immouzar (4010m) marrakech' },
    { id: 4, name: 'Timezguida (4089m) marrakech' },
    { id: 5, name: 'Ras ouankrim (4083m) marrakech' },
    { id: 6, name: 'Akioid (4030m) marrakech' },
    { id: 7, name: 'Afella (4044m) kesh' },
    { id: 8, name: 'Biquinoussen (4002) kesh' },
    { id: 9, name: 'Iferouane (4001m) kesh' },
    { id: 10, name:'Mgoun (4071m)' },
]
const Period = [
    { id: 1, perdios: 'Jan to Fev' },
    { id: 2, perdios: 'March to October' },
    { id: 3, perdios: 'Mai to Juin' },
    { id: 4, perdios: 'Juil to Août' },
    { id: 5, perdios: 'Sept to Oct' },
    { id: 6, perdios: 'Nov to Déc' },
]

const handleSearch = () => {
    // Ensure that all required fields are filled before searching
    if (!selectedDestination.value || !sliderValue.value || !selectedPeriod.value) {
        alert('Please fill in all required fields.');
        return; // Stop the search if any field is empty
    }
    
    const filteredData = destinationData.filter(dest => {
        // Check if destination matches the selected destination
        const matchesDestination = dest.name.includes(selectedDestination.value);

        // Check if duration matches the selected slider value
        const matchesDuration = dest.duration && parseInt(dest.duration) === Number(sliderValue.value);

        // Check if period matches the selected period
        const matchesPeriod = dest.booking_period && dest.booking_period.includes(selectedPeriod.value);

        return matchesDestination && matchesDuration && matchesPeriod;
        console.log(matchesDestination)
    });
    console.log(selectedDestination.value, sliderValue.value, selectedPeriod.value)
    console.log(filteredData)
    // Redirect with the filtered results
    router.push({
        path: '/results',
        query: {
            filteredResults: JSON.stringify(filteredData)
        }
    });
};




</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>