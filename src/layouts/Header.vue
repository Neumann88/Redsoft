<template>
  <header class="header">
    <div class="container">
      <Navbar />
      <Search />
    </div>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Search from "@/components/Search/Search.vue";

export default {
  name: "HeaderLayout",
  components: { Navbar, Search },
};
</script>

<style lang="scss">
.header {
  background: #f6f3f3;
  height: 10.1vh;
  width: 100vw;
  border-bottom: 1px solid #e1e1e1;
}
</style>
