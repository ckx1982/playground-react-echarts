import { useRef, useEffect } from "react";
import echarts, { EChartOption } from "echarts";
import * as line_ts from "./charts/line_ts";
import ChartValueDataObject from "./ChartValues";

export default function Chart() {
    const myChart = useRef(null!);

    useEffect(() => {
        const chart = echarts.init(myChart.current);
        chart.setOption(line_ts.DoughnutChartOptions);

        // handle click event and redirect to corresponding Baidu search page
        chart.on("click", "series", function (params: EChartOption.SeriesPie) {
            let a: (number[] | number[][] | ChartValueDataObject[]) = params.data;
            let b =  params.data as ChartValueDataObject;

            console.log(b.ChartId);
        });

    }, [line_ts.DoughnutChartOptions]);

    return (
        <div
            ref={myChart}
            style={{
                width: "100%",
                height: "100%"
            }}
        ></div>
    );
}
