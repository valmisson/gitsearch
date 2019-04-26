<template>
  <div>
    <input type="text" placeholder="Pesquise no Github" class="search__input">
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  components: {}
}
</script>

<style scoped>
  .search__input {
    border: 1px solid #ccc;
    border-radius: 25px;
    background-image: url('../assets/images/search-icon.svg');
    background-repeat: no-repeat;
    background-position: 96%;
    color: #212121;
    font-size: 18px;
    padding: 15px 50px 15px 30px;
    width: 100%;
  }

  .search__input:focus {
    border-color: #B2B2B2;
    outline: none;
  }

  .search__input::placeholder {
    color: #999;
  }
</style>
