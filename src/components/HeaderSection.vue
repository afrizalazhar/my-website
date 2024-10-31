<template>
    <div class="h-15 w-full p-2 flex bg-red-400">
        <div class="flex flex-row items-center w-full">
            <img class="flex-none w-8 h-8 object-fit rounded-full mr-2"
                src="https://avatars.githubusercontent.com/u/27803967?v=4">
            <div class="grow w-64 flex flex-col">
                <router-link to="profile"><h1 class="text-white bold">AIfrizal</h1></router-link>
                <span class="text-sm text-red-300">Virtual Assistant</span>
            </div>
            <div class="grid flex-none w-8 text-white">
                <i class="justify-self-center fa fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>