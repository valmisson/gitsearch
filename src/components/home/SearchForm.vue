<template>
  <div>
    <input @keypress.enter="search" v-model="searchTerm" type="text" placeholder="Pesquise repositorio no Github" class="search__input">
  </div>
</template>

<script>
export default {
  name: 'SearchForm',

  data () {
    return {
      searchTerm: ''
    }
  },

  methods: {
    search (e) {
      const inputSearchEl = e.target

      if (this.searchTerm.length > 0) {
        inputSearchEl.classList.remove('error')

        return this.$router.push({
          path: '/search/repositorio',
          query: { q: this.searchTerm, page: 1, lang: 'all' }
        }).catch(err => err)
      }

      inputSearchEl.classList.add('error')
    }
  },

  mounted () {
    const { q } = this.$route.query

    this.searchTerm = q
  }
}
</script>

<style scoped>
  .search__input {
    border: 1px solid #ccc;
    border-radius: 25px;
    background-image: url('../../assets/images/search-icon.svg');
    background-repeat: no-repeat;
    background-position: 96%;
    color: #212121;
    font-size: 18px;
    padding: 10px 35px 10px 20px;
    width: 100%;
  }

  .search__input:focus {
    border-color: #B2B2B2;
    outline: none;
  }

  .search__input::placeholder {
    color: #999;
  }

  .search__input.error:focus {
    border-color: #ed2f2f;
  }

  @media (min-width: 768px) {
    .search__input {
      padding: 15px 50px 15px 30px;
    }
  }
</style>
