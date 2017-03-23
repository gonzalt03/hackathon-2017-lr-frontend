/**
 * Created by Coline on 22/03/2017.
 */

'use strict';


angular.module('frontProjectApp')
  .controller('DatasetCtrl', function ($scope) {

      $scope.afficherCommentaires = [
          {
              auteur: "Personne 1 ",
              commentaires: "Le site est génial ! ",
              graphe: "1"
          },
          {
              auteur: "Personne 2 ",
              commentaires: "Vous allez gagner ce hackathon ! ",
              graphe: "5"
          },
          {
              auteur: "Personne 3 ",
              commentaires: "Trop bien ! ",
              graphe: "3"
          }
      ];

      $('#exampleModal').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var recipient = button.data('whatever') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
          var modal = $(this)
          modal.find('.modal-title').text('Nouveau message')
      })

  });
