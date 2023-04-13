<template>
    <section class="app-container grid h-screen bg-gray-950 text-white">
        <div class="header h-full">
            <app_header/>
        </div>
        <div class="main h-full">
            <app_main/>
        </div>
        <div class="footer h-full">
            <app_footer/>
        </div>
    </section>
</template>

<script>

    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    import app_header from './includes/app_header.vue';
    import app_footer from './includes/app_footer.vue';
    import app_main from './includes/app_main.vue';

    export default {
        components: {
            app_footer,
            app_header,
            app_main
        },
        setup(){
            const store = useStore()
            const router = useRouter()

            onMounted(() => {
                router.push('/home')
            })
        }
    }

</script>

<style>
.app-container{
    grid-template-columns: 100%;
    grid-template-rows: 7% 83% 10%;
    grid-template-areas: "header"
    "main"
    "footer";
}
.header{
    grid-area: header;
}
.footer{
    grid-area: footer;
}
.main{
    grid-area: main;
}
</style>