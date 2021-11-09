<template>
    <header class="site-header header-one">
        <nav
            class="
                navbar navbar-expand-lg navbar-light
                header-navigation
                sticky
            "
        >
            <div class="container clearfix">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="logo-box clearfix">
                    <a class="navbar-brand" href="index.html">
                        <img
                            src="@/assets/images/foxpay-logo.jpg"
                            class="main-logo"
                            alt="fox pay logo"
                        />
                    </a>
                    <button
                        class="menu-toggler"
                        data-target=".header-one .main-navigation"
                    >
                        <span class="fa fa-bars"></span>
                    </button>
                </div>
                <!-- /.logo-box -->
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="main-navigation">
                    <ul class="navigation-box one-page-scroll-menu">
                        <li class="current scrollToLink">
                            <a href="#home">Personal</a>
                            <ul class="sub-menu">
                                <li><a href="index.html">Personal item1</a></li>
                                <li>
                                    <a href="index-2.html">Personal item2</a>
                                </li>
                            </ul>
                            <!-- /.sub-menu -->
                        </li>
                        <li class="scrollToLink">
                            <a href="#home">Agent</a>
                            <ul class="sub-menu">
                                <li><a href="index.html">Agent item1</a></li>
                                <li><a href="index-2.html">Agent item2</a></li>
                            </ul>
                            <!-- /.sub-menu -->
                        </li>
                        <li class="scrollToLink">
                            <a href="#services">About</a>
                        </li>
                        <li class="scrollToLink">
                            <a href="#screens">Contact</a>
                        </li>
                        <!-- <li class="scrollToLink">
                            <a href="#pricing">Pricing</a>
                        </li> -->
                        <!-- <li class="scrollToLink">
                            <a href="#blog">Blog</a>
                            <ul class="sub-menu">
                                <li><a href="blog.html">Blog Style 01</a></li>
                                <li>
                                    <a href="blog-details.html">Blog Details</a>
                                </li>
                            </ul> -->
                        <!-- /.sub-menu -->
                        <!-- </li> -->
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
                <div class="right-side-box">
                    <a href="#" class="header-one__btn">Sign up</a>
                </div>
                <!-- /.right-side-box -->
            </div>
            <!-- /.container -->
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-brand {
    width: 98px;
}

.header-navigation ul.navigation-box > li > .sub-menu {
    border-radius: 5px;
}

.header-navigation ul.navigation-box > li > .sub-menu > li {
    padding: 5px;
}

.header-navigation ul.navigation-box > li > .sub-menu > li a {
    border-radius: 2px;
}

@media (max-width: 1199px) {
    .header-navigation .container .menu-toggler {
        margin: 28px 0;
    }

    .navbar-expand-lg .menu-toggler {
        font-size: 25px;
    }

    .site-header.header-one .header-navigation .container .right-side-box {
        top: 17px;
    }
}
</style>