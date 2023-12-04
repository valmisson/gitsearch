<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button
        class="controlls"
        :class="{ disabled: currentPage <= 1 }"
        @click="prevPage"
      >
        &#x3c;
      </button>
    </li>
    <li
      v-for="(page, index) in pages"
      :key="index"
      class="pagination__item"
    >
      <div v-if="page.break" class="dividir">...</div>

      <button
        v-else
        class="page-link"
        :class="{ active: page.selected }"
        @click="gotPage(page.number)"
      >
        {{ page.number }}
      </button>
    </li>
    <li class="pagination__item">
      <button
        class="controlls"
        :class="{ disabled: currentPage >= pageCount }"
        @click="nextPage"
      >
        &#x3e;
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LayoutPaginate',
  emits: ['update:modelValue'],
  props: {
    modelValue: Number,
    pageCount: Number
  },

  data () {
    return {
      currentPage: 1,
      pageRange: 3,
      marginPages: 1
    }
  },

  mounted () {
    this.currentPage = this.modelValue
  },

  methods: {
    gotPage (pageNumber) {
      this.currentPage = pageNumber

      this.$emit('update:modelValue', this.currentPage)
    },
    prevPage () {
      if (this.currentPage <= 1) return

      this.gotPage(this.currentPage - 1)
    },
    nextPage () {
      if (this.currentPage >= this.pageCount) return

      this.gotPage(this.currentPage + 1)
    }
  },
  computed: {
    pages () {
      const items = {}

      const setPageItem = index => {
        items[index] = {
          number: index + 1,
          selected: index === (this.modelValue - 1)
        }
      }
      const setBreakView = index => {
        items[index] = {
          break: true
        }
      }

      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          setPageItem(index)
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2)

        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i)
        }

        let selectedRangeLow = 0
        if (this.currentPage - halfPageRange > 0) {
          selectedRangeLow = this.currentPage - 1 - halfPageRange
        }

        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
          setPageItem(i)
        }

        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1)
        }

        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1)
        }

        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i);
        }
      }

      return items
    }
  }
}
</script>

<style scoped>
  .pagination {
    background-color: white;
    border: 1px solid #ccc;
    display: flex;
    list-style: none;
    margin: 0 auto 25px auto;
    padding-left: 0;
    width: fit-content;
  }

  .pagination__item {
    border-left: 1px solid #ccc;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    font-weight: 500;
    float: left;
    height: 40px;
  }

  .pagination__item:first-child {
    border-left: 0;
  }

  .pagination__item .page-link:hover:not(.active),
  .pagination__item .controlls:hover:not(.disabled) {
    background-color: #e9ecef;
  }

  .pagination__item .dividir {
    color: black;
    font-weight: bold;
    padding: 10px 15px;
  }

  .pagination__item .page-link {
    display: block;
    padding: 10px 15px;
  }

  .pagination__item .page-link,
  .pagination__item .controlls {
    background-color: transparent;
    border: none;
    color: var(--color-primary);
    cursor: pointer;
    display: block;
    font-weight: bolder;
    padding: 10px 15px;
  }

  .pagination__item .page-link.active {
    background-color: var(--color-primary);
    color: white !important;
  }

  .pagination__item .controlls.disabled {
    color: var(--color-font-primary);
    cursor: auto;
    pointer-events: none;
  }
</style>
