<script setup>
import './assets/main.css'
</script>

<template>
<div class="h-screen bg-slate-100">
  <div class="flex flex-col max-w-sm h-full bg-red-100 mx-auto">
    <div class="h-12 w-full p-2 flex bg-red-400">
      <div class="flex items-center">
        <img class="w-8 h-8 object-fit rounded-full mr-2" src="https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3132&amp;q=80">
        <h1 class="text-white bold">Afrizal Azhar</h1>
      </div>
    </div>
    <div class="mb-auto flex flex-col flex-nowrap items-start p-2">
      <div v-for="chat of chat_values" :key="chat" class="bg-white py-1 px-3 rounded-full mb-1">
        <span class="text-sm">{{chat}}</span>
      </div>
    </div>
    <div class="h-12 w-auto py-2 px-3 flex bg-white rounded-lg m-2 items-center">
      <input type="text" class="border-b-2 border-slate-200 ring-0 focus:outline-none w-full p-2" placeholder="Message ...">
      <button><i class="m-2 fas fa-paper-plane text-red-400 hover:text-red-500 focus:text-red-500 active:text-red-500"></i></button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      chat_values: [
        "Hello there,",
        "Izal here.",
        "How you doin ? 😎"
        ]
    }
  }
}
</script>
