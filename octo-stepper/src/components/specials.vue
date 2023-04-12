<template>
    <section>
        <div class="flex justify-between p-2">
            <span>Special offer</span>
            <span>See All</span>
        </div>
        <div>
            <specialItem/>
        </div>
    </section>
</template>

<script>

    import specialItem from './specialItem.vue';

    export default {
        components: {
            specialItem
        },
        setup(){

        }
    }

</script>