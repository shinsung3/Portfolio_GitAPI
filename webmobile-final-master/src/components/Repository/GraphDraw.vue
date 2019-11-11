<template>
  <div id="chartdiv" ref="chartdiv"></div>
</template>

<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/material.js"></script>
<script src="https://www.amcharts.com/lib/4/lang/de_DE.js"></script>
<script src="https://www.amcharts.com/lib/4/geodata/germanyLow.js"></script>
<script>
import Repository from "@/components/Repository/Repository";
import GitlabService from "@/services/GitlabService";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

var memberT = [];

export default {
  name: "GraphDraw",
  props: {
    limits: {
      type: Number,
      default: 4
    },
    loadMore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      repositories: [],
      members: [],
      commitlist: []
    };
  },
  components: {
    Repository
  },
  mounted() {
    this.getGitlabCommits("7556");
  },
  methods: {
    async getGitlabCommits(fullName) {
      const response = await GitlabService.getCommits(fullName);
      if (response.status !== 200) {
        return;
      }

      this.commitlist = response.data;
      this.members = [0, 0, 0, 0];
      for (let i = 0; i < this.commitlist.length; i++) {
        if (this.commitlist[i].author_name == "조신성") {
          this.members[0] += 1;
        } else if (this.commitlist[i].author_name == "nustar") {
          this.members[0] += 1;
        } else if (this.commitlist[i].author_name == "nnnangni") {
          this.members[1] += 1;
        } else if (this.commitlist[i].author_name == "Help_dog") {
          this.members[2] += 1;
        } else if (this.commitlist[i].author_name == "KHI") {
          this.members[3] += 1;
        }
      }
      memberT = this.members;
      graphT();
    }
  }
};

function graphT() {
  am4core.ready(function() {
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
    chart.data = [
      {
        name: "조신성",
        visits: memberT[0]
      },
      {
        name: "박나원",
        visits: memberT[1]
      },
      {
        name: "최훈석",
        visits: memberT[2]
      },
      {
        name: "김현일",
        visits: memberT[3]
      }
    ];

    prepareParetoData();

    function prepareParetoData() {
      let total = 0;

      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        total += value;
      }

      let sum = 0;
      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        sum += value;
        chart.data[i].pareto = (sum / total) * 100;
      }
    }

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "name";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    paretoValueAxis.renderer.opposite = true;
    paretoValueAxis.min = 0;
    paretoValueAxis.max = 100;
    paretoValueAxis.strictMinMax = true;
    paretoValueAxis.renderer.grid.template.disabled = true;
    paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
    paretoValueAxis.numberFormatter.numberFormat = "#'%'";
    paretoValueAxis.cursorTooltipEnabled = false;

    let paretoSeries = chart.series.push(new am4charts.LineSeries());
    paretoSeries.dataFields.valueY = "pareto";
    paretoSeries.dataFields.categoryX = "name";
    paretoSeries.yAxis = paretoValueAxis;
    paretoSeries.tooltipText = "누적: {valueY.formatNumber('#.0')}%[/]";
    paretoSeries.bullets.push(new am4charts.CircleBullet());
    paretoSeries.strokeWidth = 2;
    paretoSeries.stroke = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    paretoSeries.strokeOpacity = 0.5;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
  });
} // end am4core.ready()
</script>

<style>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
