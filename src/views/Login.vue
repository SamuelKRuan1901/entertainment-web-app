<template>
  <div class="formContainer">
    <form>
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Login</h1>
      <label for="email">
        <span>Email</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          ref="email"
        />
      </label>
      <label for="password">
        <span>Password</span>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref="password"
        />
      </label>
      <button type="submit" @click="handleSubmit">Submit</button>
      <p>
        Don't have an account?
        <RouterLink to="/register">Register</RouterLink>
      </p>
    </form>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Login',
  components: {
    RouterLink
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      console.log(email, password);
      this.$router.push('/');
    }
  }
};
</script>
<style>
.formContainer {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161d2f;
  padding: 2rem;
  gap: 1rem;
  width: 370px;
  height: auto;
  border-radius: 10px;
}

label {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.5rem;
}

#email,
#password,
#confirmPassword {
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
}
button {
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  border: none;
  margin-top: 12px;
  background-color: #fff;
  cursor: pointer;
  font-size: large;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #d84d4d;
    color: #fff;
    scale: 1.1;
  }
}
</style>
