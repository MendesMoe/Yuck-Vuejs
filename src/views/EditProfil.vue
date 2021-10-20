<template>
  <div>
    <div class="titre-profil">
      <h1 v-show="!this.show">Consulter mon profil</h1>
      <h1 v-show="this.show">Modifier mon profil</h1>
    </div>
    <div class="partie-profil">
      <div class="profil-form">
        <Profil />
        <button class="boutonModif" @click="this.show = true">
          Modifier mon profil
        </button>
      </div>

      <br />
      <div class="modif-form" v-show="this.show">
        <p>Entrer vos modifications ici :</p>
        <input type="text" placeholder="Nom" v-model="newnom" />
        <input type="text" placeholder="Prenom" v-model="newprenom" />
        <input type="text" placeholder="Email" v-model="newmail" />
        <input type="Number" placeholder="Age" v-model="newage" />
        <br />
        <br />

        <button class="boutonSauv" @click="putUser">Sauvegarder</button>
      </div>
    </div>
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
        window.location.reload();
      } else {
        alert("Votre profil n'a pas été modifié");
      }
    },
  },
};
</script>
<style>
.titre-profil {
  text-align: center;
  color: #11174a;
  padding: 10px;
}

.profil-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 40px rgba(241, 240, 240, 0.9);
  border-radius: 5px;
  margin-left: 10%;
  margin-right: 10%;

  height: 450px;
  width: 30%;
  padding: 20px;
  background-color: rgba(17, 29, 74, 0.05);

  font-size: 19px;
}
.boutonModif {
  background-color: #11174a;
  color: white;
  border-radius: 8px;
  height: 50px;
  width: 30vh;
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 1s ease-out;
}
.boutonModif:hover {
  color: #e55812;
  background-color: white;
}

.partie-profil {
  display: flex;
  flex-direction: row;
}

.modif-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 40px rgba(241, 240, 240, 0.9);

  border-radius: 5px;
  margin-left: 10%;
  margin-right: 10%;
  height: 450px;
  width: 30%;
  padding: 20px;
  background-color: rgba(178, 188, 224, 0.2);
}

.modif-form input {
  border: 2px solid #11174a;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 5px;
  width: 32%;
  margin: 10px;
  background-color: rgb(235, 235, 235);
}
.modif-form input::placeholder {
  text-align: center;
}
.boutonSauv {
  background-color: #11174a;
  color: white;
  border-radius: 8px;
  height: 50px;
  width: 30vh;
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 1s ease-out;
}

.boutonSauv:hover {
  color: #e55812;
  background-color: white;
}
</style>
