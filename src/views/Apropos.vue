<template>
  <div id="body">
    <p>
      Ca y est on y est ! Notre projet de réseau social est enfin terminé.<br />
      Il nous a bien fait marré celui la ... exaspéré même...<br />
      Et on n'a rien laché, on n'a tenu bon jusqu'au bout !<br />
      J'espere qu'il vous plaira autant qu'il nous a fait suer... QRTHURR
    </p>

    <div>
      <h1 class="titre">THE TEAM</h1>
    </div>

    <div id="blockTeam">
      <div class="block1">
        <img
          src="@/assets/Alex.jpg"
          alt="police-funhouse"
          class="image-apropos"
        />
        <div class="membersBlock">
          <p class="name">Alex</p>
        </div>
      </div>

      <div class="block2">
        <img
          src="@/assets/moenah.jpg"
          alt="police-funhouse"
          class="image-apropos"
        />
        <div class="membersBlock">
          <p class="name">Moenah</p>
        </div>
      </div>

      <div class="block3">
        <img
          src="@/assets/thomas.jpg"
          alt="police-funhouse"
          class="image-apropos"
        />
        <div class="membersBlock">
          <p class="name">Thomas</p>
        </div>
      </div>

      <div class="block4">
        <img
          class="image-apropos"
          src="@/assets/zuP7DdX4BQLjh1XOUK7Q5sb8Tck.gif"
          alt="police-funhouse"
        />

        <div class="membersBlock">
          <p class="name">Ludivine</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#body {
  margin: 100px;
  padding: 100px;
  font-family: sans-serif;
  background-repeat: no-repeat;
  font-family: Georgia, "Times New Roman", Times, serif;
  position: fixed;
  height: 700px;
}
.titre {
  color: darkorange;
  text-align: right;
  animation-duration: 3s;
  animation-name: slidein;
  animation-direction: alternate;
}
#blockTeam {
  display: flex;
  flex-direction: row;
  width: 500px;
  height: auto;
}

.membersBlockBlock {
  display: flex;
  flex-direction: row;
}
.name {
  margin: 20px 20px;
  flex: 1;
  padding-left: 130px;
  min-width: 1vw;
  color: orange;
  font-size: larger;
  animation-duration: 3s;
  animation-name: slidein;
  font-size: x-large;
}
.image-apropos {
  position: relative;
  animation-duration: 3s;
  animation-name: slidein;
  border: none;
  float: left;
  width: 250px;
  height: 250px;
  margin-right: 50px;
}
p {
  color: darkblue;
  text-align: justify;
  font-family: police-funhouse;
  font-size: large;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }
}
</style>
