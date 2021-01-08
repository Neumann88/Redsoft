<template>
  <footer class="footer">
    <div class="container">
      <Navbar />
      <Adress />
    </div>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Adress from "@/components/Adress/Adress.vue";

export default {
  name: "FooterLayout",
  components: { Navbar, Adress },
};
</script>

<style lang="scss">
.footer {
  background: #ece9e9;
  height: 10.3vh;
  width: 100vw;
}
</style>
