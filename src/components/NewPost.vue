<template>
  <div class="hola">
    <h1></h1>
    <form class="postForm" @submit.prevent="savenewPost(index)" method="post">
      <div>
        <label for="userId">Publié par : </label>
        <br />
        <br />
        <div>
          <label class="text-input-label">CATEGORIE : </label>
          <select id="select" name="type" v-model="category">
            <option disabled value="">
              --Veuillez choisir une categorie --
            </option>
            <option id="travail" value="Travail">Au travail</option>
            <option id="transport" value="Transports">Les transports</option>
            <option id="couple" value="Couple">En couple</option>
            <option id="ecole" value="Etudes">Les etudes</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label class="text-input-label">TITRE DE LA YUCK : </label>
          <input for="title" placeholder="Titre" v-model="title" required />
        </div>
        <div>
          <label class="text-input-label">DESCRIPTION : </label>
          <textarea
            type="text"
            id="content"
            placeholder="Votre texte ici"
            v-model="content"
            required
          ></textarea>
        </div>
        <div>
          <label class="text-input-label">IMAGE : </label>
          <input
            @change="uploadImage"
            type="file"
            placeholder="Url de l'image / facultatif"
          />
        </div>
      </div>

      <button class="submit-button">Partager mon Yuck</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  props: {},

  data() {
    return {
      title: "",
      content: "",
      categories: [],
      category: "",
      img: "",
    };
  },

  methods: {
    async savenewPost() {
      const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/post";

      this.categories = [];
      this.categories.push(this.category);

      const options = {
        method: "POST",
        headers: {
          Authorization: "bearer " + localStorage.getItem("token-yuck"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categories: this.categories,
          title: this.title,
          content: this.content,
          image: this.img,
        }),
      };

      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);

      alert(
        "Votre publication va être soumise à nos modérateurs avant publication"
      );
      this.$router.push("/");
    },
    uploadImage(e) {
      console.log("rentre dans la function upload");
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.img = e.target.result;
        console.log(this.img);
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  box-shadow: inset 0px 0px 40px rgba(230, 227, 227, 0.849);

  border-radius: 5px;

  height: 550px;
  padding: 20px;
  background-color: #fdffffd0;
}

label {
  color: #11174a;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  border: 2px solid #e55812;
  border-radius: 10px;
  padding: 5px;
  font-size: 15px;
  margin-bottom: 20px;
  width: 78%;
}

select {
  border: 2px solid #e55812;
  border-radius: 10px;
  padding: 8px;
  font-size: 15px;
  margin-bottom: 40px;
  width: 80%;
}

textarea {
  border: 2px solid #e55812;
  border-radius: 10px;

  margin-bottom: 15px;
  width: 78%;
  height: 70px;
}

input::placeholder {
  text-align: center;
}

textarea::placeholder {
  text-align: center;
  padding-top: 15px;
  font-size: 15px;
}

.submit-button {
  background-color: #11174a;
  color: white;
  border-radius: 8px;
  height: 50px;
  width: 40vh;
  font-size: 19px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  transition: all 1s ease-out;
}
.submit-button:hover {
  color: #e55812;
  background-color: white;
}
</style>


