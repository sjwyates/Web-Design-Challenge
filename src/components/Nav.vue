<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item has-background-info has-text-white is-size-5 has-text-weight-semibold px-4">Fantasy API</router-link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            </div>

            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">Plots</a>

                    <div class="navbar-dropdown">
                        <router-link to="/plots/margins" class="navbar-item">Average Margins</router-link>
                        <router-link to="/plots/my-scores" class="navbar-item">My Scores</router-link>
                        <router-link to="/plots/my-opponents-scores" class="navbar-item">My Opponent's Scores</router-link>
                    </div>
                </div>
            </div>
            <router-link to="/comparisons" class="navbar-item">Comparisons</router-link>
            <router-link to="/data" class="navbar-item">Data</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>