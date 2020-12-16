<template>
    <section class="section">
        <div class="container is-max-desktop">
            <div class="columns">
                <div class="column is-two-thirds has-background-white m-2">
                    <div class="content p-5">
                        <h1 class="has-text-info">Using the ESPN Fantasy API</h1>
                        <h2 class="title">The Problem</h2>
                        <p>
                            For this project, I wanted to analyze my fantasy football league to see get a better sense of how each team performed over the course of the season. Even though ESPN's fantasy app lets you see the data, it doesn't help you to visualize it. Thankfully, they do have a public (but totally undocumented) API that I was able to pull the raw data from, analyze it, and produce some visualizations.
                        </p>
                        <p>
                            For those who don't know much about American football or fantasy sports leagues in general, the premise is fairly simple: Each player in the fantasy league drafts a "team" made up of players from an actual professional league - in this case, the NFL - and each week they select who they want to play in each of 9 positions. When those real-life players do something in their real-life game, they gain or lose fantasy points. For instance, if a quarterback passes to a receiver and he scores a touchdown, they both get 6 points - the actual value of a touchdown - plus some points per yard gained. Or if the quarterback throws an interception, he loses a few points.
                        </p>
                        <p>
                            Each week you're matched up with an opponent, and whoever gets the most total points from their team wins. After week 13 of the 17-week NFL season, the 4 teams with the best records make the playoffs. However, the week-to-week variability can be extreme - what they call "boom-bust" - so the question becomes: Who really deserved their wins, and who was just lucky? And who was good, but unlucky? Did you consistently beat teams when they were having above-average weeks, or did only win because you caught your opponents on their worst weeks?
                        </p>
                        <h2 class="title">The Solution</h2>
                        <p>
                            This sounds like a job for Pandas and Matplotlib. The actual JSON data returned by ESPN's API is a gigantic jumbled mess, so I used <a href="https://github.com/cwendt94/espn-api/wiki/Football-Intro" title="Christian Wendt's ESPN API Interface (Github)" target="_blank">a pre-built interface</a> to grab the data. I wrote some nested for loops to extract the scores for each player, for each of the 5 games, for each of the 13 weeks, and loaded it into a Pandas DataFrame. I then transformed that data in various ways to answer a few questions, like each player's average margin of victory and defeat, and how each player performed versus the league average each week.
                        </p>
                    </div>
                </div>
                <div class="column is-one-third has-background-white m-2">
                    <Sidebar :slug="none" />
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
        }}
</script>

<style lang="scss" scoped>

</style>