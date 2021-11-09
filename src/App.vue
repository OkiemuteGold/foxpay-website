<template>
    <div id="app">
        <div class="page-wrapper">
            <Navbar />
            <transition name="page" mode="out-in">
                <router-view />
            </transition>

            <ScrollToTop />
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/header/Navbar";
import ScrollToTop from "@/components/extras/ScrollToTop";
import Footer from "@/components/footer/Footer";

export default {
    name: "App",
    components: {
        Navbar,
        ScrollToTop,
        Footer,
    },
};
</script>

<style>
*,
*::before,
*::after body {
    margin: 0;
    padding: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    letter-spacing: 0.25px;
    box-sizing: border-box;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.page-enter,
.page-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease;
}

.page-enter-to,
.page-leave {
    opacity: 1;
    transform: translateY(0);
}

::-moz-selection {
    background: var(--mainSecondaryColor);
    color: #fff;
}

::selection {
    background: var(--mainSecondaryColor);
    color: #fff;
}

a {
    text-decoration: none;
}

img {
    max-width: 100%;
    height: auto;
}

/* @import "~bootstrap/dist/css/bootstrap.css"; */
</style>
