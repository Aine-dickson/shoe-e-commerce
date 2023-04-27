<template>
    <section>
        <contact_info/>
        <div>
            <div>
                <div>
                    <span>Amount</span>
                    <span>price</span>
                </div>
                <div>
                    <span>Shipping</span>
                    <span>-</span>
                </div>
            </div>
            <div>
                <span>Total Cost</span>
            </div>
        </div>
    </section>
</template>

<script>
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';

    import contact_info from './contact_info.vue';

    export default {
        components: {
            contact_info
        },
        setup(){
            const store = useStore()

            onMounted(() => {
                store.commit('pageUpdate', {status: false, title: 'Checkout', action: 'Payment'})
            })
        }
    }

</script>