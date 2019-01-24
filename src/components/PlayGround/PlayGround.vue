<template>
  <div class="hello">
    <!-- v-bind -->
    <div v-bind:class="backgroundClassName">Some Class with Background</div>

      <!-- v-on -->
      <button v-on:click="handleClick">Click This</button>

      <!-- v-once -->
      <div v-once>the first message will never change: {{ message }}</div>
       <div>the first message will never change: {{ message }}</div>

      <!-- v-html -->
      <div v-html="anchorTag"></div>

      <!-- v-model -->
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" v-model="nameInput">

      <!-- computed -->
      <div>{{ message }} => reversed: {{ reversemessage }}</div>

      <!-- watch -->
      
  </div>

</template>

<script src="./PlayGround.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./PlayGround.css" scoped></style>
