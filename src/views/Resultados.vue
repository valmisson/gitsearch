<template>
  <main class="resultados container">
    <header class="resultados__header row">
      <h1 class="resultados__header-brand">
        <a href="/">Search Github</a>
      </h1>
      <search-form class="col-md-8 col-lg-6 offset-md-1 offset-lg-2" />
    </header>

    <section class="resultado">
      <resultado-count count="526.630"/>

      <ul class="resultado__content row">
        <li class="resultado__content-item col-lg-6">
          <resultado />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import SearchForm from '@/components/home/SearchForm.vue'
import ResultadoCount from '@/components/resultados/ResultadoCount.vue'
import Resultado from '@/components/resultados/Resultado.vue'

export default {
  name: 'Resultados',
  components: {
    SearchForm,
    ResultadoCount,
    Resultado
  }
}
</script>

<style scoped>
  .resultados__header {
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .resultados__header-brand {
    margin: 0;
  }

  .resultados__header-brand > a {
    color: var(--color-primary);
    display: table;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
    text-decoration: none;
  }

  .resultado__content {
    margin-top: 20px;
    padding-left: 0;
  }

  .resultado__content-item {
    list-style: none;
  }

  @media (min-width: 768px) {
    .resultados__header {
      justify-content: flex-start;
      margin-top: 30px;
    }

    .resultados__header-brand > a {
      margin-bottom: 0;
    }

    .resultado {
      margin-left: -15px;
      margin-right: -15px;
    }
  }
</style>
