/**
 * Created by Coline on 22/03/2017.
 */

'use strict';


angular.module('frontProjectApp')
  .controller('BuilderCtrl', function ($scope) {

    $scope.results = [
      {
        title: "SIGNALISATION LUMINEUSE – SUPPORT",
        frequence: "Quotidienne",
        location: "La Rochelle"
      },
      {
        title: "SIGNALISATION LUMINEUSE",
        frequence: "Quotidienne",
        location: "La Rochelle"
      },
      {
        title: "SIGNALISATION THOMAS – SUPPORT",
        frequence: "Quotidienne",
        location: "La Rochelle"
      }
    ];

  });
