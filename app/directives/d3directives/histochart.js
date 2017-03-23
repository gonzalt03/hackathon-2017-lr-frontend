/**
 * Created by quentinnicolle on 23/03/2017.
 */
angular.module('frontProjectApp')
  .directive('histochart', function(){
    return {
      restrict: 'E',
      scope: {
        mytitle: '=',
        data: '='
      },
      template: '<nvd3 options="myoptions" data="data"></nvd3>',
      link: function(scope){
        scope.myoptions = {
          chart: {
            type: 'historicalBarChart',
            height: 450,
            margin : {
              top: 20,
              right: 20,
              bottom: 65,
              left: 50
            },
            x: function(d){return d[0];},
            y: function(d){return d[1]/100000;},
            showValues: true,
            valueFormat: function(d){
              return d3.format(',.1f')(d);
            },
            duration: 100,
            xAxis: {
              axisLabel: 'X Axis',
              tickFormat: function(d) {
                return d3.time.format('%x')(new Date(d))
              },
              rotateLabels: 30,
              showMaxMin: false
            },
            yAxis: {
              axisLabel: 'Y Axis',
              axisLabelDistance: -10,
              tickFormat: function(d){
                return d3.format(',.1f')(d);
              }
            },
            tooltip: {
              keyFormatter: function(d) {
                return d3.time.format('%x')(new Date(d));
              }
            },
            zoom: {
              enabled: true,
              scaleExtent: [1, 10],
              useFixedDomain: false,
              useNiceScale: false,
              horizontalOff: false,
              verticalOff: true,
              unzoomEventType: 'dblclick.zoom'
            }
          },
          title: {
            enable: true,
            text: scope.mytitle
          }
        }
      }
    };
  });
