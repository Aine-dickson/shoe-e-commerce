<template>
    <section>
        <div>
            <div class="p-1 rounded-full space-x-1">
                <i class="fas fa-cat">NI</i>
                <span>Name</span>
            </div>
        </div>
        <div>
            <Item/>
        </div>
    </section>
</template>

<script>

    import Item from './item.vue';
import item from './item.vue';

    export default {
    components: [
        item
    ],
    setup() {
    },
    components: { Item }
}

</script>