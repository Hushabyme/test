<template>
  <div id="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';

  export default {
    data() {
      return {
        quotes: [
          'Just a Quote to see something'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote) {
        this.quotes.push(quote);
      }
    },
    components: {
      'app-quote-grid': QuoteGrid,
      'app-new-quote': NewQuote,
    }
  }
</script>