/**
 * Created by Coline on 22/03/2017.
 */

'use strict';

angular.module('frontProjectApp')
  .controller('BuilderCtrl', function ($scope, Request, GlobalService) {

    $scope.myTitle = 'LINECHART';
    $scope.myData = sinAndCos();

    $scope.myTitle2 = 'PIECHART';
    $scope.myData2 = [
      {
        key: "One",
        y: 5
      },
      {
        key: "Two",
        y: 2
      },
      {
        key: "Three",
        y: 9
      },
      {
        key: "Four",
        y: 7
      },
      {
        key: "Five",
        y: 4
      },
      {
        key: "Six",
        y: 3
      },
      {
        key: "Seven",
        y: .5
      }
    ];

    $scope.myTitle3 = 'Budget Prévisionnel 2017';
    $scope.myData3 = [
      {
        "key" : "Quantity" ,
        "bar": true,
        "values" : bp2017()
        //"values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
      }];

    /*Random Data Generator */
    function sinAndCos() {
      var sin = [],sin2 = [],
        cos = [], cos2= [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i/10)});
        sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
        cos2.push({x: i, y: .6 * Math.cos(i/11+ 3) + Math.random() / 11});
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

    function bp2017(){
        Request.get('http://localhost:3000/api-get-data?url=nb_enfants')
          .then(function(d) {
            console.log(d);
            var classe = [];

            var stat = [];
            var j = 0;

            for(var i = 0 ; i < d.data.length; i++){
              if(!classe.includes(d.data[i].sco_section)){
                classe.push(d.data[i].sco_section);
                stat[j] = { classe: d.data[i].sco_section, nb_eleves: 0};
                j++;
              }
            }
            for(var i = 0; i < d.data.length; i++){
              var j = 0;
              var trouve = false;
              while( j < stat.length && !trouve){
                if(stat[j].classe == d.data[i].sco_section){
                  trouve = true;
                  stat[j].nb_eleves+= parseInt(d.data[i].sco_nombre);
                }
                j++;
              }

              //stat[d.data[i].sco_section].nb_eleves += parseInt(d.data[i].sco_nombre);
              //stat[d.data[i].sco_section].nb_classe ++;

            }
            console.log(stat);

            return stat;


          }, function(error) {
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

  });
