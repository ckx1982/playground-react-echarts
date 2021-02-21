import echarts, { EChartOption } from "echarts";

export default interface ChartValueDataObject extends EChartOption.SeriesPie.DataObject {
    ChartName?: string;
    ChartValue?: number;
    ChartId?: number;
}