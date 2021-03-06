'use strict';
$(document).ready(function() {
    floatchart()
    $(window).on('resize', function() {
        floatchart();
    });
    $('#mobile-collapse').on('click', function() {
        setTimeout(function() {
            floatchart();
        }, 700);
    });

    // allocation map start
    var map = AmCharts.makeChart("allocation-map", {
        "type": "map",
        "theme": "light",
        "colorSteps": 10,
        "dataProvider": {
            "map": "usaLow",
            "areas": [{
                "id": "US-AL",
                "value": 4447100
            }, {
                "id": "US-AK",
                "value": 626932
            }, {
                "id": "US-AZ",
                "value": 5130632
            }, {
                "id": "US-AR",
                "value": 2673400
            }, {
                "id": "US-CA",
                "value": 33871648
            }, {
                "id": "US-CO",
                "value": 4301261
            }, {
                "id": "US-CT",
                "value": 3405565
            }, {
                "id": "US-DE",
                "value": 783600
            }, {
                "id": "US-FL",
                "value": 15982378
            }, {
                "id": "US-GA",
                "value": 8186453
            }, {
                "id": "US-HI",
                "value": 1211537
            }, {
                "id": "US-ID",
                "value": 1293953
            }, {
                "id": "US-IL",
                "value": 12419293
            }, {
                "id": "US-IN",
                "value": 6080485
            }, {
                "id": "US-IA",
                "value": 2926324
            }, {
                "id": "US-KS",
                "value": 2688418
            }, {
                "id": "US-KY",
                "value": 4041769
            }, {
                "id": "US-LA",
                "value": 4468976
            }, {
                "id": "US-ME",
                "value": 1274923
            }, {
                "id": "US-MD",
                "value": 5296486
            }, {
                "id": "US-MA",
                "value": 6349097
            }, {
                "id": "US-MI",
                "value": 9938444
            }, {
                "id": "US-MN",
                "value": 4919479
            }, {
                "id": "US-MS",
                "value": 2844658
            }, {
                "id": "US-MO",
                "value": 5595211
            }, {
                "id": "US-MT",
                "value": 902195
            }, {
                "id": "US-NE",
                "value": 1711263
            }, {
                "id": "US-NV",
                "value": 1998257
            }, {
                "id": "US-NH",
                "value": 1235786
            }, {
                "id": "US-NJ",
                "value": 8414350
            }, {
                "id": "US-NM",
                "value": 1819046
            }, {
                "id": "US-NY",
                "value": 18976457
            }, {
                "id": "US-NC",
                "value": 8049313
            }, {
                "id": "US-ND",
                "value": 642200
            }, {
                "id": "US-OH",
                "value": 11353140
            }, {
                "id": "US-OK",
                "value": 3450654
            }, {
                "id": "US-OR",
                "value": 3421399
            }, {
                "id": "US-PA",
                "value": 12281054
            }, {
                "id": "US-RI",
                "value": 1048319
            }, {
                "id": "US-SC",
                "value": 4012012
            }, {
                "id": "US-SD",
                "value": 754844
            }, {
                "id": "US-TN",
                "value": 5689283
            }, {
                "id": "US-TX",
                "value": 20851820
            }, {
                "id": "US-UT",
                "value": 2233169
            }, {
                "id": "US-VT",
                "value": 608827
            }, {
                "id": "US-VA",
                "value": 7078515
            }, {
                "id": "US-WA",
                "value": 5894121
            }, {
                "id": "US-WV",
                "value": 1808344
            }, {
                "id": "US-WI",
                "value": 5363675
            }, {
                "id": "US-WY",
                "value": 493782
            }]
        },

        "areasSettings": {
            "autoZoom": true
        },
        "export": {
            "enabled": true
        }

    });
    var chart = AmCharts.makeChart("allocation-chart", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "labelRadius": 0,
        "pullOutRadius": 0,
        "labelText": "",
        "colorField": "color",
        "legend": {
            // "enabled":false,
        },
        "innerRadius": "70%",
        "dataProvider": [{
            "country": "Lithuania",
            "litres": 501.9,
            "color": "#85C5E3"
        }, {
            "country": "Czech Republic",
            "litres": 301.9,
            "color": "#6AA3C4"
        }, {
            "country": "Ireland",
            "litres": 201.1,
            "color": "#6097B9"
        }, {
            "country": "india",
            "litres": 220.1,
            "color": "#4E81A4"
        }],
        "valueField": "litres",
    });
    // allocation map end
});

