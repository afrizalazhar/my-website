<template>
    <div class="flex flex-col w-full h-screen p-2 bg-slate-100">
        <div class="flex justify-end px-2">
            <router-link to="/" class="text-blue-500 text-sm">Back</router-link>
        </div>
        <div class="content-center h-full">
            <p class="text-center">Lagi ga ada tebak-tebakan, hidup susah ditebak soalnya</p>
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