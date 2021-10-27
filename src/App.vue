<template>
  <div :class="isDark ? 'dark' : ''">
    <div
      v-if="siteEnabled"
      class="flex flex-col min-h-screen"
    >
      <Header class="bg-accent-800" />
      <!-- theme switcher -->
      <div class="bg-dark-800 text-white dark:bg-accent-100 dark:text-gray-900 ">
        <button
          v-if="themeSwitcherEnabled"
          @click="switchDarkMode"
        >
          Switch
        </button>
      </div>
      <!-- actual page -->
      <div class="flex-grow  bg-accent-100 text-gray-900 dark:bg-dark-800 dark:text-white">
        <router-view />
      </div>
      <Footer />
    </div>
    <div v-else>
      <SiteDisabled />
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SiteDisabled from './views/SiteDisabled.vue'
export default {
  components: {
    Footer,
    Header,
    SiteDisabled
  },
  data: function () {
    return {
      themeSwitcherEnabled: true,
      siteEnabled: true,
      isDark: false,
      showHeader: true
    }
  },
  methods: {
    switchDarkMode () {
      this.isDark = !this.isDark
    }
  }
}
</script>

<style>

body {
    @apply bg-accent-300
    /* fallback for dark mode ////
    @apply bg-accent-100 text-gray-900 dark:bg-dark-800 dark:text-white;
    */
    /*background-image: url("/static/cover.jpg");
    background-size: cover;
    background-position: center;*/
}
#app {
    font-family: "Raleway", sans-serif;
    font-size: 1em;
    /*color: white;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
