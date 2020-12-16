<template>
    <section class="section">
        <div class="container is-max-desktop">
            <div class="columns">
                <div class="column is-two-thirds has-background-white m-2">
                    <div class="content p-5">
                        <h1 class="has-text-info">{{ selected.name }}</h1>
                        <img :src="getImgUrl(selected.img)" :alt="selected.name">
                        <p>{{ selected.text }}</p>
                    </div>
                </div>
                <div class="column is-one-third has-background-white m-2">
                    <Sidebar :slug="slug" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Sidebar from '../components/Sidebar.vue';
    export default {
        components: {
            Sidebar
        },
        data() {
            return {
                visualizations: [
                    { name: 'Average PPW/PPL', slug: 'ppw-ppl', img: 'avg_ppw_ppl.png', text: "As you can see, when I won, I tended to run up the score, but my 4 losses came in some pretty bad off-weeks. Clint had the highest average points per loss, so while he generally faced sub-par opposition, his 2 losses were still very respectable (143-160 and 156-173). In contrast, Louie didn't put up much of a fight in his 5 losses, with an average score of around 100.And then there's Nick, who only needed to score an average of 112 to secure his 4 wins." },
                    { name: 'Average Margins', slug: 'margins', img: 'avg_margins.png', text: "One thing that really stands out to me about this chart is my margins: on average, I had both the smallest winning and losing margins. That's not a coincidence: I also had both the 2nd-highest points for and against in the league. So while I did pretty well overall despite my insistence on only picking joke quarterbacks, my opponents usually gave me a run for my money when I won, and didn't need to do that well when I lost. Of the rest of the league, Craig tended to stomp when he won, but usually only lost narrowly, while Beckett was the closest to doing the opposite." },
                    { name: 'Best Player', slug: 'best-player', img: 'clint_scores.png', text: "The best, most consistent player was Clint. Not only did he have the highest overall score (1821 points, an average of 140 points per game) but he also managed to be at or above the league average every single week. Not that he needed to be: Apart from weeks 2, 7 and 8, his opponents were below average, usually by double-digits, and his total points against was the 2nd-lowest in the league. Still, that doesn't change the fact that Clint is a formidable powerhouse heading into the playoffs." },
                    { name: 'Worst Player', slug: 'worst-player', img: 'nick_scores.png', text: "The worst player by far was Nick. His total of 1234 points was a full 277 points below 2nd-to-last place, and he was below average by double-digits almost every week, with the notable exception of week 13 when he managed to amass a highly-respectable 142 points. Yet somehow, he managed to win 4 times - twice as many wins as the 2 next-worst teams - by virtue of his opponenents consistently having bad weeks against him." },
                ],
            }
        },
        computed: {
            slug() {
                return this.$route.params.slug
            },
            selected() {
                return this.visualizations.find(vis => vis.slug == this.slug)
            }
        },
        methods: {
            getImgUrl(img) {
                return require('../assets/images/plots/' + img)
            }
        }
    }
</script>

<style scoped>

</style>