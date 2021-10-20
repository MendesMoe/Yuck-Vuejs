<template>
  <div class="profil-formulaire">
    <p class="detail">
      Nom :
      <span class="prof">{{ this.nom }}</span>
    </p>
    <p class="detail">
      Prenom :
      <span class="prof">{{ this.prenom }}</span>
    </p>
    <p class="detail">
      Mail :
      <span class="prof">{{ this.mail }}</span>
    </p>
    <p class="detail">
      Age :
      <span class="prof">{{ this.age }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "recupId",
  components: {},
  props: {
    userIdProps: String,
  },

  data() {
    return {
      prenom: "",
      nom: "",
      mail: "",
      id: "",
      age: "",
    };
  },

  async mounted() {
    const url =
      "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/user/" + this.userIdProps;

    const options = {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("token-yuck"),
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.prenom = data.firstname;
    this.nom = data.lastname;
    this.mail = data.email;
    this.age = data.age;
  },
};
</script>

<style scoped>
.profil-formulaire {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  box-shadow: inset 0px 0px 40px rgba(250, 248, 248, 0.9);
  border-radius: 5px;

  height: 250px;
  width: 40%;
  padding: 10px;
  margin-bottom: 280px;
  background-color: rgba(242, 244, 248, 0.63);

  font-size: 14px;
}

.detail {
  font-weight: bold;
}

.prof {
  color: darkred;
}
</style>
