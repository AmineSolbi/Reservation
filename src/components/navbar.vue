<template>
    <!-- Top Bar -->
    <div class="bg-white h-auto w-screen py-3 px-5 sm:px-10">
        <div class="flex justify-between items-center space-x-3">
            <!-- Logo Section -->
            <div class="flex items-center space-x-3 w-full sm:w-auto">
                <a href="/" class="font-bold text-lg sm:text-2xl">BEYOND ATLAS</a>
            </div>
            <!-- Buttons Section -->
            <div class="flex flex-col sm:flex-row sm:space-x-3 w-full sm:w-auto mt-3 sm:mt-0">
                <!-- Booking Contact Button -->
                <button @click="toggleModal"
                    class="flex items-center space-x-2 px-4 py-2 bg-[#2B70BE] text-white rounded-md w-full sm:w-auto mb-2 sm:mb-0">
                    <span>To book a trip contact us</span>
                </button>

                <!-- Join the Team Button (Green) -->
                <a href="https://chat.whatsapp.com/H5vdwPscjo8CFbVaMbrg8j"
                    class="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-md w-full sm:w-auto">
                    <span>Join the team</span>
                </a>
            </div>
        </div>
    </div>




    <!-- Modal for Contact Info -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg w-80 sm:w-96 p-6">
            <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
            <div class="space-y-4">
                <div class="flex items-center">
                    <Icon icon="mdi:gmail" class="w-5 h-5 text-black" />
                    <p class="ml-2 text-base font-semibold">Beyondatlas@gmail.com</p>
                </div>
                <div class="flex items-center">
                    <Icon icon="material-symbols:call-sharp" class="w-5 h-5 text-black" />
                    <p class="ml-2 text-base font-semibold">0661804454</p>
                </div>
                <div class="flex items-center">
                    <Icon icon="mdi:instagram" class="w-5 h-5 text-black" />
                    <a href="https://www.instagram.com/beyond__atlas?igsh=Y3RydTJjNDBucG9z"
                        class="ml-2 text-base font-semibold">Beyond Atlas</a>
                </div>
            </div>
            <button @click="toggleModal" class="mt-6 w-full bg-[#2B70BE] text-white py-2 rounded-md">
                Close
            </button>
        </div>
    </div>

    <!-- Navigation Bar -->
    <div
        class="bg-black px-5 py-3 sm:px-10 text-white grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-0 place-items-center">
        <!-- Logo Section -->
        <div class="flex justify-center sm:justify-start w-full">
            <img src="/images/Atlas_white2.png" alt="Logo" class="w-12 sm:w-16">
        </div>

        <!-- Links Section -->
        <div class="w-full flex justify-center sm:justify-end space-x-4 sm:space-x-6 mt-3 sm:mt-0">
            <!-- About Us Link -->
            <div class="flex items-center">
                <a href="#AboutMe" class="text-sm sm:text-lg font-semibold" @click.prevent="handleAboutMeClick">
                    About Us
                </a>
            </div>

            <!-- Dropdown Menu: Mountaineering -->
            <div class="relative inline-block text-left z-40">
                <Menu as="div">
                    <MenuButton
                        class="sm:text-lg inline-flex items-center text-sm font-medium text-white bg-black hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Mountaineering
                        <ChevronDownIcon class="ml-2 h-5 w-5 text-violet-200" aria-hidden="true" />
                    </MenuButton>
                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button
                                    :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                    Toubkal
                                </button>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <button
                                    :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                    Toubkal West
                                </button>
                                </MenuItem>
                            </div>
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button
                                    :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                    Iferouane
                                </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>

            <!-- Dropdown Menu: Company -->
            <div class="relative inline-block text-left z-40">
                <Menu as="div">
                    <MenuButton
                        class="sm:text-lg inline-flex items-center text-sm font-medium text-white bg-black hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Company
                        <ChevronDownIcon class="ml-2 h-5 w-5 text-violet-200" aria-hidden="true" />
                    </MenuButton>
                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button
                                    :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                    About Us
                                </button>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <button
                                    :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                    Our Story
                                </button>
                                </MenuItem>
                            </div>
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button
                                    :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                    Legal Document / Terms & Conditions
                                </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </div>







    <!-- Hero Section -->
    <div class="relative z-0">
        <img src="/images/Montain.jpg" class="h-[300px] sm:h-[400px] w-screen object-cover" />
        <p
            class="absolute inset-0 flex items-center justify-center font-bold text-2xl sm:text-5xl text-white text-left px-5 sm:px-10">
            Experience seamless expedition planning with our powerful web platform for mountain adventures!
        </p>
    </div>
</template>

<script setup>
import {ref} from "vue"
import { Icon } from '@iconify/vue';
import { useRouter, useRoute } from 'vue-router';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
const emit = defineEmits(['scroll-to-about']);
const router = useRouter();
const route = useRoute();

const showModal = ref(false);  // Track visibility of modal

const handleAboutMeClick = () => {
    if (route.path !== '/') {
        router.push({ path: '/', hash: '#AboutMe' });
    } else {
        emit('scroll-to-about');
        const element = document.querySelector('#AboutMe');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Toggle modal visibility
const toggleModal = () => {
    showModal.value = !showModal.value;
};
</script>
