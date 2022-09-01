/**
 *
 * 차트 레전드
 *
 */

AmCharts.get_getChartLegendValueText = function (a, b, $percent) {
    if ($percent == undefined) $percent = true;

    var cnt = 0;
    var colArr = [];

    if (a.index != undefined) {
        var total = 0;
        var itemTotal;
        var per = 0;

        if (a.data) {
            a.chart.graphs.filter(function ($it) {
                if (!$it.hidden) {
                    colArr.push($it.valueField);
                }
            });
            var totalSumArr = [];
            a.data.filter(function (c) {
                cnt += parseInt(c.dataContext[a.valueField]) ? parseInt(c.dataContext[a.valueField]) : 0;

                for (var i = 0; i < colArr.length; i++) {
                    var nowNa = colArr[i];
                    totalSumArr.push(c.dataContext[nowNa]);
                }
            });

            total = sumArr(totalSumArr);
            // cnt = cnt + " (" + getNum( ( ( cnt / total ) * 100 ).toFixed( 2 ) )+ "%)";
            cnt = cnt.lengthLimitComma(4) + " (" + getNum(((cnt / total) * 100).toFixed(1)) + "%)";

            if (a.hidden) {
                cnt = 0 + " (" + getNum(((cnt / total) * 100).toFixed(1)) + "%)";
            }
        } else if (!a.data) {
            a.graph.chart.graphs.filter(function ($it) {
                if (!$it.hidden) {
                    colArr.push($it.valueField);
                }
            });

            var totalSumArr = [];
            a.graph.chart.chartData.filter(function (c) {
                if (a.category == c.dataContext.category) {
                    cnt += parseInt(c.dataContext[a.graph.valueField]) ? parseInt(c.dataContext[a.graph.valueField]) : 0;

                    for (var i = 0; i < colArr.length; i++) {
                        var nowNa = colArr[i];
                        totalSumArr.push(c.dataContext[nowNa]);
                    }
                }
            });
            total = sumArr(totalSumArr);
            // cnt = cnt + " (" + getNum( ( ( cnt / total ) * 100 ).toFixed( 2 ) )+ "%)";
            cnt = cnt.lengthLimitComma(4) + " (" + getNum(((cnt / total) * 100).toFixed(1)) + "%)";

            if (a.graph.hidden) {
                cnt = 0 + " (" + getNum(((cnt / total) * 100).toFixed(1)) + "%)";
            }
        }
    } else {
    }

    cnt = " : " + cnt;
    return cnt;
};
