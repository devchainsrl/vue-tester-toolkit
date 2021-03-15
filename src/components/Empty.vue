<template>
  <div class="test-suite">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'empty',
  props: [],
  data() {
    return {
      path: '/',
      requestInput: null,
      httpResponse: null,
      error: '',
    };
  },
  methods: {
  }
}
</script>