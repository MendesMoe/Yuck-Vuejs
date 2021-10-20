<template>
  <div class="consult">
    <h3 class="titre-profil">Voici le profil de :</h3>

    <recupId :userIdProps="userId" />
    <!--<button @click="this.show = !this.show">Voir les posts</button> v-show="this.show"-->
    <div>
      <Post
        v-for="(item, index) in posts"
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
</template>
<script>
import recupId from "@/components/recupId.vue";
import Post from "@/components/Post.vue";

export default {
  name: "recupIDPage",
  props: {
    userId: String,
  },
  data() {
    return {
      show: false,
      posts: [],
    };
  },
  components: {
    recupId,
    Post,
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
    //filtre par userid

    const newdata = data.posts.filter(function (e) {
      return e.userId == this.userId;
    });
    //this.publications = data.posts;
    this.posts = newdata;
    console.log("Voici le tab posts filtre par ID");
    console.log(this.posts);
  },
};
</script>

<style scoped>
.consult {
  display: flex;
  flex-direction: column;
}

.titre-profil {
  text-align: center;
  color: #11174a;
  padding: 10px;
}
button {
  width: 100px;
  height: 30px;
  background-color: #11174a;
  text-decoration-style: none;
  bottom: unset;
  color: white;
}
</style>