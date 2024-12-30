<template>
    <div
        class="mt-[10%] lg:mt-10 bg-gradient-to-r from-[#4F46E5] to-[#1D4ED8] text-white p-6 lg:p-8 rounded-3xl shadow-xl mx-auto w-[95%] lg:w-[90%] min-h-screen flex flex-col justify-center items-center">

        <!-- Grid Layout for About Me (Walid) and Our Guide (Yassine) Sections -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">

            <!-- About Me Section (Left Column) -->
            <div class="flex flex-col justify-center items-center text-center">
                <p class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f9fa]">About Me</p>
                <p class="text-md sm:text-lg mt-2 opacity-80 text-[#f8f9fa]">
                    Your guide to extraordinary adventures in Morocco's mountains
                </p>

                <!-- Image Section -->
                <div class="flex justify-center mb-6 mt-6">
                    <img src="../../public/images/Ellipse_2.png" alt="Walid's Photo"
                        class="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-8 border-white shadow-2xl transform hover:scale-105 transition-all duration-300" />
                </div>

                <!-- Introduction Section -->
                <div class="max-w-2xl px-4 sm:px-6">
                    <p class="text-sm sm:text-lg opacity-90">
                        Hi, I'm Walid, an experienced expedition leader specializing in organizing group adventures to
                        explore
                        Morocco's most breathtaking mountains and hidden trails. Join me for unforgettable journeys into
                        the
                        heart of nature!
                    </p>
                </div>

                <!-- My Skills Section -->
                <div class="text-center mb-10 px-4">
                    <p class="text-xl sm:text-2xl font-semibold mb-4">Skills & Expertise</p>
                    <ul
                        class="mt-4 space-y-3 sm:space-y-4 text-sm sm:text-lg opacity-90 text-[#f8f9fa] text-left max-w-xl mx-auto">
                        <li>
                            <strong>Leadership:</strong> Leading expeditions through challenging terrains with
                            confidence and safety.
                        </li>
                        <li>
                            <strong>Navigation:</strong> Expertise in using maps, compasses, and GPS to navigate
                            difficult landscapes.
                        </li>
                        <li>
                            <strong>Mountain Safety:</strong> Well-versed in risk management and first-aid protocols in
                            high-altitude environments.
                        </li>
                        <li>
                            <strong>Cultural Knowledge:</strong> Deep understanding of local cultures, enhancing the
                            adventure experience for all participants.
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Our Guide Yassine Section (Right Column) -->
            <div class="flex flex-col justify-center items-center text-center">
                <p class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8f9fa]">Our Guide Said</p>
                <p class="text-md sm:text-lg mt-2 opacity-80 text-[#f8f9fa]">
                    Expert guide with a passion for guiding through Morocco's mountains
                </p>

                <!-- Yassine's Image Section -->
                <div class="flex justify-center mb-6 mt-6">
                    <img src="../../public/images/said.jpeg" alt="Yassine's Photo"
                        class="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-8 border-white shadow-2xl transform hover:scale-105 transition-all duration-300" />
                </div>

                <!-- Yassine's Introduction -->
                <div class="max-w-2xl px-4 sm:px-6">
                    <p class="text-sm sm:text-lg opacity-90">
                        Meet said, a local guide with years of experience in navigating the rugged terrain of
                        Morocco’s High Atlas mountains. His knowledge of the region, along with his deep connection to
                        the Berber culture, guarantees an enriching adventure for every trek.
                    </p>
                </div>

                <!-- Yassine's Skills Section -->
                <div class="text-center mb-10 px-4">
                    <p class="text-xl sm:text-2xl font-semibold mb-4">Said's Skills & Expertise</p>
                    <ul
                        class="mt-4 space-y-3 sm:space-y-4 text-sm sm:text-lg opacity-90 text-[#f8f9fa] text-left max-w-xl mx-auto">
                        <li>
                            <strong>Local Expertise:</strong> Deep knowledge of Morocco's mountains, valleys, and
                            trails.
                        </li>
                        <li>
                            <strong>Safety and First-Aid:</strong> Ensures safety at all times, with strong first-aid
                            and risk management skills.
                        </li>
                        <li>
                            <strong>Fluent in Berber & Arabic:</strong> Fluent in local languages to facilitate
                            communication and cultural exchange.
                        </li>
                        <li>
                            <strong>Environmental Awareness:</strong> Strong commitment to preserving the environment
                            during treks.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
