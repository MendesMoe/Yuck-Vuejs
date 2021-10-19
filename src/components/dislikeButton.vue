<template>
  <button class="dislike-button" @click="addDislike">
    <i class="fa fa-thumbs-down" style="font-size: 20px"></i>
    {{ this.dislike }} Yuck
  </button>
</template>

<script>
export default {
  name: "dislikeButton",
  props: {
    initalDislikes: Number,
    postId: String,
  },
  data() {
    return {
      dislike: this.initalDislikes,
    };
  },
  methods: {
    async addDislike() {
      const url = "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/post/like";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token-yuck"),
        },
        body: JSON.stringify({ postId: this.postId }),
      };

      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (data.success) {
        this.dislike++;
      }
    },
  },
};
</script>

<style>
.dislike-button {
  border-radius: 5px;
  color: #2b2d42;
  border: 1px solid black;
  margin-right: 20px;
}
</style>
