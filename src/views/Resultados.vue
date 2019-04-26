<template>
  <main class="resultado container">
    <header class="resultado__header row">
      <a href="/" class="resultado__header-brand">Search Github</a>

      <search-form class="col-md-8 col-lg-6 offset-md-1 offset-lg-2" />
    </header>
  </main>
</template>

<script>
import SearchForm from '@/components/home/SearchForm.vue'

export default {
  name: 'Resultados',
  components: {
    SearchForm
  }
}
</script>

<style scoped>
  .resultado__header {
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .resultado__header-brand {
    color: var(--color-primary);
    display: table;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .resultado__header {
      justify-content: flex-start;
      margin-top: 30px;
    }

    .resultado__header-brand {
      margin-bottom: 0;
    }
  }
</style>
