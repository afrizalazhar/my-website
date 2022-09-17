<script setup>
import './assets/main.css'
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
</script>

<template>
  <div class="h-screen bg-slate-100">
        <div class="flex flex-col lg:max-w-sm md:max-w-sm sm:w-full h-full bg-white mx-auto">
            <router-view/>
            <footer-section></footer-section>
        </div>
    </div>
</template>
<script>
export default {
  components: { FooterSection, HeaderSection },
  
}
</script>
