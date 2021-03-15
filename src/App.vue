<template>
  <v-app>
    <div id="app">
      <div class="branding-wrap">
        <img alt="Devchain logo" src="./assets/logos/devch.png"/>
      </div>
      <div class="quickbar">
        Quickbar
      </div>
      <button class="v-btn v-btn--outlined" @click="clear">Clear console</button>
      <!--    <utilities :subdomain="subdomain" :domain="domain"></utilities>-->

    </div>
  </v-app>
</template>

<script>
import axios from 'axios';
import Utilities from "./components/Utilities";


export default {
  name: 'App',
  created() {
    window.clog = function (val) {
      console.log(val)
    }
    axios.defaults.withCredentials = true
  },
  computed: {},
  /* Just put them in the order from the import statement */
  components: {
    Utilities,
  },
  data() {
    return {};
  },
  methods:
      {
        clear() {
          console.clear()
        },
      }
  // https://vaccinare-covid.gov.ro/wp-content/themes/twentytwenty/assets/map/csv/centre_vaccinare_etapa_2.php?v=1615799656479
}
</script>

<style>
body, html {
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.branding-wrap {
  padding: 0;
  display: block;
  height: 150px;
  background-color: rgb(0, 81, 84);
}

.branding-wrap > img {
  height: 150px;
}

.test-suite {
  align-content: center;
  text-align: center;
}

button {
  margin: 0.3rem;
}
</style>
