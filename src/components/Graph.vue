<template>
  <div class="pt-4">
    <p class="font-bold text-2xl">
      10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity
    </p>
    <p>Last updated: {{ latestGraphData.name }}</p>
    <v-chart class="chart h-96" :option="option" />
  </div>
</template>
<script>
import graphData from "../assets/data.json";
import specialData from "../assets/special.json";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { useStore } from "vuex";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide, computed } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "Graph",
  components: {
    VChart,
  },
  setup() {
    const store = useStore();

    // provide(THEME_KEY, "dark");

    const latestGraphData = graphData[graphData.length - 1];

    const option = ref({
      // title: {
      //   text: "10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity",
      //   left: "center",
      // },
      tooltip: {
        trigger: "axis",
      },
      toolbox: {
        show: true,
        left: "center",
        showTitle: true,
        feature: {
          restore: {},
        },
      },
      xAxis: {
        type: "category",
        data: graphData
          .filter((element) =>
            typeof element.value === "string" ? false : true
          )
          .map((element) => element.name),
        name: "Date",
      },
      yAxis: {
        type: "value",
        axisPointer: {
          snap: true,
        },
        name: "Percent",
      },
      dataZoom: [
        {
          start: 0,
          end: graphData.length,
        },
      ],
      series: [
        {
          // data: graphData.map((item) => item.value),
          data: graphData
            .filter((element) =>
              typeof element.value === "string" ? false : true
            )
            .map((element) => element.value),
          type: "line",
          markArea: {
            itemStyle: {
              color: "rgba(210,210,210,1)",
            },
            data: specialData,
          },
        },
      ],
    });

    return {
      graphData,
      latestGraphData,
      option,
    };
  },
};
</script>
