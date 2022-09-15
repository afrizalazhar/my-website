<script setup>
import './assets/main.css'
</script>

<template>
<div class="h-screen bg-slate-100">
  <div class="flex flex-col lg:max-w-sm md:max-w-sm sm:w-full h-full bg-white mx-auto">
    <div class="h-15 w-full p-2 flex bg-red-400">
      <div class="flex items-center">
        <img class="w-8 h-8 object-fit rounded-full mr-2" src="https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3132&amp;q=80">
        <div class="flex flex-col">
        <h1 class="text-white bold">Afrizal Azhar</h1>
        <span class="text-sm text-red-300">Software Developer</span>
        </div>
      </div>
    </div>
    <div class="mb-auto flex flex-col flex-nowrap items-start p-2">
      <div v-for="chat of chat_render" :key="chat" class="bg-slate-200 py-1 px-3 rounded-lg mb-1 mr-12">
        <span class="text-sm">{{chat}}</span>
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
        "Fyi, i’m open to freelance opportunity. You can contact me on list down below. ⬇️⬇️⬇️",
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
  },
  methods: {
    renderChat() {
      let scope = this
      const chat_to_it = this.chat_values[Symbol.iterator]()
      let timeout = setInterval(()=>{
        const next = chat_to_it.next()
        if(!next.done) {
          scope.chat_render.push(next.value)
          loadingTo
        } else {
          scope.finish = true
          clearInterval(timeout)
        }
      }, 1500)
    }
  }
}
</script>
