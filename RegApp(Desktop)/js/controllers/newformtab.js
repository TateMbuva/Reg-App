

angular.module('regapp').controller('newformtab', function ($scope) {



   var defaultForm = {
              general : {

                "firstName" : "",
                "lastName" : "",
                "houseNumber" : "",
                "street" : "",
                "town" : "",
                "age" : "",
                "sex" : "",
                "hospitalNumber" : "",
                "doa" : {

                  "day" : "",
                  "month" : "",
                  "year" : "",
                },
                "contact" : {
                  "primary" : "",
                  "secondary" : ""
                }


              },

              symptoms : {

                "s1" : false,
                "s2" : false,
                "s3" : false,
                "s4" : false,
                "s5" : false

              },

              signs : {

                "sign1" : false,
                "sign2" : false,
                "sign3" : false,
                "sign4" : false,
                "sign5" : false,
                "pulse" : "",
                "sbp" : "",
                "dbp" : "",
                "rr" : ""
              },

              xray : {

                "x1" : false,
                "x1" : false,
                "x1" : false
              },

              ecg : {

                "ecg1" : false,
                "ecg2" : false,
                "ecg3" : false,
                "ecg4" : false,
                "ecg5" : false,
                "ecg6" : false
              },

              echo : {

                "echo1" : false,
                "echo2" : false,
                "echo3" : false,
                "echo4" : false,
                "echo5" : false,
                "echo5details" : ""
              },

              labResults : {

                "haemoglobin" : "",
                "sodium" : "",
                "urea" : "",
                "creatine" : "",
                "hiv" : "",
                "cd4Count" : "",
                "albumin" : ""
              },

              outcomeDod : {

                "numberOfDays" : "",
                "at30" : "",
                "onDischarge" : "",
                "readmission" : ""
              },

              cc : {

                "cc1" : false,
                "cc2" : false,
                "cc3" : false,
                "cc4" : false,
                "cc5" : false,
                "cc6" : false,
                "cc7" : false,
                "cc8" : false
              },

              medications : {

                "med1" : false,
                "med2" : false,
                "med3" : false,
                "med4" : false,
                "med5" : false,
                "med6" : false,
                "med7" : false,
                "med8" : false,
                "med9" : false

              }



          };




    var dbform = {

      general : {

        "firstName" : "",
        "lastName" : "",
        "houseNumber" : "",
        "street" : "",
        "town" : "",
        "age" : "",
        "sex" : "",
        "hospitalNumber" : "",
        "doa" : {

          "day" : "",
          "month" : "",
          "year" : "",
        },
        "contact" : {
          "primary" : "",
          "secondary" : ""
        }

      },

      symptoms : [],
      signs : [],
      xray : [],
      ecg : [],
      echo : [],
      echo5details : "",

      labResults : {

        "haemoglobin" : "",
        "sodium" : "",
        "urea" : "",
        "creatine" : "",
        "hiv" : "",
        "cd4Count" : "",
        "albumin" : ""
      },

      outcomeDod : {

        "numberOfDays" : "",
        "at30" : "",
        "onDischarge" : "",
        "readmission" : ""
      },

      cc : [],
      medications : []

    };


    var defaultDbform = {

      general : {

        "firstName" : "",
        "lastName" : "",
        "houseNumber" : "",
        "street" : "",
        "town" : "",
        "age" : "",
        "sex" : "",
        "hospitalNumber" : "",
        "doa" : {

          "day" : "",
          "month" : "",
          "year" : "",
        },
        "contact" : {
          "primary" : "",
          "secondary" : ""
        }

      },

      symptoms : [],
      signs : [],
      xray : [],
      ecg : [],
      echo : [],
      echo5details : "",

      labResults : {

        "haemoglobin" : "",
        "sodium" : "",
        "urea" : "",
        "creatine" : "",
        "hiv" : "",
        "cd4Count" : "",
        "albumin" : ""
      },

      outcomeDod : {

        "numberOfDays" : "",
        "at30" : "",
        "onDischarge" : "",
        "readmission" : ""
      },

      cc : [],
      medications : []

    };








$scope.submitIt = function () {

      //console.log("The form " + JSON.stringify($scope.form) );

//General//

      dbform.general = $scope.form.general;



//Symptoms Array//


      if($scope.form.symptoms.s1 === true){

        dbform.symptoms.push("Shortness of breath on exertion");
      }

      if($scope.form.symptoms.s2 === true){

        dbform.symptoms.push("Orthopnea");
      }

      if($scope.form.symptoms.s3 === true){

        dbform.symptoms.push("Paroxysmalnocturnal dyspnoea");
      }

      if($scope.form.symptoms.s4 === true){

        dbform.symptoms.push("Leg swelling");
      }

      if($scope.form.symptoms.s5 === true){

        dbform.symptoms.push("Tiredness");
      }


//Signs Array//



      if($scope.form.signs.sign1 === true){

         dbform.signs.push("Leg oedema");
      }

      if($scope.form.signs.sign2 === true){

         dbform.signs.push("Raised JVP");
      }

      if($scope.form.signs.sign3 === true){

         dbform.signs.push("Hepatomegaly");
      }

      if($scope.form.signs.sign4 === true){

         dbform.signs.push("Crepitations");
      }

      if($scope.form.signs.sign5 === true){

         dbform.signs.push("3rd heart sound");
      }

      if(!$scope.form.signs.pulse){

      }else {
        dbform.signs.push("Pulse  " + $scope.form.signs.pulse);

      }
      if(!$scope.form.signs.sbp){

      }else {
        dbform.signs.push("SBP  " + $scope.form.signs.sbp);

      }
      if(!$scope.form.signs.dbp){

      }else {
        dbform.signs.push("DBP  " + $scope.form.signs.dbp);

      }
      if(!$scope.form.signs.rr){

      }else {
        dbform.signs.push("Respiratory Rate  " + $scope.form.signs.rr);

      }



//Xray Array//



      if($scope.form.xray.x1 === true){

        dbform.xray.push("Cardiomegaly");
      }

      if($scope.form.xray.x2 === true){

        dbform.xray.push("Pulmonary Congestion");
      }
      if($scope.form.xray.x3 === true){

        dbform.xray.push("Pleural Effusion");
      }


//Ecg Array//


      if($scope.form.ecg.ecg1 === true){

       dbform.ecg.push("Tachycardia");
      }

      if($scope.form.ecg.ecg2 === true){

       dbform.ecg.push("Bradycardia");
      }

      if($scope.form.ecg.ecg3 === true){

       dbform.ecg.push("Atrial fibrillation");
      }

      if($scope.form.ecg.ecg4 === true){

       dbform.ecg.push("Bundle bunch block");
      }

      if($scope.form.ecg.ecg5 === true){

       dbform.ecg.push("LVH");
      }

      if($scope.form.ecg.ecg6 === true){

       dbform.ecg.push("RVH");
      }


//Echo Array//

      if($scope.form.echo.echo1 === true){

       dbform.echo.push("LA");
      }

      if($scope.form.echo.echo2 === true){

       dbform.echo.push("LVEDD");
      }

      if($scope.form.echo.echo3 === true){

       dbform.echo.push("EF");
      }

      if($scope.form.echo.echo4 === true){

       dbform.echo.push("FS");
      }

      if($scope.form.echo.echo5 === true){
  //Echo5 Details//

       dbform.echo5details = $scope.form.echo.echo5details;


      }



//Lab Reuslts//

      dbform.labResults = $scope.form.labResults;

//Outcome DOD//

      dbform.outcomeDod = $scope.form.outcomeDod;

//CC Array//


      if($scope.form.cc.cc1 === true){

      dbform.cc.push("Hypertension");
      }

      if($scope.form.cc.cc2 === true){

      dbform.cc.push("Diabetes Mellitus");
      }

      if($scope.form.cc.cc3 === true){

      dbform.cc.push("Kidney Disease");
      }

      if($scope.form.cc.cc4 === true){

      dbform.cc.push("Stroke");
      }

      if($scope.form.cc.cc5 === true){

      dbform.cc.push("TB");
      }

      if($scope.form.cc.cc6 === true){

      dbform.cc.push("COPD");
      }

      if($scope.form.cc.cc7 === true){

      dbform.cc.push("HIV");
      }

      if($scope.form.cc.cc8 === true){

      dbform.cc.push("Malignancy");
      }

//Medications Array//

     if($scope.form.medications.med1 === true){

      dbform.medications.push("Frusemide");
      }

      if($scope.form.medications.med2 === true){

       dbform.medications.push("Morphine");
       }

       if($scope.form.medications.med3 === true){

        dbform.medications.push("ACE Inhibitor");
        }

        if($scope.form.medications.med4 === true){

         dbform.medications.push("Digoxin");
         }

         if($scope.form.medications.med5 === true){

          dbform.medications.push("Beta Blocker");
          }

          if($scope.form.medications.med6 === true){

           dbform.medications.push("Anticoagulant");
           }

           if($scope.form.medications.med7 === true){

            dbform.medications.push("Hydralazine");
            }

            if($scope.form.medications.med8 === true){

             dbform.medications.push("Nitrate");
             }

             if($scope.form.medications.med9 === true){

              dbform.medications.push("Other");
              }



//Submit DbForm to DB//

             db.insert(dbform, function (err, newDoc) {

                if (err) {

                           console.log(err);

                         } else {
                                   console.log(JSON.stringify(newDoc));
                                }


             });

      //console.log(JSON.stringify(dbform));

      $scope.form = defaultForm;
      dbform = defaultDbform;

      //console.log(JSON.stringify(dbform));

  };




});
