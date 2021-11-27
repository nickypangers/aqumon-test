<template>
  <div class="relative p-3 min-w-min">
    <button
      class="bg-blue-200 px-4 py-2 rounded-xl"
      @click="showDownloadMenu = !showDownloadMenu"
    >
      Download
    </button>
    <div class="absolute right-0 left-0 px-3" v-if="showDownloadMenu">
      <ul>
        <li>
          <a :href="excelLink" target="_blank" rel="noopener noreferrer">
            <button @click="closeMenu">Excel</button>
          </a>
        </li>
        <li>
          <a :href="csvLink" target="_blank" rel="noopener noreferrer">
            <button @click="closeMenu">CSV</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "DownloadButton",
  setup() {
    const showDownloadMenu = ref(false);

    const excelLink =
      "https://fred.stlouisfed.org/graph/fredgraph.xls?bgcolor=%23e1e9f0&chart_type=line&drp=0&fo=open%20sans&graph_bgcolor=%23ffffff&height=450&mode=fred&recession_bars=on&txtcolor=%23444444&ts=12&tts=12&width=1168&nt=0&thu=0&trc=0&show_legend=yes&show_axis_titles=yes&show_tooltip=yes&id=T10Y2Y&scale=left&cosd=2016-11-26&coed=2021-11-26&line_color=%234572a7&link_values=false&line_style=solid&mark_type=none&mw=3&lw=2&ost=-99999&oet=99999&mma=0&fml=a&fq=Daily&fam=avg&fgst=lin&fgsnd=2020-02-01&line_index=1&transformation=lin&vintage_date=2021-11-27&revision_date=2021-11-27&nd=1976-06-01";

    const csvLink =
      "https://fred.stlouisfed.org/graph/fredgraph.csv?bgcolor=%23e1e9f0&chart_type=line&drp=0&fo=open%20sans&graph_bgcolor=%23ffffff&height=450&mode=fred&recession_bars=on&txtcolor=%23444444&ts=12&tts=12&width=1168&nt=0&thu=0&trc=0&show_legend=yes&show_axis_titles=yes&show_tooltip=yes&id=T10Y2Y&scale=left&cosd=2016-11-26&coed=2021-11-26&line_color=%234572a7&link_values=false&line_style=solid&mark_type=none&mw=3&lw=2&ost=-99999&oet=99999&mma=0&fml=a&fq=Daily&fam=avg&fgst=lin&fgsnd=2020-02-01&line_index=1&transformation=lin&vintage_date=2021-11-27&revision_date=2021-11-27&nd=1976-06-01";

    const closeMenu = () => {
      showDownloadMenu.value = false;
    };

    return {
      showDownloadMenu,
      excelLink,
      csvLink,
      closeMenu,
    };
  },
};
</script>
<style scoped>
ul > li {
  @apply p-2 border w-full;
}
</style>
