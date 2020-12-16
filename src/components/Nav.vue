<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item has-background-info has-text-white is-size-5 has-text-weight-semibold px-4">Fantasy API</router-link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarDropdown"
                @click="burgerOpen = !burgerOpen"
                :class="{'is-active': burgerOpen}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarDropdown" class="navbar-menu" :class="{'is-active': burgerOpen, 'navbar-menu-open': burgerOpen}">
            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">Plots</a>

                    <div class="navbar-dropdown">
                        <router-link v-for="slug in slugs" :key="slug.name" :to="'/plots/' + slug.slug" class="navbar-item">{{ slug.name }}</router-link>
                    </div>
                </div>
                <router-link v-for="route in routes" :key="route.name" :to="route.route" class="navbar-item">{{ route.name }}</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                routes: [{ name: 'Comparisons', route: '/comparisons'}, { name: 'Data', route: '/data'}],
                slugs: [
                    { name: 'Average PPW/PPL', slug: 'ppw-ppl' },
                    { name: 'Average Margins', slug: 'margins' },
                    { name: 'Best Player', slug: 'best-player' },
                    { name: 'Worst Player', slug: 'worst-player' }
                ],
                selected: this.$route,
                burgerOpen: false,
                plotsOpen: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar-menu-open {
        padding: 1rem;
        text-align: left;
        width: 100%;
    }
</style>