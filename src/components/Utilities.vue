<template>
  <div class="test-suite">
    <br>
    <hr>
    <h3>HTTP Utilities: {{ subdomain }}</h3>
    <div>
        <button @click="http('get')">GET</button>
        <button @click="http('post')">POST</button>
        <button @click="http('put')">PUT</button>
        <button @click="http('patch')">PATCH</button>
        <button @click="http('delete')">DELETE</button>


      <input type="text" placeholder="/" v-model="path">
      <br>
      <textarea v-model="requestInput">
      </textarea>
      <br>
      <!-- do not indent  spaces will be displayed -->
      <pre>{{ httpResponse ? httpResponse : '(no request fired)'}}</pre>

      <br>
      <pre> {{ error }}</pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'utilities',
  props: ['subdomain', 'domain'],
  data() {
    return {
      path: '/',
      requestInput: null,
      httpResponse: null,
      error: '',
    };
  },
  methods: {
    http(method = 'get', body = null) {
      let domain = this.domain;
      let subdomain = this.subdomain;
      let path = this.path;
      let httpResponse = this.httpResponse;
      let error = this.error;

      let bodyToSend = JSON.parse(this.requestInput)

      let functionCall = function (){ alert ('invalid method')};

      let allowedMethods = ['get', 'post', 'put', 'patch', 'delete'];

      if (allowedMethods.includes(method)) {
          functionCall = axios[method];
      }

      functionCall('http://' + subdomain + '.' + domain + '/api' + path, bodyToSend)
          .then((res) => {
              httpResponse = JSON.stringify(res.data.data)
          })
          .catch((err) => {
              error = err;
              clog(err);
          });
    },
  }
}
</script>