<template>
  <article class="resultado__item">
    <figure class="resultado__item-avatar">
      <img :src="items.owner.avatar_url" alt="Resultado avatar">
    </figure>

    <div class="resultado__item-content">
      <div class="resultado__item-info">
        <a :href="items.html_url" target="_blank" class="resultado__item-link">
          <h2 class="resultado__item-title">{{ items.full_name }}</h2>
        </a>
        <p class="resultado__item-description">{{ description }}</p>
      </div>

      <footer class="resultado__item-footer">
        <span class="resultado__item-language">{{ language }}</span>
        <span class="resultado__item-license">{{ license }}</span>
      </footer>
    </div>

    <div class="resultado__item-stars">
      <img src="@/assets/images/star-icon.svg" alt="icon star">
      <span class="resultado__item-count">{{ stars }}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Resultado',
  props: ['items'],

  computed: {
    language () {
      if (!this.items.language) return 'No language'

      return this.items.language
    },

    license () {
      const { license } = this.items

      if (!license) return 'No license'

      return license.name
    },

    description () {
      const { description } = this.items

      if (!description) return 'No description'

      const descriptionSplit = description.split(' ')

      if (descriptionSplit.length > 10) {
        return descriptionSplit.slice(0, 10).join(' ') + '...'
      }

      return description
    },

    stars () {
      const { stargazers_count } = this.items

      if (stargazers_count > 1000) {
        const count = stargazers_count.toLocaleString()

        return parseFloat(count).toFixed(1) + 'k'
      }

      return stargazers_count
    }
  }
}
</script>

<style scoped>
  .resultado__item {
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    color: var(--color-font-primary);
    display: flex;
    margin-bottom: 25px;
    position: relative;
    padding: 15px;
  }

  .resultado__item-avatar {
    margin: 0;
  }

  .resultado__item-avatar > img {
    border-radius: 3px;
    width: 60px;
    height: 60px;
  }

  .resultado__item-info {
    margin-left: 15px;
  }

  .resultado__item-link {
    display: table;
    margin-bottom: 10px;
    text-decoration: none;
  }

  .resultado__item-title {
    color: #0366D6;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .resultado__item-description {
    font-size: 14px;
    font-style: italic;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .resultado__item-stars,
  .resultado__item-count {
    display: none;
  }

  .resultado__item-footer {
    display: flex;
    font-size: 14px;
    margin-left: 15px;
  }

  .resultado__item-license {
    margin-left: 25px;
  }

  @media (min-width: 768px) {
    .resultado__item {
      padding: 15px 20px;
    }

    .resultado__item-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

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
      margin-bottom: 10px;
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
      margin-left: 25px;
    }

    .resultado__item-license {
      margin-left: 45px;
    }
  }
</style>
