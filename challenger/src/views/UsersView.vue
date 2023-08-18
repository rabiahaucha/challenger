<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Users</h2>
        </div>
        <div class="row justify-content-center gap-3">
            <div v-for="user in users" class="card" style="width: 18rem;" :key="user.userID">
                <img :src="user.profileUrl" class="card-img-top" :alt="user.firstName" >
                <div class="card-body">
                  <h5 class="card-title">{{ user.firstName }} {{user.lastName}}</h5>
                  <p class="card-text">Email address: <span>{{user.emailAdd}}</span></p>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            users(){
                return this.$store.state.users
            }
        }, 
        mounted(){
            this.$store.dispatch('fetchUsers')
            
        }
    }
</script>

<style scoped>

</style>