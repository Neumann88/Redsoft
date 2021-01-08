<template>
  <div class="navbar">
    <img src="@/img/logo.png" alt="logo" />
    <ul class="navbar__links">
      <li><router-link to="/">Каталог</router-link></li>
      <li><router-link to="/delivery">Доставка</router-link></li>
      <li><router-link to="/payment">Оплата</router-link></li>
      <li><router-link to="/contacts">Контакты</router-link></li>
      <li><router-link to="/gallery">О галерее</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  height: 100%;
  align-items: center;

  &__links {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0px;
    font-size: 14px;
    li {
      margin-left: 48px;

      a {
        color: #343030;
        text-decoration: none;
      }
    }
  }
}
</style>
