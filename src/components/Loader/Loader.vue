<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss">
.loader {
  display: inline-block;
  width: 120px;
  height: 48px;
  margin: auto;
}
.loader:after {
  content: " ";
  display: block;
  width: 44px;
  height: 44px;
  margin: auto;
  border-radius: 50%;
  border: 5px solid #fff;
  border-color: #403432 transparent #403432 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
