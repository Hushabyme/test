export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon', 'Lemon'],
      filterText: ''
    }
  },
  computed: {
    filteredText() {
      return this.fruits.filter(element => element.match(this.filterText))
    }
  }
};