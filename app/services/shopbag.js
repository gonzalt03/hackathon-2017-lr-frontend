angular.module('frontProjectApp')
  .factory('ShopBag', function () {

    var exportation = {};

    var entities = [];

    exportation.addBag = function (entity) {
      entities.push(entity);
    };

    exportation.resetBag = function () {
      entities = [];
    };

    return exportation;
  });
