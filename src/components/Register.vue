<template>
  <div class="contact">
    <div class="titre-texte"></div>
    <br />
    <form @submit.prevent="register" class="contact-form">
      <label class="text-input-label" for="firstname">NOM</label>
      <input
        type="text"
        name="Prénom"
        id="firstname"
        v-model="firstname"
        required
        placeholder="Nom"
      />

      <label class="text-input-label" for="lastname">PRENOM</label>
      <input
        type="text"
        name="Prénom"
        id="lastname"
        v-model="lastname"
        required
        placeholder="Prenom"
      />

      <label class="text-input-label" for="dob">AGE</label>
      <input
        id="AGE"
        type="text"
        placeholder="Age / Majeur only"
        v-model="age"
        :class="dobValidity ? 'valid' : 'not-valid'"
        required
      />

      <label class="text-input-label" for="email">EMAIL</label>
      <input
        type="email"
        name="Email"
        id="email"
        v-model="email"
        required
        placeholder="email@email.fr"
      />

      <label class="text-input-label" for="password">PASSWORD</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        v-model="password"
        required
      />

      <div>
        <button class="submit-button">Sauvegarder</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      age: "",
    };
  },

  computed: {
    dobValidity() {
      return this.age > 17;
    },
  },

  methods: {
    async register() {
      const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/register";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          age: this.age,
        }),
      };

      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (this.age < 18) {
        this.$router.push("/RegisterPage");
        alert("Vous devez être majeur pour vous inscrire");
      } else {
        this.$router.push("/LoginPage");
        alert("Votre incription a bien été validée");
        alert("Merci de vous connecter avec vos identifiants");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titre-texte {
  height: 30px;
  align-items: center;
  justify-content: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 40px rgba(241, 240, 240, 0.9);

  border-radius: 3px;
  margin-left: 25%;
  margin-right: 25%;
  height: 450px;
  padding: 20px;
  background-color: rgba(17, 29, 74, 0.2);
}

.contact .contact-form label {
  color: #2b2d42;
  font-size: 15px;
  font-weight: bold;
}

.contact .contact-form .text-input-label {
  display: block;
  margin: 5px;
}
.contact .contact-form input {
  border: 2px solid #e55812;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 5px;
  width: 32%;
}

.contact .contact-form input::placeholder {
  text-align: center;
}
.submit-button {
  background-color: #2b2d42;
  color: white;
  border-radius: 8px;
  height: 50px;
  width: 150px;
  font-size: 19px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 1s ease-out;
}
.submit-button:hover {
  color: #e55812;
  background-color: white;
}

.valid {
  border: 2px solid #0a940a;
  border-radius: 5px;
  background-color: rgba(41, 160, 17, 0.4);
}

.not-valid {
  border: 2px solid #b91b0d;
  border-radius: 5px;
  background-color: rgba(233, 20, 20, 0.4);
}
</style>
