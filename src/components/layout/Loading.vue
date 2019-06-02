<template>
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
  .lds-ring {
    display: flex;
    position: relative;
    margin: 60px auto;
    width: 44px;
    height: 44px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 38px;
    height: 38px;
    margin: 4px;
    border: 4px solid var(--color-primary);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--color-primary) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
