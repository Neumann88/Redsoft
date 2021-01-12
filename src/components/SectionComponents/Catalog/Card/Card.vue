<template>
  <div class="card" :class="{ available: !card_data.available }">
    <img
      class="card__img"
      :src="require(`../../../../img/${card_data.img}`)"
      alt="imgs"
    />

    <div class="card__container">
      <h2 class="card__name">{{ card_data.name }}</h2>
      <div class="booking">
        <div class="booking__container">
          <h6 class="booking__discount">{{ card_data.discount }}</h6>
          <h3 class="booking__price">
            {{ card_data.price }}
          </h3>
        </div>

        <template v-if="card_data.available">
          <button v-if="!loading && !inCart" class="booking__btn" @click="add">
            {{ "Купить" }}
          </button>

          <Loader v-else-if="loading" />

          <button v-else class="booking__btn-inCart">
            {{ "\u2713 В корзине" }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "@/components/Loader/Loader.vue";

export default {
  name: "Card",
  components: { Loader },
  props: {
    card_data: Object,
  },
  data() {
    return {
      loading: false,
      inCart: false,
    };
  },
  mounted() {
    this.CART.forEach((element) => {
      {
        if (element.id === this.card_data.id) {
          this.inCart = true;
        }
      }
    });
  },
  methods: {
    add() {
      this.loading = true;
      this.$emit("add", this.card_data);
      setTimeout(() => {
        this.loading = false;
        this.inCart = true;
      }, 1000);
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.available {
  opacity: 0.5;
}
.card {
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  width: 278px;

  &__container {
    padding: 20px 23px 23px 23px;
  }

  &__name {
    font-size: 18px;
    line-height: 1.7rem;
  }
}
.booking {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 48px;
  }
  &__discount {
    font-family: "Merriweather-Light", sans-serif;
    font-size: 14px;
    color: #a0a0a0;
    line-height: 150%;
    text-decoration: line-through;
  }
  &__price {
    line-height: 150%;
    font-size: 16px;
    font-family: "Merriweather-Bold", sans-serif;
  }
  &__btn {
    font-size: 14px;
    background: #403432;
    color: white;
    width: 120px;
    height: 48px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    outline: none;
    transition: 0.3s;
  }
  &__btn:hover {
    background: #776763;
  }
  &__btn-inCart {
    font-size: 14px;
    background: #5b3a32;
    color: white;
    width: 120px;
    height: 48px;
    border: none;
    text-decoration: none;
    user-select: none;
    outline: none;
  }
  .card__available {
    opacity: 0.5;
  }
}
</style>
