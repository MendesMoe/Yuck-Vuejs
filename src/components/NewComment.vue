<template>
  <div class="comment">
    <form action="/" @submit.prevent="savenewComment" method="post">
      <textarea
        rows="10"
        cols="20"
        type="text"
        id="comment"
        placeholder="Publier un commentaire..."
        v-model="comment"
      ></textarea>
      <!--<input type="text" placeholder="Url de l'image" />
        {{ comment }}-->
      <div>
        <button class="valid-comment">Publier</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewComment",
  props: {
    postId: String,
  },

  data() {
    return {
      comment: "",
    };
  },

  //this.categories.push(this.category);

  methods: {
    async savenewComment() {
      const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/post/comment";

      const options = {
        method: "POST",
        headers: {
          Authorization: "bearer " + localStorage.getItem("token-yuck"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: this.postId,
          content: this.comment,
        }),
      };

      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log("O COMENTARIO FOI BEM ENVIADO");
      window.location.reload();
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
textarea {
  width: 99%;
  height: 30px;
  font-size: 14px;
  border-radius: 10px;
  align-items: center;
}
textarea::placeholder {
  padding-left: 10px;
  padding-top: 10px;
}

.valid-comment {
  width: 70px;
  height: 28px;
  background-color: #2b2d42;
  color: white;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 10px;
}
.valid-comment:hover {
  font-style: oblique;
}
</style>