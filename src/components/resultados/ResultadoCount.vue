<template>
  <div class="resultado__count">
    <h3>{{ count.toLocaleString() }} resultados</h3>
  </div>
</template>

<script>
export default {
  name: 'ResultadoCount',
  props: {
    count: {
      required: true
    }
  }
}
</script>

<style scoped>
  .resultado__count {
    color: var(--color-font-primary);
    padding: 0;
  }

  .resultado__count > h3 {
    font-size: 1rem;
    font-weight: 500;
  }
</style>
