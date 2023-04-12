<template>
    <section>
        <searchbar/>
        <specials/>
        <item_display/>
    </section>
</template>


<script>

    import searchbar from '@/components/searchbar.vue';
    import specials from '@/components/specials.vue';
    import item_display from '@/components/item_display.vue';

    export default {
        components: {
            searchbar,
            specials,
            item_display
        },
        setup(){

        }
    }

</script>