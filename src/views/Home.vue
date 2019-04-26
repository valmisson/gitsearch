<template>
  <main class="home container">
    <h1 class="home__brand">Search Github</h1>

    <search-form class="home__search col-md-6"/>
  </main>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'

export default {
  name: 'Home',
  components: {
    SearchForm
  }
}
</script>

<style scoped>
  .home__brand {
    color: var(--color-primary);
    font-size: 48px;
    margin-top: 130px;
    text-align: center;
  }

  .home__search {
    margin: 60px auto;
  }
</style>
