<template>
    <div class="flex flex-col w-full h-screen p-2 bg-slate-100">
        <div class="flex flex-col mt-8">
            <div class="flex justify-center">
                <img class="flex-none w-24 h-24 object-fit rounded-full m-2 border" src="https://avatars.githubusercontent.com/u/27803967?v=4">
            </div>
            <div class="grid justify-items-stretch">
                <span class="justify-self-center">Afrizal Ash</span>
                <span class="justify-self-center text-sm text-slate-400">Software Developer</span>
            </div>
            <div class="p-2 flex justify-center">
                <div class="p-2">
                    <a href="https://www.instagram.com/afrizal.ash?igsh=ZnR4eHUyZWF4aWtn" target="_blank">
                    <i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="p-2">
                    <a href="https://github.com/afrizalazhar" target="_blank">
                    <i class="fa-brands fa-github"></i></a>
                </div>
                <div class="p-2">
                    <i class="fa fa-envelope"></i>
                </div>
            </div>
            <div class="shadow-md rounded-lg">
                <iframe class="rounded-t-none" src="https://open.spotify.com/embed/track/01Hwuu0nEXwJ9KdMc27k2C?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div class="mt-2 bg-white col justify-center rounded-lg shadow-md">
                <div class="bg-indigo-300 rounded-t-lg">
                    <img class="rounded-t-lg object-cover h-48 w-96" src="https://picsum.photos/200/200">
                </div>
                <div class="flex p-2 justify-center">Lorem Ipsum</div>
            </div>
            <div class="mt-2 bg-white p-2 flex justify-center rounded-lg shadow-md">
                <div>
                    <router-link to="tebak-tebakan">
                        <i class="fa fa-question"></i>
                            <span class="font-sm ml-2">Tebak-tebakan</span>
                    </router-link>
                </div>
            </div>

            <div class="mt-2 bg-white p-2 flex justify-center rounded-lg shadow-md">
                <div>
                    <a href="https://www.shutterstock.com/g/afrizalash" target="_blank">
                    <i class="fa fa-camera-retro"></i>
                        <span class="font-sm ml-2">Check my photography here</span>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [],
            contacts: [
                {"name":"github", "value":"https://github.com"},
                {"name":"whatsapp", "value":""}
                ]
        }
    }
}
</script>