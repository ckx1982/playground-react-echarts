import echarts, { EChartOption } from "echarts";

export const LineChartOptions: EChartOption<EChartOption.Series> = {
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
        type: "value"
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar",
            smooth: true
        },
    ],
}

export const DoughnutChartOptions: EChartOption<EChartOption.SeriesPie> = {
    legend: {
        orient: "vertical",
        right: 10,
        data: ["Name 1", "Name 2", "Name 3", "Name 4"]
    },
    dataset: [{
        source: [
           { ChartName: "Test", ChartValue: 100, ChartId: 1 },
           { ChartName: "Test 2", ChartValue: 200, ChartId: 2 }
        ]
    },{
        source: [
           { ChartName: "Test", ChartValue: 100, ChartId: 1 },
           { ChartName: "Test 2", ChartValue: 50, ChartId: 2 }
        ]
    }],
    series: [
        {
            type: "pie",
            radius: 60,
            center: ['25%', '30%'],
            datasetIndex: 0
        }
    ]
}