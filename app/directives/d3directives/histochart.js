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
            width:750,
            margin : {
              top: 20,
              right: 20,
              bottom: 65,
              left: 50
            },
            x: function(d){
              return d.number;},
            y: function(d){
              return d.nb_eleves;},
            showValues: true,
            duration: 100,
            xAxis: {
              axisLabel: 'Classes',
              tickFormat: function(d) {
                return scope.data[0].values[d].classe;

              },
              rotateLabels: 10,
              showMaxMin: true
            },
            yAxis: {
              axisLabel: "Nombre d'élève",
              axisLabelDistance: -10,
              tickFormat: function(d){
                return d;
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
