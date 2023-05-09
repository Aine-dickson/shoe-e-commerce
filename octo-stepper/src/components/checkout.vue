<template>
    <section>
        <contact_info/>
        <div class="p-2">
            <div class="mb-5">
                <div class="flex justify-between">
                    <span class="text-gray-400">Amount</span>
                    <span>{{ price }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-400">Shipping</span>
                    <span>-</span>
                </div>
            </div>
            <hr>
            <div class="flex justify-between">
                <span>Total Cost</span>
                <span>{{ price }}</span>
            </div>
        </div>
    </section>
</template>

<script>
    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex';

    import contact_info from './contact_info.vue';

    export default {
        components: {
            contact_info
        },
        setup(){
            const store = useStore()

            const price = computed(() => store.state.cart.total)

            onMounted(() => {
                store.commit('pageUpdate', {status: false, title: 'Checkout', action: 'Payment'})
            })

            return { price }
        }
    }

</script>