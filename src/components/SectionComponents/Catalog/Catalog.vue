<template>
  <div class="catalog">
    <h1 class="catalog__title">Картины эпохи Возрождения</h1>
    <div class="catalog__cards">
      <Card
        v-for="items in CARDS"
        :key="items.id"
        :card_data="items"
        @add="add"
      />
      <!-- <DisabledCard /> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import DisabledCard from "./DisabledCard/DisabledCard.vue";
import Card from "./Card/Card.vue";

export default {
  name: "Catalog",
  components: { Card },
  methods: {
    ...mapActions(["GET_CLICKBTN_API", "GET_CARD_API"]),
    add(items) {
      this.GET_CLICKBTN_API(items);
    },
  },
  mounted() {
    this.GET_CARD_API();
  },
  computed: {
    ...mapGetters(["CARDS"]),
  },
};
</script>

<style lang="scss">
.catalog {
  margin-top: 50px;
  width: 100%;

  &__title {
    font-size: 24px;
    font-family: "Merriweather-Bold", sans-serif;
    margin-bottom: 42px;
  }

  &__cards {
    display: flex;
    justify-content: space-between;
  }
}
</style>
