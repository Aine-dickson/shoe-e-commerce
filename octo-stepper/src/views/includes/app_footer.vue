<template>
    <footer v-if="page"  class="bg-slate-800 h-full">
        <nav class="flex justify-around items-center h-full">
           <router-link :to="{name: 'home'}">
                <div ref="home" @click="filter('home')" class="flex flex-col items-center">
                    <i class="fas fa-house"></i>
                    <span v-if="filtrate != 'home'" class="text-sm font-light">Home</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'cart'}">
                <div @click="filter('cart')" class="flex flex-col items-center">
                    <i class="fas fa-cart-shopping"></i>
                    <span v-if="filtrate != 'cart'" class="text-sm font-light">Cart</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'order'}">
                <div @click="filter('orders')" class="flex flex-col items-center">
                    <i class="fas fa-file-invoice"></i>
                    <span v-if="filtrate != 'order'" class="text-sm font-light">Orders</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'wishlist'}">
                <div @click="filter('wishlist')" class="flex flex-col items-center">
                    <i class="fas fa-heart"></i>
                    <span v-if="filtrate != 'wishlist'" class="text-sm font-light">Wishlist</span>
                </div>
           </router-link> 
           <router-link :to="{name: 'profile'}">
                <div @click="filter('profile')" class="flex flex-col items-center">
                    <i class="fas fa-user"></i>
                    <span v-if="filtrate != 'profile'" class="text-sm font-light">Profile</span>
                </div>
           </router-link> 
        </nav>
     </footer>
     <div v-else class="flex justify-between items-center px-2">
       <div class="flex flex-col">
            <span class="text-gray-500">Total Price</span>
            <span class="font-bold">$ {{ price }}</span>
       </div>
       <div @click="navigate" class="bg-orange-700 p-2 rounded-[3rem] items-center justify-center space-x-3">
            <span>{{ action }}</span>
            <i v-if="preview" class="fas fa-cart"></i>
            <i v-else class="fas fa-arrow-right"></i>
       </div>
     </div>
</template>

<script>
     import { ref, computed } from 'vue';
     import { useStore } from 'vuex';
     import { useRouter } from 'vue-router';

     export default {
          setup(){
               const store = useStore()
               const router = useRouter()

               const preview = computed(() => {
                    if(store.state.page.title == 'preview'){
                         return true
                    }
               })
               const page = computed(() => store.state.page.status)
               const price = computed(() => store.state.cart.total)
               const action = computed(() => store.state.page.action)
               const filtrate = ref('')
               const home = ref()
               const item = computed(() => store.state.preview)

               const filter = () => {
                    router.afterEach(() => {
                         filtrate.value = router.currentRoute.value.name
                    })
               }
               const loader = () => {
                    home.value.click()
               }
               const navigate = () => {
                    let stage = router.currentRoute.value.name
                    if(stage == 'preview'){
                         store.commit('cartUpdate', item.value)
                         router.push({name: 'cart'})
                    } else if(stage == 'cart'){
                         router.push({name: 'checkout'})
                    } else {
                         console.log('made payment')
                    }
               }

               return { filter, loader, navigate, home, filtrate, page, preview, action, price }
          }
     }
</script>