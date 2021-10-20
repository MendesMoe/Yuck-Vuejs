<template>
  <div class="allo">
    <nav id="navBar">
      <a href="https://fontmeme.com/polices/police-funhouse/"></a>
      <br />
      <router-link to="/"
        ><img
          src="https://fontmeme.com/permalink/211014/5e53752470aaf7620f6251deba0fd4c4.png"
          alt="police-funhouse"
          border="0"
      /></router-link>
      <div class="navBar-item" v-if="!loged">
        <router-link class="link" href="" to="/LoginPage"
          >Connexion</router-link
        >
        <router-link
          v-show="!this.loged"
          class="link"
          href=""
          to="/RegisterPage"
          >Créer un compte</router-link
        >
      </div>

      <div class="navBar-item" v-else>
        <a href="#" class="link" @click="logout()"> Deconnexion </a>

        <router-link v-show="this.loged" class="link" href="" to="/EditProfil"
          >Profil</router-link
        >
        <router-link v-show="this.loged" class="link" href="" to="/about"
          >New yuck</router-link
        >
      </div>
    </nav>

    <div class="bodyPage">
      <transition appear name="fade">
        <router-view />
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      loged: false,
    };
  },
  components: {
    Footer: Footer,
  },
  mounted() {
    if (localStorage.getItem("token-yuck")) {
      this.loged = true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token-yuck");
      this.loged = false;
    },
  },
  provide() {
    return {
      setLoginStatus: () => {
        console.log("test function dans provide");
        this.loged = true;
      },
    };
  },
};
</script>
<style>
.bodyPage {
  margin: 0px;
  background-image: url("./assets/Word_Art_02.jpg");
  background-size: 20%;
  margin-top: 70px;
  justify-content: center;
}
#navBar {
  position: absolute;
  top: 2px;
  left: 5px;
  right: 5px;
  height: 70px;

  background-color: #d90429;

  border-radius: 10px;
  align-items: center;
}

#navBar .navBar-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.3em;
}
#navBar .navBar-item .link {
  text-decoration: none;
  color: white;
  font-size: 15px;
  padding-right: 50px;
  font-family: "Roboto", sans-serif;
  align-items: center;
  text-align: center;
  padding-top: 5px;
}

#navBar .navBar-item .link:hover {
  color: rgb(53, 20, 3);
}

#navBar img {
  position: absolute;
  width: 150px;
  height: 45px;
  left: 50px;
  bottom: 12px;
}

#footBar .footBar-item {
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  border-radius: 10px;
}
#footBar .footBar-item .link {
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding-right: 20px;
  font-family: "Roboto", sans-serif;
}

#footBar .footBar-item {
  height: 80px;
  background-color: #e5581292;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.link1 {
  position: absolute;
  width: 150px;
  height: 45px;
  left: 50px;
  margin-top: 30px;
  color: white;
}
.img {
  position: absolute;
  width: 350px;
  height: 45px;
  left: 50px;

  margin-top: 25px;
  color: white;
  font-size: 12px;
}
.image {
  padding-left: 10px;
  padding-bottom: 30px;
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
}
.text {
  text-decoration: none;
  position: absolute;
  width: 300px;
  height: 45px;
  left: 150px;
  margin-top: 5px;
  color: white;
  font-size: 12px;
}

@media (max-width: 768px) {
  .footerbar {
    flex-direction: column;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  animation: bounce-in 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
