/**
 * Created by Coline on 22/03/2017.
 */

'use strict';


angular.module('frontProjectApp')
  .controller('DatasetCtrl', function ($scope) {

    $scope.comments = [
      {
        author: "Jean Michel le stagiaire",
        comment: "Le site est génial ! "
      },
      {
        author: "Fred de Berlin",
        comment: "Vous allez gagner ce hackathon !"
      },
      {
        author: "Le jury",
        comment: "Trop bien !"
      }
    ];

    $scope.addComment = function (name, comment) {
      $scope.comments.push({
        author : name,
        comment : comment
      })
    }

  });
