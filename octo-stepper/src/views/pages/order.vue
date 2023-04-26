<template>
    <section>
        Order..
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