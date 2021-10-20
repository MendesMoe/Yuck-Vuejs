<template>
  <div class="contact-form">
    <form @submit.prevent="login" class="formlogin">
      <label class="text-input-label">EMAIL</label>
      <input type="email" placeholder="email@email.fr" v-model="email" />
      <br />
      <label class="text-input-label">PASSWORD</label>

      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <p>J'ai oublié mon mot de passe</p>
      <router-link class="link" href="" to="/"
        ><button @click="login" class="submit-button">
          Valider
        </button></router-link
      >
      <br />

      <h3>Pas encore de compte, Inscris-toi :</h3>
      <router-link class="link" href="" to="/RegisterPage"
        ><button class="submit-button">Inscription</button></router-link
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "formlogin",
  data() {
    return {
      email: "",
      password: "",
      loginDone: false,
    };
  },
  methods: {
    async login() {
      const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem("token-yuck", data.token);
        this.setLoginStatus();
      } else {
        this.$router.push("/LoginPage");
        alert("Merci d'entrer un mail ou un mot de passe valide svp");
      }
    },
  },
  inject: ["setLoginStatus"],
};
</script>

<style scoped>
.formlogin {
  color: #11174a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 40px rgba(235, 232, 232, 0.9);
  border-radius: 5px;
  margin-left: 25%;
  margin-right: 25%;
  padding-top: 30px;
  height: 550px;
  padding: 30px;
  background-color: rgba(17, 29, 74, 0.2);
}
.formlogin label {
  color: #11174a;
  font-size: 17px;
  font-weight: bold;
}
.formlogin .text-input-label {
  display: block;
  margin: 5px;
}
form p {
  text-decoration: underline;
  font-size: 12px;
  margin-top: 2px;
}
.contact-form input {
  border: 1px solid #e55812;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 5px;
  width: 34%;
}
.contact-form input::placeholder {
  text-align: center;
}

.submit-button {
  background-color: #2b2d42;
  color: white;
  border-radius: 8px;
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
}
.submit-button:hover {
  color: #e55812;
}

.link {
  text-decoration: none;
  color: white;
}
</style>