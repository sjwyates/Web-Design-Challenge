<template>
    <section class="section">
        <div class="container is-max-desktop has-background-white">
            <h1 class="title has-text-info p-5">Player Data</h1>
            <div class="columns">
                <div class="column">
                    <img v-for="name in names.slice(0, 5)"
                            :key="name"
                            :src="getImgUrl(name)"
                            :alt="getCaption(name)"
                            class="p-2"
                    />
                </div>
                <div class="column">
                    <img v-for="name in names.slice(5, 10)"
                            :key="name"
                            :src="getImgUrl(name)"
                            :alt="getCaption(name)"
                            class="p-2"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                names: ['beckett', 'clint', 'craig', 'dreena', 'heidi', 'louie', 'nick', 'reber', 'ryan', 'stu']
            }
        },
        methods: {
            getImgUrl(name) {
                return require('../assets/images/plots/' + name + '_scores.png')
            },
            getCaption(name) {
                return name.toUpperCase() + ' scores'
            }
        }
    }
</script>

<style scoped>

</style>