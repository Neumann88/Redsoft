<template>
  <div class="search">
    <form class="search__form">
      <div>
        <input
          class="search__input"
          type="text"
          placeholder="Поиск по названию картины"
        />
        <button class="search__btn" @click.prevent="">Найти</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search",
};
</script>

<style lang="scss">
.search {
  align-self: center;

  &__input {
    padding-left: 15px;
    background: #f6f3f3;
    font-size: 14px;
    border: 1px solid#e1e1e1;
    min-width: 275px;
    height: 44px;
  }

  &__input:focus {
    outline-width: 0;
  }

  &__btn {
    font-size: 14px;
    background: #403432;
    color: white;
    min-width: 122px;
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
}
</style>
