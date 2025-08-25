<template>
  <main class="resultados container">
    <header class="resultados__header row">
      <h1 class="resultados__header-brand">
        <a href="/gitsearch">GitSearch</a>
      </h1>

      <search-form class="col-md-8 col-lg-6 offset-md-1 offset-lg-2" />
    </header>

    <section class="resultado" v-show="!isLoading">
      <div class="container">
        <div class="resultado__details row">
          <resultado-count :count="totalResultado"/>

          <filter-language @select-language="getFilterLanguage" />
        </div>
      </div>

      <ul class="resultado__content row">
        <li v-for="item in resultado" :key="item.id" class="resultado__content-item col-lg-6">
          <resultado :items="item" />
        </li>
      </ul>

      <paginate
        v-if="showPaginate"
        v-model="pageNumber"
        :page-count="pageCount"
        @update:model-value="pagination"
      />
    </section>

    <loading v-if="isLoading" />
  </main>
</template>

<script>
import SearchForm from '@/components/home/SearchForm.vue'
import ResultadoCount from '@/components/resultados/ResultadoCount.vue'
import Resultado from '@/components/resultados/Resultado.vue'
import FilterLanguage from '@/components/resultados/FilterLanguage.vue'
import Paginate from '@/components/layout/Paginate.vue'
import Loading from '@/components/layout/Loading.vue'

import HTTPClient from '@/services'

export default {
  name: 'PageResultados',
  components: {
    SearchForm,
    ResultadoCount,
    Resultado,
    FilterLanguage,
    Paginate,
    Loading
  },

  data () {
    return {
      totalResultado: 0,
      language: this.$route.query.lang,
      resultado: [],
      pageNumber: parseInt(this.$route.query.page) || 1,
      pageCount: 34,
      showPaginate: false,
      isLoading: false
    }
  },

  mounted () {
    this.getRepositories(this.pageNumber, this.language)
  },

  watch: {
    '$route' () {
      this.pageNumber = parseInt(this.$route.query.page) || 1
      this.language = this.$route.query.lang

      this.getRepositories(this.pageNumber, this.language)
    },

    language () {
      const { query } = this.$route

      this.$router.push({
        query: {
          ...query,
          page: 1,
          lang: this.language
        }
      }).catch(err => err)
    }
  },

  methods: {
    async getRepositories (page, language = 'all') {
      try {
        this.isLoading = true

        const query = this.$route.query.q
        const querySearch = encodeURIComponent(
          language === 'all' ? query : `${query} language:${language}`
        )

        const repo = await HTTPClient.get(`search/repositories?q=${querySearch}&page=${page}`)
        const { total_count, items } = repo.data

        this.totalResultado = total_count
        this.resultado = items
        this.showPaginate = this.totalResultado > 30

        const pageCount = Math.round(total_count / 30)
        const pageNumber = (pageCount * 30) > total_count ? pageCount : pageCount + 1

        this.pageCount = pageNumber <= 34 ? pageNumber : 34

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        throw new Error(error)
      }
    },

    getFilterLanguage (language) {
      this.language = language
    },

    pagination (pageNum) {
      const { path, query } = this.$route

      this.pageNumber = pageNum

      this.$router.push({ path, query: { ...query, page: pageNum } })

      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
  .resultados {
    overflow: hidden;
  }

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

  .resultado__details {
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
  }

  .resultado__content {
    margin-top: 20px;
    padding-left: 1px;
    padding-right: 1px;
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
