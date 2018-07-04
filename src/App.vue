<template>
    <div id="app">
        <div id="content">
            <div class="inner">
                <router-view></router-view>
            </div>
        </div>

        <!-- Sidebar -->
        <div id="sidebar">
            <!-- Logo -->
            <h1 id="logo"><a href="/">QQ音乐前端博客</a></h1>

            <!-- Nav -->
            <nav id="nav">
                <ul>
                    <!-- current -->
                    <!-- <li v-for="item in columns" :key="item.Fname" :class="$route.params.id == item.Fid ? 'current' : ''">
                        <router-link v-bind:to="item.Fid == '/' ? '/' : `/column/${item.Fid}`">{{item.Fname}}</router-link>
                    </li> -->
                </ul>
            </nav>

            <!-- Search -->
            <!-- <section class="box search">
                <form method="post" action="#">
                    <input type="text" class="text" name="search" placeholder="Search" />
                </form>
            </section> -->

            <!-- Copyright -->
            <ul id="copyright">
                <li><router-link to="/123">&copy; QQMusic Web</router-link></li>
            </ul>
        </div>
    </div>
</template>