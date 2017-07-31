angular.module('regapp').factory('formsDB', function ($q){

  return {

      getForms: function () {
          var deferred = $q.defer();


          db.find({}).limit(5).exec(function (err, data) {
            if (err) {
     deferred.reject(err);
   } else {
     deferred.resolve(data);
   }
          });

          return deferred.promise;
      },

      skipFF: function (){

        var deferred = $q.defer();


        db.find({}).skip(5).limit(5).exec(function (err, data) {
          if (err) {
   deferred.reject(err);
 } else {
   deferred.resolve(data);
 }
        });

        return deferred.promise;

      },

      skipFB: function (){


        var deferred = $q.defer();

        db.find({}).skip(-5).limit(5).exec(function (err, data) {
          if (err) {
   deferred.reject(err);
 } else {
   deferred.resolve(data);
 }
        });

        return deferred.promise;
      },




    getNum: function (){

      var deferred = $q.defer();

      db.count({}, function (err, data) {
        if (err) {
 deferred.reject(err);
} else {
 deferred.resolve(data);
}
      });

      return deferred.promise;

    }




};

});
