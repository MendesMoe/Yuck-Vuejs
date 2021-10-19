<template>
  <div class="bloc-post">
    <div class="partie-un">
      <div class="debut-post">
        <div class="under" @click="consultProfil">
          <h4>Publié par {{ authorP }}</h4>
        </div>
        <h4>{{ dateP }}</h4>
        <div>
          <h4>{{ categP }}</h4>
        </div>
      </div>
      <div class="milieu-post">
        <p class="titre-post">{{ titleP }}</p>
        <p>
          {{ contentP }}
        </p>
      </div>
    </div>

    <div class="partie-deux">
      <div>
        <dislikeButton :initalDislikes="likesP" :postId="postId" />
        <!-- :initalDislikes="0" <p>Dislikes: {{ likesP }} Neutral: {{ neutralP }}</p>-->
        <Neutralbtn :initalNeutral="neutralP" :postId="postId" />
      </div>
      <NewComment :postId="postId" />
    </div>
    <p>Commentaires :</p>
    <div class="comments">
      <ul>
        <li
          class="comment-un"
          v-for="(comment, index) in commentsP"
          :key="index"
        >
          {{ comment.content }}
          <br />
          {{ comment.firstname }} {{ comment.lastname }}
          <br />

          Likes: {{ comment.likes.length }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NewComment from "@/components/NewComment.vue";
import dislikeButton from "@/components/dislikeButton.vue";
import Neutralbtn from "@/components/Neutralbtn.vue";

export default {
  name: "Post",
  components: {
    NewComment: NewComment,
    dislikeButton,
    Neutralbtn,
  },
  props: {
    titleP: String,
    contentP: String,
    categP: String,
    authorP: String,
    commentsP: Array,
    likesP: Number,
    neutralP: Number,
    postId: String,
    dateP: String,
    userId: String,
  },
  methods: {
    async consultProfil() {
      this.$router.replace({
        name: "recupIDPage",
        params: { userId: this.userId },
      });
    },
  },
};
</script>
<style>
.bloc-post {
  width: 99%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  background-color: #fdffffd0;
  margin-bottom: 5%;
  border-radius: 9px;
  box-shadow: inset 2px 3px 10px rgba(245, 245, 246, 0.972);
}
.partie-un {
  display: flex;
  flex-direction: column;
}
.debut-post {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
  color: #2b2d42;
  height: 50px;
}
.milieu-post {
  text-decoration: none;
  margin: 0px;
}
p {
  padding-left: 20px;
  color: #2b2d42;
}
.titre-post {
  text-decoration: underline;
  text-transform: uppercase;
}
.under {
  text-decoration: underline;
  cursor: pointer;
}

.partie-deux {
  display: flex;
  flex-direction: Row;
  align-items: center;
  justify-content: space-around;
}
.comments {
  margin-left: 10px;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  background-color: #b8b9caa6;
  color: rgba(0, 0, 0, 0.924);
  font-size: medium;
  overflow: scroll;
}

.comment-un {
  height: 100px;
}
</style>
