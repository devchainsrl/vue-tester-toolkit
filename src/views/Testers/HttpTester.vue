<template>
  <div class="p-4 center">
    <div>
      <input
        v-model="url"
        class="text-accent-900 py-1 px-2"
      >

      <span class="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          class="btn"
          @click="url = 'https://httpbin.org/get'"
        >
          Prefill with GET
        </button><button
          class="btn"
          @click="url = 'https://httpbin.org/post'"
        >
          Prefill with POST
        </button>

        <button
          class="btn"
          @click="url = ''"
        >
          Clear
        </button>
      </span>
    </div>
    <div>
      <span class="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          class="btn"
          @click="sendRequest(url, 'get')"
        >
          GET
        </button>
        <button
          class="btn"
          @click="sendRequest(url, 'post')"
        >
          POST
        </button>

        <button
          class="btn"
          @click="response = null"
        >
          Clear response post
        </button>
      </span>
    </div>
    <div>
      Headers
    </div>

    <!-- response -->
    <div class="flex">
      <div class="w-16" />
      <div class="w-auto text-left">
        Response:
        <div v-if="response">
          <pre> {{ response.status }} </pre>
          <pre> {{ response.data }}</pre>
        </div>
      </div>
      <div class="w-16" />
    </div>
  </div>
</template>

<style>
.btn {
    @apply -ml-px relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none ;
}
</style>
<script>

import axios from 'axios'
export default {
  name: 'HttpTester',
  components: {
  },
  data () {
    return {
      headers: {

      },
      url: '',
      response: null
    }
  },
  created () {
    window.clog = function (val) {
      console.log(val)
    }
    axios.defaults.withCredentials = true
  },
  methods: {
    sendRequest (url, method) {
      const client = axios.create({
        headers: this.headers
      })
      if (method === 'get') {
        this.response = null
        client.get(url).then((response) => {
          this.response = response
        }).catch((error) => {
          this.response = { status: error }
        })
      }
      if (method === 'post') {
        this.response = null
        client.post(url).then((response) => {
          this.response = response
        }).catch((error) => {
          this.response = { status: error }
        })
      }
    }
  }
}
</script>