function floatchart() {
    $(function() {
        //flot options
        var options = {
            legend: {
                show: false
            },
            series: {
                label: "",
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: "x : %x | y : %y"
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 10,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };
        var options_nospace = {
            legend: {
                show: false
            },
            series: {
                label: "",
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: "x : %x | y : %y"
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };

        //  sale chart chart
        $.plot($("#sale-chart1"), [{
            data: [
                [0, 18],
                [10, 20],
                [30, 10],
                [40, 13],
                [50, 22],
                [60, 11],
                [75, 14],
                [80, 7],
                [95, 9],
                [100, 9],
                [110, 13],
                [120, 11],
                [140, 5],
                [150, 9],
                [160, 11],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#sale-chart2"), [{
            data: [
                [0, 18],
                [10, 22],
                [30, 11],
                [40, 14],
                [50, 20],
                [60, 10],
                [75, 13],
                [80, 7],
                [95, 9],
                [100, 5],
                [110, 9],
                [120, 11],
                [140, 9],
                [150, 13],
                [160, 11],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#sale-chart3"), [{
            data: [
                [0, 18],
                [10, 9],
                [30, 13],
                [40, 11],
                [50, 5],
                [60, 9],
                [75, 14],
                [80, 7],
                [95, 9],
                [100, 20],
                [110, 10],
                [120, 13],
                [140, 22],
                [150, 11],
                [160, 11],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: false,
            }
        }], options);

        //  Web chart chart
        $.plot($("#web-chart1"), [{
            data: [
                [0, 15],
                [1, 10],
                [2, 20],
                [3, 10],
                [4, 27],
                [5, 15],
                [6, 20],
                [7, 10],
                [8, 20],
                [9, 16],
                [10, 22],
                [11, 10],
                [12, 20],
                [13, 10],
                [14, 27],
                [15, 20],
                [16, 10],
                [17, 15],
                [18, 12],
                [19, 27],
                [20, 20],
                [21, 15],
                [22, 25],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 0,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: true,
            }
        }], options_nospace);
        $.plot($("#web-chart2"), [{
            data: [
                [0, 20],
                [1, 25],
                [2, 10],
                [3, 27],
                [4, 10],
                [5, 20],
                [6, 15],
                [7, 20],
                [8, 10],
                [9, 12],
                [10, 26],
                [11, 20],
                [12, 10],
                [13, 27],
                [14, 10],
                [15, 10],
                [16, 20],
                [17, 12],
                [18, 15],
                [19, 20],
                [20, 10],
                [21, 25],
                [22, 10],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 0,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: true,
            }
        }], options_nospace);

        //  Statistic Footer
        $.plot($("#stat-fot-1"), [{
            data: [
                [0, 2],
                [1, 20],
                [2, 5],
                [3, 30],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2,
                fillColor: 'rgba(256,256,256,0.2)'
            },
            points: {
                show: true,
                radius: 0,
                fill: true,
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#stat-fot-2"), [{
            data: [
                [0, 10],
                [1, 2],
                [2, 20],
                [3, 3],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2,
                fillColor: 'rgba(256,256,256,0.2)'
            },
            points: {
                show: true,
                radius: 0,
                fill: true,
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#stat-fot-3"), [{
            data: [
                [0, 2],
                [1, 20],
                [2, 5],
                [3, 30],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2,
                fillColor: 'rgba(256,256,256,0.2)'
            },
            points: {
                show: true,
                radius: 0,
                fill: true,
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#stat-fot-4"), [{
            data: [
                [0, 10],
                [1, 2],
                [2, 20],
                [3, 3],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2,
                fillColor: 'rgba(256,256,256,0.2)'
            },
            points: {
                show: true,
                radius: 0,
                fill: true,
            },
            curvedLines: {
                apply: false,
            }
        }], options);
    });
}
