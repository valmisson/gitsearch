<template>
  <main class="home container">
    <h1 class="home__brand">Search Github</h1>

    <search-form class="home__search col-md-10 col-lg-6"/>

    <search-type />
  </main>
</template>

<script>
import SearchForm from '@/components/home/SearchForm.vue'
import SearchType from '@/components/home/SearchType.vue'

export default {
  name: 'Home',
  components: {
    SearchForm,
    SearchType
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
    margin: 50px auto 30px auto;
  }
</style>
