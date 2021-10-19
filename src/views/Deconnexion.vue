<template>
  <h1>Merci et a bientot !</h1>
</template>
<script>
export default {
  name: "Deconnexion",
  components: {},
  mounted() {
    localStorage.removeItem("token-yuck");
  },
};
</script>