<template>
    <section>
        <div v-if="items.length">
            <cart_item v-for="(item, index) in items" :key="index" :name="item.name" :image="item.name" :color="item.color" :size="item.size" :price="item.price" :quantity="item.qty"/>
        </div>
        <div v-else>
            <span class="text-red-500 p-3">No item in cart yet!</span>
        </div>
    </section>
</template>

<script>
    import { ref, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';

    import cart_item from '@/components/cart_item.vue';

    export default{
        components: {
            cart_item
        },
        setup() {
            const store = useStore()

            const price = ref(0)
            const items = computed(() => store.state.cart.items)
            const priceCalc = () => { items.value.forEach(item => {
                    price.value += item.price
                })
            };

            onMounted(() => {
                store.commit('pageUpdate', {status: false, title: 'My Cart', action: 'Checkout'})
                priceCalc()
                store.commit('priceSum', price)
            })

            return { items }
        }
    }
</script>