<template>
    <div class="flex flex-col w-full h-screen p-2 bg-slate-100">
        <div class="flex flex-col">
            <div class="flex justify-end px-2">
                <router-link to="/" class="text-blue-500 text-sm">Back</router-link>
            </div>
            <div class="flex justify-center">
                <img class="flex-none w-24 h-24 object-fit rounded-full m-2 border" src="https://avatars.githubusercontent.com/u/27803967?v=4">
            </div>
            <div class="grid justify-items-stretch">
                <span class="justify-self-center">Afrizal Azhar</span>
                <span class="justify-self-center text-sm text-slate-400">Software Developer</span>
            </div>
            <div class="mt-8 bg-white p-2">
                <span class="text-sm">Hello Guys</span>
            </div>
            <div class="mt-2 bg-white p-2">
                <span class="text-xs font-bold text-slate-500">Project</span>
                <div v-if="projects.length > 0" class="flex flex-nowrap w-auto gap-4 relative overflow-auto">
                    <div v-for="project of projects" :key="project" class="flex-none w-24 h-24 bg-red-500">{{project}}</div>
                </div>
                <div v-else class="">
                    <span><i class="fa fa-hammer"></i> Under construcor</span>
                </div>
            </div>
            <div class="mt-2 bg-white p-2">
                <span class="text-xs font-bold text-slate-500">Blog</span>
                <div v-if="projects.length > 0" class="flex flex-nowrap w-auto gap-4 relative overflow-auto">
                    <div v-for="project of projects" :key="project" class="flex-none w-24 h-24 bg-red-500">{{project}}</div>
                </div>
                <div v-else class="">
                    <span><i class="fa fa-hammer"></i> Under construcor</span>
                </div>
            </div>
            <div class="mt-2 bg-white p-2">
                <span class="text-xs font-bold text-slate-500">Contact</span>
                <div v-if="contacts.length > 0" class="flex flex-col w-auto">
                    <div v-for="contact of contacts" :key="contact" class="flex-none w-full">
                        <div class="w-full">
                            <i :class="'fa-brands fa-'+contact.name+' text-xs'"></i><a :href="contact.value" target="_" class="ml-2 text-xs text-blue-400">{{contact.name}}</a>
                        </div>
                    </div>
                </div>
                <div v-else class="">
                    <span><i class="fa fa-hammer"></i> Under construcor</span>
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