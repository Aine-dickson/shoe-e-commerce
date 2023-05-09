<template>
    <section class="p-2 text-orange-500">
        Wishlist page under construction, Check back later, thanks!
    </section>
</template>

<script>
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const store = useStore()

            onMounted(() => {
                store.commit('pageUpdate', {status: true})
            })
        }
    }
</script>