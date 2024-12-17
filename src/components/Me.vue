<template>
    <div
        class="mt-[10%] lg:mt-10 bg-gradient-to-r from-[#4F46E5] to-[#1D4ED8] text-white p-6 lg:p-8 rounded-3xl shadow-xl mx-auto w-[95%] lg:w-[90%] min-h-screen flex flex-col justify-center items-center">
        <!-- Title Section -->
        <div class="text-center mb-6">
            <p class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f9fa]">About Me</p>
            <p class="text-md sm:text-lg mt-2 opacity-80 text-[#f8f9fa]">
                Your guide to extraordinary adventures in Morocco's mountains
            </p>
        </div>

        <!-- Image Section -->
        <div class="flex justify-center mb-6">
            <img src="../assets/images/Ellipse_2.png" alt="Walid's Photo"
                class="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-8 border-white shadow-2xl transform hover:scale-105 transition-all duration-300" />
        </div>

        <!-- Introduction Section -->
        <div class="text-center mb-6 max-w-2xl px-4 sm:px-6">
            <p class="text-sm sm:text-lg opacity-90">
                Hi, I'm Walid, an experienced expedition leader specializing in organizing group adventures to explore
                Morocco's most breathtaking mountains and hidden trails. Join me for unforgettable journeys into the
                heart
                of nature!
            </p>
        </div>

        <!-- Skills Section -->
        <div class="text-center mb-8 px-4">
            <p class="text-xl sm:text-2xl font-semibold mb-4">Skills & Expertise</p>
            <ul
                class="mt-4 space-y-3 sm:space-y-4 text-sm sm:text-lg opacity-90 text-[#f8f9fa] text-left max-w-xl mx-auto">
                <li>
                    <strong>Leadership:</strong> Leading expeditions through challenging terrains with confidence and
                    safety.
                </li>
                <li>
                    <strong>Navigation:</strong> Expertise in using maps, compasses, and GPS to navigate difficult
                    landscapes.
                </li>
                <li>
                    <strong>Mountain Safety:</strong> Well-versed in risk management and first-aid protocols in
                    high-altitude
                    environments.
                </li>
                <li>
                    <strong>Cultural Knowledge:</strong> Deep understanding of local cultures, enhancing the adventure
                    experience for all participants.
                </li>
            </ul>
        </div>

        <!-- Circular Images Section -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 w-full max-w-3xl px-4">
            <div
                class="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center transform hover:scale-110 transition-all duration-300 mx-auto">
                <img src="../assets/images/walidtoubkal.jpg" alt="Walid in Toubkal"
                    class="w-full h-full object-cover" />
            </div>
            <div
                class="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center transform hover:scale-110 transition-all duration-300 mx-auto">
                <img src="../assets/images/walidtoubkal2.jpg" alt="Scenic view" class="w-full h-full object-cover" />
            </div>
            <div
                class="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center transform hover:scale-110 transition-all duration-300 mx-auto">
                <img src="../assets/images/walidtoubkal3.jpg" alt="Mountain trail" class="w-full h-full object-cover" />
            </div>
            <div
                class="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center transform hover:scale-110 transition-all duration-300 mx-auto">
                <img src="../assets/images/walidtoubkal4.jpg" alt="Summit view" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</template>
