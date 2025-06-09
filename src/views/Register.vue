<template>
  <div class="formContainer">
    <form>
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Register</h1>
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
          placeholder="**********"
          ref="password"
        />
      </label>
      <label for="confirmPassword">
        <span>Confirm Password</span>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="*********"
          ref="confirmPassword"
        />
      </label>
      <button type="submit" @click="handleSubmit">Submit</button>
      <p>
        Don't have an account?
        <RouterLink to="/login">login</RouterLink>
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
      this.$router.push('/login');
    }
  }
};
</script>
