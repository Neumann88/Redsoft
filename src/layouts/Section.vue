<template>
  <section class="section">
    <div class="container">
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionLayout",
};
</script>

<style lang="scss">
.section {
  background: #f6f3f3;
  height: 79.5%;
}
</style>
