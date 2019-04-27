<template>
  <div class="resultado__count col-12">
    <h3>{{ count }} resultados</h3>
  </div>
</template>

<script>
export default {
  name: 'ResultadoCount',
  props: {
    count: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .resultado__count {
    color: var(--color-font-primary);
    margin-top: 60px;
    padding: 0;
  }

  .resultado__count > h3 {
    font-size: 1rem;
    font-weight: 500;
  }
</style>
