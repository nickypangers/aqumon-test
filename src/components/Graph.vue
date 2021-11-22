<template>
  <div>
    <pre>
    {{ graphData[0] }}
    </pre>
    <v-chart class="chart" :option="option" />
  </div>
</template>
<script>
import data from "../assets/data.json";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "Graph",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  setup() {
    const graphData = data;
    const option = ref({
      title: {
        text: "10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        data: graphData.map((item) => item.name),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: graphData.map((item) => item.value),
          type: "line",
        },
      ],
    });

    return {
      graphData,
      option,
    };
  },
};
</script>
<style scoped>
.chart {
  height: 800px;
}
</style>
