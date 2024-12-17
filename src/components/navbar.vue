<template>
    <div class="bg-white h-auto w-screen py-3 px-5 sm:px-10">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div class="flex items-center">
                <Icon icon="mdi:gmail" class="w-5 h-5 text-[#2B70BE]" />
                <p class="ml-2 text-sm sm:text-base">aminesolbi@gmail.com</p>
            </div>
            <div class="flex items-center">
                <Icon icon="material-symbols:call-sharp" class="w-5 h-5 text-[#2B70BE]" />
                <p class="ml-2 text-sm sm:text-base">06 01 03 03 02</p>
            </div>
            <div
                class="bg-[#2B70BE] text-white flex items-center justify-center rounded-lg py-2 cursor-pointer hover:bg-white hover:border-2 hover:border-[#2B70BE] hover:text-[#2B70BE] transition-all duration-300">
                <button class="text-sm sm:text-base font-semibold">Personalize your tip</button>
                <Icon icon="material-symbols:arrow-forward" class="ml-2" />
            </div>
        </div>
    </div>

    <!-- Logo Section -->
    <div class="bg-black px-5 py-3 sm:px-10 text-white grid grid-cols-2 items-center">
        <div class="flex items-center space-x-3">
            <img src="../assets/images/Atlas_white2.png" class="w-[4%] object-cover">
            <a href="/" class="font-bold text-lg sm:text-2xl lg:-mt-1">BEYOND ATLAS</a>
        </div>
        <div>
            <a href="#AboutMe" class="text-sm sm:text-lg font-semibold text-right" @click.prevent="handleAboutMeClick">
                About Me
            </a>
        </div>
    </div>


    <!-- Hero Section -->
    <div class="relative">
        <p class="font-bold text-2xl sm:text-5xl text-white absolute top-[20%] left-5 sm:left-10 w-[90%] sm:w-[60%]">
            Experience seamless expedition planning with our powerful web platform for mountain adventures!
        </p>
        <img src="../assets/images/Montain.jpg" class="h-[300px] sm:h-[400px] w-screen object-cover" />
    </div>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const emit = defineEmits(['scroll-to-about']);
const router = useRouter();
const route = useRoute();

const handleAboutMeClick = () => {
    if (route.path !== '/') {
        // Redirect to home page and add a query/fragment
        router.push({ path: '/', hash: '#AboutMe' });
    } else {
        // If already on the home page, emit the event to scroll
        emit('scroll-to-about');
    }
};
</script>