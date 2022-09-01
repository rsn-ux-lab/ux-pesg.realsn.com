AmCharts.get_chartBalloonValueTextAllLine = function ($a, $b, $c) {
    var percents;
    var array = [];
    var colArr = [];
    var sum = 0;

    $a.graph.valueAxis.chart.graphs.filter(function ($it) {
        if (!$it.hidden) {
            colArr.push($it.valueField);
        }
    });

    Object.keys($a.dataContext).filter(function (a) {
        for (var i = 0; i < colArr.length; i++) {
            var nowNa = colArr[i];

            if (Number(a.indexOf(nowNa)) >= 0) {
                array.push($a.dataContext[a]);
            }
        }
    });

    for (var i = 0; i < $a.graph.valueAxis.chart.graphs[0].data.length; i++) {
        sum += Number($a.graph.valueAxis.chart.graphs[0].data[i].dataContext.CNT);
    }

    if (isNaN(sum) == true) {
        percents = (Number($a.values.value) / sumArr(array)) * 100;
    } else {
        percents = (Number($a.values.value) / sum) * 100;
    }
    percents = getNum(percents).toFixed(1);
    return "<strong>" + $b.legendTextReal + "</strong> : <span style='font-size: 14px;'>" + Number($a.dataContext[$b["valueField"]]).lengthLimitComma(4) + "</span> <span style='color:#909090'>(" + percents + "%)</span>";

    /*
	var percents;
	var array = [];
	var colArr = [];

	$a.graph.valueAxis.chart.graphs.filter(function( $it ){
		if( !$it.hidden ){
			colArr.push( $it.valueField );
		}
	});

	Object.keys( $a.dataContext ).filter(function( a ){
		for( var i = 0; i < colArr.length; i ++ ){
			var nowNa = colArr[ i ];
			
			if( Number( a.indexOf( nowNa ) ) >= 0 ){
				array.push( $a.dataContext[ a ] );
			}
		}
	});

	percents = ( Number( $a.values.value ) / sumArr( array ) ) * 100;
	percents = ( getNum( percents ) ).toFixed(1);

	// return "<strong>"+$b.legendTextReal+"</strong> : <span style='font-size: 14px;'>"+$a.dataContext[ $b["valueField"] ]+"</span> <span style='color:#909090'>("+percents+"%)</span>";
	return "<strong>"+$b.legendTextReal+"</strong> : <span style='font-size: 14px;'>"+Number($a.dataContext[ $b["valueField"] ]).lengthLimitComma(4)+"</span> <span style='color:#909090'>("+percents+"%)</span>";	
*/
};
