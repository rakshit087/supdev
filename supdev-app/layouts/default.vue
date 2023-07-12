<template>
    <div class="transition-all h-screen dark:bg-gray-900 dark:text-white">
        <Navbar />
        <div class="px-4 lg:px-32 xl:px-48 md:px-16 flex flex-col justify-center h-full">
            <slot />
        </div>
    </div>
</template>
