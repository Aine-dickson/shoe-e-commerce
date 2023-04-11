<template>
    <section class="app-container grid h-screen">
        <div class="header h-full bg-blue-500">
            <app_header/>
        </div>
        <div class="main h-full bg-green-500">
            <app_main/>
        </div>
        <div class="footer h-full bg-blue-500">
            <app_footer/>
        </div>
    </section>
</template>

<script>

    import app_header from './includes/app_header.vue';
    import app_footer from './includes/app_footer.vue';
    import app_main from './includes/app_main.vue';

    export default {
        components: {
            app_footer,
            app_header,
            app_main
        }
    }

</script>

<style>
.app-container{
    grid-template-columns: 100%;
    grid-template-rows: 10% 80% 10%;
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