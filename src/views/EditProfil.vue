<template>
  <div>
    <h1>Profile</h1>
    <Profil />
    <button @click="this.show = !this.show">Modifier mon profil</button>
    <br />
    <p v-show="this.show">
      <input type="text" placeholder="Nom" v-model="newnom" />
      <input type="text" placeholder="Prenom" v-model="newprenom" />
      <input type="text" placeholder="Email" v-model="newmail" />
      <input type="Number" placeholder="Age" v-model="newage" />
      <br />
      <button @click="putUser">Sauvegarder</button>
    </p>
  </div>
</template>
<script>
import Profil from "@/components/Profil.vue";

export default {
  name: "EditProfil",
  components: {
    Profil: Profil,
  },
  data() {
    return {
      newprenom: "",
      newnom: "",
      newmail: "",
      newage: "",
      show: false,
    };
  },
  methods: {
    async putUser() {
      const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/user";

      const options = {
        method: "PUT",
        headers: {
          Authorization: "bearer " + localStorage.getItem("token-yuck"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: this.newprenom,
          lastname: this.newnom,
          email: this.newmail,
          age: this.newage,
          occupation: "",
        }),
      };
      console.log(this.prenom);
      const res = await fetch(url, options);
      console.log(res);
      const datauser = await res.json();
      console.log("voici le log de la res put user");
      console.log(datauser);
      if (datauser.success) {
        alert("Votre profil a été modifié");
      } else {
        alert("Votre profil n'a pas été modifié");
      }
    },
  },
};
</script>
<style></style>