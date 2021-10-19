<template>
  <div class="accueil">
    <div class="partie-gauche">
      <div class="tendance">
        <div id="newyuck">
          <router-link href="" to="/about">Publier une Yuck</router-link>
        </div>
        <div>Filtrer les Yucks</div>

        <div>
          <div class="partie-select">
            <select
              id="select"
              name="type"
              v-model="categorychoice"
              @click="filter"
            >
              <option disabled value="">
                - thematiques les plus populaires -
              </option>
              <option id="travail" value="Travail">Au travail</option>
              <option id="transport" value="Transports">
                Dans les transports
              </option>
              <option id="couple" value="Couple">En couple</option>
              <option id="couple" value="Etudes">Etudes</option>

              <option value="autre">Autre</option>
            </select>
          </div>
        </div>
      </div>
      <div class="posts">
        <Post
          v-for="(item, index) in publications"
          :key="index"
          :categP="item.categories[0]"
          :titleP="item.title"
          :contentP="item.content"
          :authorP="item.lastname"
          :commentsP="item.comments"
          :postId="item._id"
          :likesP="item.likes.length"
          :neutralP="item.neutralReactions.length"
          :dateP="item.date"
          :userId="item.userId"
        />
      </div>
    </div>
    <div class="partie-droite">
      <div class="inscris">
        <p>
          Mauvaises manières, vilaines habitudes et manies gênantes... <br />
          Parfois on vit des situations que nous donnent envie de dire Beurk !
          Ou encore : Yuck !<br />
          Dans tout le cas, partage ton Yuck et tu veras que, au moins, tu n'est
          pas la seule !
        </p>
        <button class="btn-inscription">
          <router-link class="link" href="" to="/RegisterPage">
            <br />Créer un compte</router-link
          >
        </button>
      </div>

      <div class="presentation">
        <h3 color="#d90429">Sondage du jour</h3>
        <p>Vous preferez :</p>

        <div>
          <input type="radio" name="drone" value="1" checked />
          <label for="L'invité qui arrive avant l'heure"
            >L'invité qui arrive avant l'heure</label
          >
        </div>

        <div>
          <input type="radio" name="drone" value="2" />
          <label for="L'invité que ne prévient pas du retard"
            >L'invité que ne prévient pas du retard</label
          >
        </div>

        <div>
          <input type="radio" name="drone" value="3" />
          <label for="L'invité qui recupére la bouteille pas ouverte"
            >L'invité qui recupére la bouteille pas ouverte</label
          >
          <button>Voir le résultat</button>
        </div>
      </div>
      <div id="publicite">
        <img
          width="90%"
          height="400"
          src="https://i.pinimg.com/originals/94/fa/f1/94faf1da5da84d63220f8377f9c5f094.gif"
          alt="pub"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    Post: Post,
  },
  data() {
    return {
      publications: [],
      categorychoice: "",
    };
  },

  async mounted() {
    const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/posts";

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.publications = data.posts;
    console.log("Voici le tab publications");
    console.log(this.publications);
    console.log("Voici le tab comentario");
    console.log(this.publications[0].comments);
  },

  methods: {
    async filter() {
      const url =
        "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/posts?category=" +
        this.categorychoice;

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
      this.publications = data.posts;
      console.log("Voici le tab publications");
      console.log(this.publications);
    },
  },
};
</script>

<style>
.accueil {
  display: flex;
  flex-direction: row;
}
.partie-gauche {
  width: 65%;
  height: 70%;
  border-radius: 10px;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: right;
}
.posts {
  width: 90%;
  height: 600px;
  border-radius: 9px;
  margin-top: 2%;
  margin-left: 5%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}
.tendance {
  width: 90%;
  height: 10%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.911);
  color: #2b2d42;
  font-size: 18px;
  margin-left: 5%;
  justify-content: space-around;
  align-items: center;
  border-radius: 9px;
  box-shadow: inset 2px 3px 10px rgba(245, 245, 246, 0.972);
}
#newyuck {
  text-decoration: underline;
  cursor: pointer;
}
#newyuck a {
  color: black;
}
#select {
  font-size: 16px;
}

.partie-droite {
  width: 35%;
  height: 70%;
  border-radius: 10px;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.inscris {
  background-color: #f4f7f8;
  color: #2b2d42;
  border-radius: 8px;
  height: 60%;
  width: 90%;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  cursor: pointer;
}
.btn-inscription {
  background-color: #11174a;
}
.btn-inscription a {
  text-decoration: none;
  text-align: center;
}

.link:hover {
  color: #e55812;
}

.presentation {
  background-color: #8d99aed5;
  width: 90%;
  height: 60%;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 3px;
  color: white;
  margin-top: 20px;
  justify-items: center;
}
.presentation h3 {
  margin-left: 20px;
}

#publicite {
  margin-top: 20px;
}
</style>