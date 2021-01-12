<template>
  <div class="wrapper">
    <HeaderLayout />
    <SectionLayout />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "@/layouts/Header.vue";
import SectionLayout from "@/layouts/Section.vue";
import FooterLayout from "@/layouts/Footer.vue";

export default {
  components: { HeaderLayout, SectionLayout, FooterLayout },
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "styles/font.scss";

p,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: normal;
}

.wrapper {
  font-family: "Merriweather-Regular", sans-serif;
  height: 100vh;
  .container {
    width: 63.3vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
