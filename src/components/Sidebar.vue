<template>
    <div class="content px-3">
        <h2 class="has-text-info py-5">Visualizations</h2>
        <router-link v-for="figure in figures"
            :key="figure.slug"
            :to="'/plots/' + figure.slug"
            :title="figure.name"
            class="box my-2">
            <figure>
                <figname class="has-text-info">{{ figure.name }}</figname>
                <img :src="getImgUrl(figure.img)" :alt="figure.name">
            </figure>
        </router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                figures: [
                    { name: 'Average PPW/PPL', slug: 'ppw-ppl', img: 'avg_ppw_ppl.png' },
                    { name: 'Average Margins', slug: 'margins', img: 'avg_margins.png' },
                    { name: 'Best Player', slug: 'best-player', img: 'clint_scores.png' },
                    { name: 'Worst Player', slug: 'worst-player', img: 'nick_scores.png' },
                ],
                selected: this.slug
            }
        },
        props: ['slug'],
        methods: {
            getImgUrl(img) {
                return require('../assets/images/plots/' + img)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>