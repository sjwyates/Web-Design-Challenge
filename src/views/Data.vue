<template>
  <section class="section">
    <div class="container is-widescreen has-background-white p-6">
      <h1 class="title has-text-info py-5">Data</h1>
      <div class="tabs">
        <ul>
          <li :class="{ 'is-active': average.active }">
            <a @click="switchActive" data-active="average">Averages</a>
          </li>
          <li :class="{ 'is-active': weekly.active }">
            <a @click="switchActive" data-active="weekly">Weekly</a>
          </li>
        </ul>
      </div>
      <div class="table-container">
        <table
          v-if="average.active"
          class="table is-striped has-text-centered py-5 is-size-7 is-size-6-desktop"
        >
          <thead>
            <tr>
              <th v-for="th in average.headers" :key="th">
                {{ th }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in average.players" :key="player.name">
              <td v-for="key in average.keys" :key="player.name + '-' + key">
                {{ player[key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-container">
        <table
          v-if="weekly.active"
          class="table is-striped has-text-centered py-5 is-size-7 is-size-6-desktop"
        >
          <thead>
            <tr>
              <th v-for="th in weekly.headers" :key="th">
                {{ th }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="week in weekly.weeks" :key="'week-' + week.week">
                <td>{{ week.week }}</td>
              <td
                v-for="(score, index) in week.scores"
                :key="weekly.headers[index] + '-wk-' + index + 1"
              >
                {{ score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      average: {
        active: true,
        headers: [
          "Player",
          "Wins",
          "Losses",
          "Average Points Per Win",
          "Average Points Per Loss",
          "Average Winning Margin",
          "Average Losing Margin",
        ],
        keys: ["name", "wins", "losses", "avgPPW", "avgPPL", "avgWM", "avgLM"],
        players: [
          {
            name: "Reber",
            avgWM: 38.1,
            avgLM: 27.5,
            wins: 2,
            losses: 11,
            avgPPW: 122.5,
            avgPPL: 115.1,
          },
          {
            name: "Heidi",
            avgWM: 20.8,
            avgLM: 21.6,
            wins: 8,
            losses: 5,
            avgPPW: 136.9,
            avgPPL: 108.9,
          },
          {
            name: "Craig",
            avgWM: 39.9,
            avgLM: 15.0,
            wins: 8,
            losses: 5,
            avgPPW: 142.5,
            avgPPL: 121.8,
          },
          {
            name: "Clint",
            avgWM: 33.7,
            avgLM: 17.3,
            wins: 11,
            losses: 2,
            avgPPW: 138.4,
            avgPPL: 149.3,
          },
          {
            name: "Ryan",
            avgWM: 32.6,
            avgLM: 25.2,
            wins: 7,
            losses: 6,
            avgPPW: 140.6,
            avgPPL: 107.8,
          },
          {
            name: "Stu",
            avgWM: 13.8,
            avgLM: 14.4,
            wins: 9,
            losses: 4,
            avgPPW: 149.6,
            avgPPL: 105.2,
          },
          {
            name: "Dreena",
            avgWM: 24.2,
            avgLM: 36.8,
            wins: 6,
            losses: 7,
            avgPPW: 132.6,
            avgPPL: 107.7,
          },
          {
            name: "Beckett",
            avgWM: 19.8,
            avgLM: 36.3,
            wins: 2,
            losses: 11,
            avgPPW: 120.9,
            avgPPL: 116.5,
          },
          {
            name: "Nick",
            avgWM: 21.0,
            avgLM: 28.9,
            wins: 4,
            losses: 9,
            avgPPW: 112.2,
            avgPPL: 87.5,
          },
          {
            name: "Louie",
            avgWM: 28.5,
            avgLM: 26.7,
            wins: 8,
            losses: 5,
            avgPPW: 134.8,
            avgPPL: 101.5,
          },
        ],
      },
      weekly: {
        active: false,
        headers: [
            "Week",
            "Reber",
            "Heidi",
            "Craig",
            "Clint",
            "Ryan",
            "Stu",
            "Dreena",
            "Beckett",
            "Nick",
            "Louie",
            "Average"
        ],
        weeks: [
          {
            week: 1,
            scores: [
              136.62,
              136.04,
              119.16,
              131.16,
              129.38,
              142.06,
              107.74,
              108.26,
              80.16,
              175.2,
              126.58,
            ],
          },
          {
            week: 2,
            scores: [
              99.4,
              160.38,
              134.84,
              143.0,
              156.6,
              124.74,
              130.7,
              121.58,
              64.76,
              126.06,
              126.21,
            ],
          },
          {
            week: 3,
            scores: [
              156.46,
              156.8,
              145.1,
              165.12,
              172.44,
              137.96,
              121.18,
              108.88,
              101.24,
              101.2,
              136.64,
            ],
          },
          {
            week: 4,
            scores: [
              114.1,
              88.5,
              154.62,
              137.18,
              91.32,
              178.8,
              152.28,
              149.16,
              92.44,
              114.8,
              127.32,
            ],
          },
          {
            week: 5,
            scores: [
              111.5,
              134.1,
              104.1,
              129.46,
              120.82,
              141.38,
              131.74,
              78.32,
              116.24,
              159.18,
              122.68,
            ],
          },
          {
            week: 6,
            scores: [
              122.54,
              107.3,
              151.32,
              117.1,
              96.38,
              130.88,
              105.94,
              85.34,
              83.42,
              105.62,
              110.58,
            ],
          },
          {
            week: 7,
            scores: [
              102.58,
              111.8,
              171.3,
              139.76,
              152.68,
              69.98,
              127.5,
              135.36,
              113.26,
              127.22,
              125.14,
            ],
          },
          {
            week: 8,
            scores: [
              96.02,
              147.34,
              93.48,
              155.64,
              88.02,
              172.82,
              111.82,
              124.26,
              67.04,
              108.64,
              116.51,
            ],
          },
          {
            week: 9,
            scores: [
              107.24,
              139.38,
              156.92,
              148.54,
              120.2,
              155.52,
              142.02,
              61.56,
              97.7,
              104.8,
              123.39,
            ],
          },
          {
            week: 10,
            scores: [
              118.88,
              108.88,
              121.4,
              111.6,
              126.16,
              88.26,
              108.78,
              156.54,
              98.06,
              94.32,
              113.29,
            ],
          },
          {
            week: 11,
            scores: [
              145.54,
              99.82,
              139.06,
              135.46,
              148.36,
              141.98,
              89.86,
              107.54,
              104.0,
              116.68,
              122.83,
            ],
          },
          {
            week: 12,
            scores: [
              87.64,
              144.28,
              148.0,
              182.62,
              108.08,
              157.42,
              92.94,
              154.8,
              76.5,
              81.0,
              123.33,
            ],
          },
          {
            week: 13,
            scores: [
              113.06,
              105.02,
              109.4,
              124.8,
              120.7,
              125.14,
              127.06,
              131.88,
              141.84,
              171.12,
              127.0,
            ],
          },
        ],
      },
    };
  },
  methods: {
    switchActive(e) {
      this.average.active = false;
      this.weekly.active = false;
      this[e.target.dataset.active].active = true;
    },
    isActive() {
      return "is-active";
    },
  },
};
</script>

<style scoped>
    table {
        margin: 0rem auto;
    }
</style>
