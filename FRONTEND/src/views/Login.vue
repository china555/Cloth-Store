<template>
  <div class="login">
    <h2 class="login-heading">Login</h2>
    <form action="#" @submit.prevent="login">
      <div class="form-control">
        <label for="email">Username / Email</label>
        <input
          type="text"
          name="username"
          class="login-input"
          v-model="input.username"
          placeholder="Username"
        />
      </div>
      <div class="form-control mb-more">
        <label>Password</label>
        <input
          type="password"
          name="password"
          class="login-input"
          v-model="input.password"
          placeholder="Password"
        />
      </div>
      <div class="form-control">
        <button type="submit" class="btn-submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
//import axios from 'axios';
const axios = require("axios");
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    async login() {
      if (this.input.username != "" && this.input.password != "") {
        let res = await axios.post("http://localhost:8081/login", {
          username: this.input.username,
          password: this.input.password
        });
        console.log(res);
      } else {
        alert("Please Insert your username or password");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 24px;
  height: 100vh;
  padding: 30px;
}
.flex-center {
  display: flex;
  justify-content: center;
}

label {
  display: block;
  margin-bottom: 4px;
}
.login-heading {
  margin-bottom: 16px;
}
.form-control {
  margin-bottom: 24px;
}
.mb-more {
  margin-bottom: 42px;
}
.login-form {
  max-width: 500px;
  margin: auto;
}
.login-input {
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  outline: 0;
  border-radius: 3px;
  border: 1px solid lightgrey;
}
.btn-submit {
  width: 100%;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #000000;
  color: white;
  border-radius: 3px;
  border-radius: 1.5rem;
  cursor: pointer;
  &:hover {
    background: darken(#2c3e50, 18%);
    border-radius: 1.5rem;
  }
}
</style>
