<template>
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