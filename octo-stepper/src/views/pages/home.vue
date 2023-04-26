<template>
    <section class="h-full">
        <searchbar/>
        <div v-if="!searching">
            <specials/>
            <item_display/>
        </div>
        <div v-else>
            <search_results/>
        </div>
    </section>
</template>


<script>
    import { useStore } from 'vuex';
    import { computed, onMounted } from 'vue';

    import searchbar from '@/components/searchbar.vue';
    import specials from '@/components/specials.vue';
    import item_display from '@/components/item_display.vue';
    import search_results from '@/components/search_results.vue';

    export default {
        components: {
            searchbar,
            specials,
            search_results,
            item_display
        },
        setup(){
            const store = useStore()

            const searching = computed(() => store.state.searching)

            onMounted(() => {
                store.commit('pageUpdate', {status: true})
            })

            return { searching }
        }
    }

</script>