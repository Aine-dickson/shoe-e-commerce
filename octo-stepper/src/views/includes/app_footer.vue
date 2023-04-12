<template>
    <footer>
        <nav class="flex justify-between">
           <router-link :to="{name: 'home'}">
                <i class="fas fa-house"></i>
                <span>Home</span>
           </router-link> 
           <router-link :to="{name: 'order'}">
                <i class="fas fa-house"></i>
                <span>Orders</span>
           </router-link> 
           <router-link :to="{name: 'cart'}">
                <i class="fas fa-house"></i>
                <span>Cart</span>
           </router-link> 
           <router-link :to="{name: 'wishlist'}">
                <i class="fas fa-house"></i>
                <span>Wishlist</span>
           </router-link> 
           <router-link :to="{name: 'profile'}">
                <i class="fas fa-house"></i>
                <span>Profile</span>
           </router-link> 
        </nav>
    </footer>
</template>