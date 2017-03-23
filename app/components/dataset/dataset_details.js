/**
 * Created by Coline on 22/03/2017.
 */

'use strict';

angular.module('frontProjectApp')
  .controller('DatasetDetailsCtrl', function ($scope, GlobalService, Request, $routeParams) {

    var id = $routeParams.id;

    Request.get(GlobalService.searchElement + "?limit=1&tag=parking")
      .then(function (data) {
        console.log(data.data[0]);
        $scope.dataset = data.data[0];
      }, function (error) {
        console.log(error);
      });

    Request.get(GlobalService.getInfoJeuData + "?url="+id)
      .then(function(data) {
        console.log(data.data);
        $scope.dataset.data = data.data;
        $scope.dataset.header = Object.keys(data.data[0]);
      }, function(error) {
        console.log(error);
      });


    $scope.myTitle = 'LINECHART';
    $scope.myData = sinAndCos();

    $scope.myTitle2 = 'PIECHART';

    $scope.myTitle3 = 'Répartition des élèves par classe';


    /*Random Data Generator */
    function sinAndCos() {
      var sin = [], sin2 = [],
        cos = [], cos2 = [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i / 10)});
        sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10});
        cos2.push({x: i, y: .6 * Math.cos(i / 11 + 3) + Math.random() / 11});
      }

      //Line chart data should be sent as an array of series objects.
      return [
        {
          values: sin,      //values - represents the array of {x,y} data points
          key: 'Sine Wave', //key  - the name of the series.
          color: '#ff7f0e'  //color - optional: choose your own line color.
        },
        {
          values: cos,
          key: 'Cosine Wave',
          color: '#2ca02c'
        },
        {
          values: sin2,
          key: 'Another sine wave',
          color: '#7777ff',
          area: true      //area - set to true if you want this line to turn into a filled area chart.
        },
        {
          values: cos2,
          key: 'Another cos wave',
          color: '#ff321b'
        }
      ];
    }

    nbEleveParClasseHisto();
    nbEleveParClassePie();

    function nbEleveParClasseHisto() {

      Request.get('http://localhost:3000/api-get-data?url=nb_enfants')
        .then(function (d) {
          var classe = [];

          var stat = [];
          var j = 0;

          for (var i = 0; i < d.data.length; i++) {
            if (!classe.includes(d.data[i].sco_section)) {
              classe.push(d.data[i].sco_section);
              stat[j] = {number: j, classe: d.data[i].sco_section, nb_eleves: 0};
              j++;
            }
          }
          for (var i = 0; i < d.data.length; i++) {
            var j = 0;
            var trouve = false;
            while (j < stat.length && !trouve) {
              if (stat[j].classe == d.data[i].sco_section) {
                trouve = true;
                stat[j].nb_eleves += parseInt(d.data[i].sco_nombre);
              }
              j++;
            }
            //stat[d.data[i].sco_section].nb_eleves += parseInt(d.data[i].sco_nombre);
            //stat[d.data[i].sco_section].nb_classe ++;

          }
          $scope.myData3 = [
            {
              "key": "Quantity",
              "bar": true,
              "values": stat
            }];
        }, function (error) {
          console.log(error);
        });

    }
    function nbEleveParClassePie() {

      Request.get('http://localhost:3000/api-get-data?url=nb_enfants')
        .then(function (d) {
          var classe = [];

          var stat = [];
          var j = 0;

          for (var i = 0; i < d.data.length; i++) {
            if (!classe.includes(d.data[i].sco_section)) {
              classe.push(d.data[i].sco_section);
              stat[j] = {key: d.data[i].sco_section, y: 0};
              j++;
            }
          }
          for (var i = 0; i < d.data.length; i++) {
            var j = 0;
            var trouve = false;
            while (j < stat.length && !trouve) {
              if (stat[j].key == d.data[i].sco_section) {
                trouve = true;
                stat[j].y += parseInt(d.data[i].sco_nombre);
              }
              j++;
            }
            //stat[d.data[i].sco_section].nb_eleves += parseInt(d.data[i].sco_nombre);
            //stat[d.data[i].sco_section].nb_classe ++;

          }
          $scope.myData2 = stat;
        }, function (error) {
          console.log(error);
        });

    }
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


      $('#exampleModal').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var recipient = button.data('whatever') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
          var modal = $(this)
          modal.find('.modal-title').text('Nouveau message')
      })
  });
