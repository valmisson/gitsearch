<template>
  <div class="filter__language">
    <label class="language__label" for="languages">Linguages:</label>
    <select v-model="language" class="language__list" id="languages">
      <option v-for="language of languageList" :key="language.value" :value="language.value">
        {{ language.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterLanguage',
  data () {
    return {
      language: this.$route.query.lang,
      languageList: [
        { value: 'all', label: 'Todas' },
        { value: 'javascript', label: 'Javascript' },
        { value: 'typescript', label: 'Typescript' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'vue', label: 'Vue' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'rust', label: 'Rust' },
        { value: 'python', label: 'Python' }
      ]
    }
  },

  watch: {
    '$route' () {
      this.language = this.$route.query.lang
    }
  },

  updated () {
    this.$emit('select-language', this.language)
  }
}
</script>

<style scoped>
  .language__label {
    margin-right: 5px;
  }
  .language__list {
    background-color: #eeee;
    border-color: #bbb;
    padding: 5px 5px;
  }

  .language__list:focus {
    outline: none;
  }
</style>
