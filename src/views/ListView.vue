<template>
    <div id="list">
        <article class="box post post-excerpt" v-for="item in articles" :key="item.title">
            <header>
                <h2><router-link v-bind:to="'/data'">{{item.Ftitle}}</router-link></h2>
                <p>{{item.Fauthor}} {{item.Ftime  }}</p>
            </header>
            
            <img class="image featured" v-if="item.Fimg" :src="item.Fimg" alt="" />
            <p v-if="item.Fdesc">{{item.Fdesc}}</p>
        </article>
    </div>
</template>

<script>
export default {
    computed: {
        articles () {
            return this.$store.state.articles;
        }
    },
    asyncData ({ store, route: { params: { id } } }) {
        return store.dispatch('FETCH_ARTICLE', { ids: [id] })
    },
}
</script>

<style lang="stylus" scoped>

</style>