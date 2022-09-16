<script setup>
import './assets/main.css'
</script>

<template>
<div class="h-screen bg-slate-100">
  <div class="flex flex-col lg:max-w-sm md:max-w-sm sm:w-full h-full bg-white mx-auto">
    <div class="h-15 w-full p-2 flex bg-red-400">
      <div class="flex flex-row items-center w-full">
        <img class="flex-none w-8 h-8 object-fit rounded-full mr-2" src="https://avatars.githubusercontent.com/u/27803967?v=4">
        <div class="grow w-64 flex flex-col">
          <h1 class="text-white bold">Afrizal Azhar</h1>
          <span class="text-sm text-red-300">Software Developer</span>
        </div>
        <div class="grid flex-none w-8 text-white">
          <i class="justify-self-center fa fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>
    <div class="mb-auto flex flex-col flex-nowrap items-start p-2">
      <div v-for="chat of chat_render" :key="chat" class="bg-slate-200 py-1 px-3 rounded-lg mb-1 mr-12">
        <span v-html="chat" class="text-sm"></span>
      </div>
      <div v-if="!finish" class="bg-slate-200 py-1 px-3 rounded-lg mb-1 mr-12">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
      </div>
    </div>
    <div class="h-12 w-auto py-2 px-3 flex bg-white rounded-lg m-2 mb-8 items-center">
      <input type="text" class="border-b-2 border-slate-200 ring-0 focus:outline-none w-full p-2" placeholder="Message ...">
      <button><i class="m-2 fas fa-paper-plane text-red-400 hover:text-red-500 focus:text-red-500 active:text-red-500"></i></button>
    </div>
    <div class="h-12 w-auto py-2 px-3 flex bg-slate-100 justify-center">
      <span>Made with 🖤 by Afrizal © 2022</span>
    </div>
  </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      chat_render: [],
      chat_values: [
        "Hello there,",
        "Afrizal Azhar here.",
        "I’m a Fullstack Software Developer",
        "Currently focusing on Mobile Application Development",
        "You can contact me on the list down below. ⬇️⬇️⬇️",
        "<i class='fa-brands fa-linkedin'></i> <a href='https://www.linkedin.com/in/afrizal-azhar-ash-shiddiq-0544ab137/' target='_' class='ml-2 italic text-blue-500'>Linkedin</a>",
        "<i class='fa-brands fa-github'></i> <a href='https://github.com/afrizalazhar' target='_' class='ml-2 italic text-blue-500'>Github</a>",
        "<i class='fa-brands fa-instagram'></i> <a href='#' target='_' class='ml-2 italic text-blue-500'>Instagram</a>",
        "<i class='fa fa-envelope'></i> <a href='#' class='ml-2 italic text-blue-500'>Email</a>",
        "So, What can i do for you?"
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
      let timeout = setInterval(()=>{
        const next = chat_to_it.next()
        if(!next.done) {
          scope.chat_render.push(next.value)
          // scope.finish = true
        } else {
          scope.finish = true
          clearInterval(timeout)
        }
      }, 1500)
    },
    async renderLoading() {
      // let run = async() => {
          this.chat_values.map(function(values, key) {
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
