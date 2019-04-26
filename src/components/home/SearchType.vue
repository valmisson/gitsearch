<template>
  <div class="search__type col-12">
    <div class="search__type-item">
      <input type="radio" v-model="type" name="search__type" value="repositories" id="repository-type" checked>
      <label for="repository-type">Repositórios</label>
    </div>
    <div class="search__type-item">
      <input type="radio" v-model="type" name="search__type" value="users" id="users-type">
      <label for="users-type">Usuários</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchType',
  data () {
    return {
      type: 'repositories'
    }
  }
}
</script>

<style scoped>
  .search__type {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .search__type-item:first-child {
    margin-left: -15px;
  }

  .search__type-item:last-child {
    margin-left: 20px;
    padding-left: 5px;
    border-left: 1px solid #B2B2B2;
  }

  .search__type-item > input[type=radio] {
    visibility: hidden;
  }

  .search__type-item > input[type=radio]:checked ~ label {
    color: #212122;
  }

  .search__type-item > label {
    color: var(--color-font-primary);
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.25s ease;
  }

  @media (min-width: 768px) {
    .search__type-item:last-child {
      margin-left: 35px;
      padding-left: 20px;
    }
  }
</style>
