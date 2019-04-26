<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  :root {
    --color-primary: #0AEC57;
    --color-font-primary: #777777;
  }

  body {
    background-color: #f2f2f2;
    font-family: 'Roboto', sans-serif;
  }
</style>
