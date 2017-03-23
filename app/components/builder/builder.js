/**
 * Created by Coline on 22/03/2017.
 */

'use strict';

angular.module('frontProjectApp')
  .controller('BuilderCtrl', function ($scope, Request, GlobalService, leafletData) {

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
    };

    nbEleveParClasseHisto();
    nbEleveParClassePie();
    cartoParking();

    function cartoParking() {
        let cleAPI="RCX5bwVyOwITdtzj";
        let url="https://opendata.larochelle.fr/webservice/?service=getData&db=stationnement&table=disponibilite_parking&format=json&key="+cleAPI;
        Request.get(url)
          .then(function (d) {
            //console.log(d.data.opendata.answer.data);
            let tabParking=d.data.opendata.answer.data;
            console.log(tabParking);
            $scope.tabParking = tabParking;
        }, function (error) {
            console.log(error);
        });

    };

    function coordToGPS(coordLamb93) {
        // need proj4
        var projection = '+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
        pointTemp=proj4(projection).inverse(coordL93);
	    let coordGPS=[];
	    coordGPS[0]=pointTemp[1];
	    coordGPS[1]=pointTemp[0];
        return coordGPS;
    };

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

    };
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

    };

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
    angular.extend($scope, {
      defaults: {
        scrollWheelZoom: false
      },
      la_rochelle: {
        lat: 46.15,
        lng: -1.15,
        zoom: 14
      }
    });

    $scope.select = function () {
      leafletData.getMap().then(function (map) {
        console.log(map);
        var url = "ca_borne.kml";
        console.log(url);
        $scope.rectLayer = omnivore.kml(url).on('ready', function () {

          this.eachLayer(function (marker) {
              marker.setIcon(L.AwesomeMarkers.icon({
                prefix: 'fa',
                icon: 'car',
                markerColor: 'blue'
              }))
            }
          );
        })
          .addTo(map);
        console.log($scope.rectLayer)
      });

      leafletData.getMap().then(function (map) {
        console.log(map);
        var url = "tr_piste_cyclable.kml";
        console.log(url);
        $scope.rectLayer = omnivore.kml(url).on('ready', function () {

          this.eachLayer(function (marker) {
              marker.setIcon(L.AwesomeMarkers.icon({
                prefix: 'fa',
                icon: 'car',
                markerColor: 'blue'
              }))
            }
          );
        })
          .addTo(map);
        console.log($scope.rectLayer)
      });
    };


    $scope.select();

  });
