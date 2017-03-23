/**
 * Created by quentinnicolle on 22/03/2017.
 */
angular.module('frontProjectApp')
  .directive('piechart', function(){
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
            type: 'pieChart',
            height: 500,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
              margin: {
                top: 5,
                right: 35,
                bottom: 5,
                left: 0
              }
            }
          },
          title: {
            enable:true,
            text:scope.mytitle
          }
        }
      }
    };
  });
