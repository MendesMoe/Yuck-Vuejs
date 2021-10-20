<template>
  <div>
    <div class="date-form">
      <p class="date">
        Bonjour,<br />Le
        {{ this.today }}
      </p>
    </div>
    <br />
    <img class="imagem-profil" src="@/assets/profil.png" />
    <p>
      Nom : <span class="id">{{ this.nom }}</span>
    </p>
    <p>
      Prenom : <span class="id">{{ this.prenom }}</span>
    </p>
    <p>
      Mail : <span class="id">{{ this.mail }}</span>
    </p>
    <p>
      Age : <span class="id">{{ this.age }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "Profil",
  props: {},
  data() {
    return {
      prenom: "",
      nom: "",
      mail: "",
      id: "",
      age: "",
      today: new Date().toLocaleString(),
    };
  },
  async mounted() {
    const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/user";

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
    this.id = data._id;
    this.age = data.age;
  },
};
</script>

<style scoped>
.date {
  font-size: 20px;
}

.id {
  color: darkred;
}

.profil-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 40px rgba(241, 240, 240, 0.9);
  border-radius: 5px;
  margin-left: 20%;
  margin-right: 20%;
  height: 450px;
  padding: 20px;
  background-color: rgba(178, 188, 224, 0.2);
  font-size: 17px;
}
.imagem-profil {
  width: 150px;
  height: 150px;
}
</style>

<!-- <template>
  <div>
    <h2>Bonjour ! Il est {{ this.today }}</h2>
    <p>Nom : {{ this.nom }}</p>
    <p>Prenom : {{ this.prenom }}</p>
    <p>Mail : {{ this.mail }}</p>
    <p>Age : {{ this.age }}</p>
    <p>Id : {{ this.id }}</p>
  </div>
</template>
<script>
export default {
  name: "Profil",
  props: {},
  data() {
    return {
      prenom: "",
      nom: "",
      mail: "",
      id: "",
      age: "",
      today: new Date(),
    };
  },
  async mounted() {
    const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/user";

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
    this.id = data._id;
    this.age = data.age;
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
-->