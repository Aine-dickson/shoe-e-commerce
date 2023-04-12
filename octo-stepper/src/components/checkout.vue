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

    import contact_info from './contact_info.vue';

    export default {
        components: {
            contact_info
        }
    }

</script>