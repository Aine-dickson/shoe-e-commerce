<template>
    <footer class="bg-slate-800 h-full">
        <nav class="flex justify-around items-center h-full">
           <router-link :to="{name: 'home'}">
                <div @click="filter('home')" class="flex flex-col items-center">
                    <i class="fas fa-house">NI</i>
                    <span v-if="filtrate != 'home'" class="text-sm font-light">Home</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'cart'}">
                <div @click="filter('cart')" class="flex flex-col items-center">
                    <i class="fas fa-house">NI</i>
                    <span v-if="filtrate != 'cart'" class="text-sm font-light">Cart</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'order'}">
                <div @click="filter('orders')" class="flex flex-col items-center">
                    <i class="fas fa-house">NI</i>
                    <span v-if="filtrate != 'orders'" class="text-sm font-light">Orders</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'wishlist'}">
                <div @click="filter('wishlist')" class="flex flex-col items-center">
                    <i class="fas fa-house">NI</i>
                    <span v-if="filtrate != 'wishlist'" class="text-sm font-light">Wishlist</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'profile'}">
                <div @click="filter('profile')" class="flex flex-col items-center">
                    <i class="fas fa-house">NI</i>
                    <span v-if="filtrate != 'profile'" class="text-sm font-light">Profile</span>
                </div>
           </router-link> 
        </nav>
    </footer>
</template>

<script>
     import { ref } from 'vue';

     export default {
          setup(){

               const filtrate = ref('')

               const filter = (agent) => {
                    filtrate.value = agent
               }

               return { filter, filtrate }
          }
     }
</script>