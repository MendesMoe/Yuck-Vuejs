<template>
  <button class="neutral-button" @click="addNeutral">
    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{ this.neutral }} Aff
  </button>
</template>

<script>
export default {
  name: "Neutralbtn",
  props: {
    initalNeutral: Number,
    postId: String,
  },
  data() {
    return {
      neutral: this.initalNeutral,
    };
  },
  methods: {
    async addNeutral() {
      const url =
        "https://dw-s3-nice-yuck.osc-fr1.scalingo.io/post/neutral-reaction";
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
        this.neutral++;
      }
    },
  },
};
</script>

<style>
.neutral-button {
  border-radius: 5px;
  color: #2b2d42;
  border: 1px solid black;
  font-size: 16px;
}
</style>
