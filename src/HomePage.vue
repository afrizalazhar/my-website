<template>
    <header-section></header-section>
    <div class="mb-auto flex flex-col flex-nowrap items-start p-2">
        <div v-for="chat of chat_render" :key="chat" class="bg-slate-200 py-1 px-3 rounded-lg mb-1 mr-12">
            <span v-html="chat" class="text-sm"></span>
        </div>
        <div v-if="!finish" class="bg-slate-200 py-1 px-3 rounded-lg mb-1 mr-12">
            <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        </div>
    </div>
    <div class="h-12 w-auto py-2 px-3 flex bg-white rounded-lg m-2 mb-8 items-center">
        <input type="text" class="border-b-2 border-slate-200 ring-0 focus:outline-none w-full p-2"
            placeholder="Message ...">
        <button><i
                class="m-2 fas fa-paper-plane text-red-400 hover:text-red-500 focus:text-red-500 active:text-red-500"></i></button>
    </div>

</template>
<script>
import HeaderSection from './components/HeaderSection.vue'
    export default {
        components: { HeaderSection },
        data() {
            return {
                chat_render: [],
                chat_values: [
                    "Hi, im afrizal's virtul asistant, i will give you information about Afrizal.",
                    "What information you want to know ?",
                    "You can text me like \"How old Afrizal?\""
                ],
                finish: false,
                color: '#ffffff',
                size: '5px',
                loading: true
            }
        },
        mounted() {
            this.renderChat()
            // this.renderLoading()
        },
        methods: {
            renderChat() {
                let scope = this
                const chat_to_it = this.chat_values[Symbol.iterator]()
                let timeout = setInterval(() => {
                    const next = chat_to_it.next()
                    if (!next.done) {
                        scope.chat_render.push(next.value)
                        // scope.finish = true
                    } else {
                        scope.finish = true
                        clearInterval(timeout)
                    }
                }, 1000)
            },
            async renderLoading() {
                // let run = async() => {
                this.chat_values.map(function (values, key) {
                    this.finish = false
                    // await delay(1000)
                    this.chat_render.push(value)
                    this.finish = true
                })
                // }
                // run()
            },
        }
    }
</script>