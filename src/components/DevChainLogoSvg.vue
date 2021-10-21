<template>
  <svg
    id="devChainLogo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.42 145.56"
  >
    <g
      id="triangle1"
      class="triangle"
    >
      <path
        d="M5.93,22.91,93.06,73,5.79,122.84c0-12.37.11-85.89.14-99.93M.18,13C.24,34.36-.08,112.83,0,132.77l104.63-59.7Z"
      />
    </g>
    <g
      id="triangle2"
      class="triangle"
    >
      <path
        d="M28.69,35.86,115.82,86,28.51,135.81l.18-99.95m-5.75-10c.33.1-.81,120.23.11,119.66L127.42,86Z"
      />
    </g>
    <g
      id="triangle3"
      class="triangle"
    >
      <path d="M28.69,10l87.13,50.13L28.51,109.91ZM22.94,0l-.21,119.85L127.42,60.12Z" />
    </g>
  </svg>
</template>

<script>

export default {
  name: 'DevChainLogoSvg'
}
</script>

<style>
#devChainLogo {
    max-height: 5rem;
}
.triangle{
    isolation:isolate;
}
</style>
