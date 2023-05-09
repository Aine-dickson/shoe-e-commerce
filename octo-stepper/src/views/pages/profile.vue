<template>
    <section class="p-2 text-blue-400">
        Profile loading..
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