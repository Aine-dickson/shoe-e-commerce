<template>
    <section>
        <div v-if="searching">
            <searchbar/>
            <specials/>
            <item_display/>
        </div>
        <div v-else>
            <search_results/>
        </div>
    </section>
</template>


<script>

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

        }
    }

</script>