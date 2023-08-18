<template>
  <footer>

      <div class="container">
          <hr>
      </div>
      <div>
          <a href="https://www.linkedin.com/in/masood-basardien-6aa759282/" target="_blank"><i class="bi bi-linkedin"></i></a> <a href="https://github.com/Masood-B?tab=repositories" target="_blank"><i class="bi bi-github"></i></a>
      </div>
      <p>CopyRight &copy; {{ cYear }} </p>
  </footer>
        
        
</template>

<script>
   export default {
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped>

</style>