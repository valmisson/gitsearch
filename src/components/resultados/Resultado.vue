<template>
  <article class="resultado__item">
    <a href="#" class="resultado__item-link">
      <figure class="resultado__item-avatar">
        <img src="@/assets/images/avatar.png" alt="Resultado avatar">
      </figure>

      <div class="resultado__item-info">
        <h2 class="resultado__item-title">airbnb/javascript</h2>
        <p class="resultado__item-description">JavaScript Style Guide</p>
      </div>

      <div class="resultado__item-stars">
        <img src="@/assets/images/star-icon.svg" alt="">
        <span class="resultado__item-count">84.4k</span>
      </div>

      <footer class="resultado__item-footer">
        <span class="resultado__item-language">JavaScript</span>
        <span class="resultado__item-license">MIT License</span>
      </footer>
    </a>
  </article>
</template>

<script>
export default {
  name: 'Resultado'
}
</script>

<style scoped>
  .resultado__item {
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 25px;
    position: relative;
  }

  .resultado__item-link {
    color: var(--color-font-primary);
    display: flex;
    padding: 20px 15px;
    text-decoration: none;
  }

  .resultado__item-avatar {
    margin: 0;
  }

  .resultado__item-avatar > img {
    border-radius: 3px;
    width: 70px;
    height: 70px;
  }

  .resultado__item-info {
    margin-left: 15px;
  }

  .resultado__item-title {
    color: #0366D6;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .resultado__item-description {
    font-size: 14px;
    font-style: italic;
    margin: 0;
  }

  .resultado__item-stars,
  .resultado__item-count {
    display: none;
  }

  .resultado__item-footer {
    font-size: 14px;
    position: absolute;
    bottom: 15px;
    left: 100px;
  }

  .resultado__item-license {
    margin-left: 15px;
  }

  @media (min-width: 768px) {
    .resultado__item-avatar > img {
      width: 90px;
      height: 90px;
    }

    .resultado__item-info {
      margin-left: 25px;
    }

    .resultado__item-title {
      font-size: 20px;
    }

    .resultado__item-description {
      font-size: 1rem;
    }

    .resultado__item-stars,
    .resultado__item-count {
      display: flex;
    }

    .resultado__item-stars {
      font-size: 14px;
      font-weight: 500;
      position: absolute;
      right: 20px;
    }

    .resultado__item-count {
      margin-left: 7px;
    }

    .resultado__item-footer {
      left: 130px;
    }

    .resultado__item-license {
      margin-left: 45px;
    }
  }
</style>
