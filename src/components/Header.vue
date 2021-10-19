<template>
  <nav id="navBar">
    <a href="https://fontmeme.com/polices/police-funhouse/"></a>
    <br />
    <router-link to="/"
      ><img
        src="https://fontmeme.com/permalink/211014/5e53752470aaf7620f6251deba0fd4c4.png"
        alt="police-funhouse"
        border="0"
    /></router-link>
    <div class="navBar-item" v-if="!this.loged">
      <router-link class="link" href="" to="/LoginPage">Connexion</router-link>
      <router-link v-show="!this.loged" class="link" href="" to="/RegisterPage"
        >Créer un compte</router-link
      >
    </div>

    <div class="navBar-item" v-else>
      <router-link v-show="this.loged" class="link" href="" to="/Deconnexion"
        >Déconnexion</router-link
      >

      <router-link v-show="this.loged" class="link" href="" to="/EditProfil"
        >Profil</router-link
      >
      <router-link v-show="this.loged" class="link" href="" to="/about"
        >New yuck</router-link
      >
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      loged: false,
    };
  },
  mounted() {
    if (localStorage.getItem("token-yuck")) {
      this.loged = true;
    }
  },
};
</script>
