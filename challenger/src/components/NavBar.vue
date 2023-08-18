<template>
    <div>
        <Navbar class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="" alt="Logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li> 
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
      <li class="nav-item">
        <router-link to="/users">Users</router-link>
      </li>
    </ul>
  
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 " >
        <li class="nav-item">
            <router-link to="/login">Login/</router-link>
            <router-link to="/register">Register</router-link>
          </li>
      </ul>
 
    </div>
  </div>
</Navbar><router-link to="/"></router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.li{
    margin-right: 3rem;
}
</style>