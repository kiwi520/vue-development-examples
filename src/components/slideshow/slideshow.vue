<template>
    <div>
        <div class="swiper-container  slideshow-component">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <slot></slot>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
<!--            <div class="slideshow-scrollbar"></div>-->
        </div>
    </div>
</template>

<script>
    // import Swiper styles
    import 'swiper/swiper-bundle.css';
    import Swiper, { Navigation, Pagination } from 'swiper';
    Swiper.use([Navigation, Pagination]);
    export default {
        mounted(){
            new Swiper('.slideshow-component', {
                // Optional parameters
                // direction: 'vertical',
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.sswiper-scrollbar',
                },
            })
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 600px;
        height: 300px;
    }
</style>
