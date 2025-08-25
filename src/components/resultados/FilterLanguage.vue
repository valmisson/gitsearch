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
import languageList from '@/utils/languageList';

export default {
  name: 'FilterLanguage',
  data () {
    return {
      language: this.$route.query.lang ?? 'all',
      languageList
    }
  },

  watch: {
    '$route' () {
      this.language = this.$route.query.lang ?? 'all'
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
