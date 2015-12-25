app.directive('walterwhite', function () {
    return{
        restrict: 'E',
        transclude: true,
        link: function (scope, element, attrs) {
            console.log(scope);
        }

    };
})

.directive('interactiveBtn', function () {
    return{
        restrict: 'A',
        link: function (scope, element, attrs) {

            element.bind('mouseenter', function () {
                element[0].innerText = "Rolled Over";
            });

            element.bind('mouseleave', function () {
                element[0].innerText = "Rolled Out";
            });

        }
    };
})

.directive('restrictions', function () {
  
    return{
        restrict: 'A',
        link: function () {
            console.log('I am a attribute');
        }
    };
            
})
.directive('elementrest', function () {
  
    return{
        restrict: 'E',
        link: function () {
            console.log('I am a element');
        }
    };
            
})
.directive('classrest', function () {
  
    return{
        restrict: 'C',
        link: function () {
            console.log('I am a class');
        }
    };
            
})
.directive('commentrest', function () {
  
    return{
        restrict: 'M',
        link: function () {
            console.log('I am a comment restriction');
        }
    };
            
});
//.directive('theshield', function () {
//
//    return{
//        restrict: 'E',
//        controller: 'ShieldCtrl',
//        link: function (scope, element, attrs) {
//            element.bind('mouseenter', function () {
//                console.log(scope.shieldNames);
//            });
//        }
//    };
//
//})
//
//.directive('reigns', function () {
//    return{
//        required: 'theshield',
//        link: function (scope, element, attrs, ShieldCtrl) {
//            ShieldCtrl.addReigns();
//        }
//    };
//})
//
//.directive('rollins', function () {
//    return{
//        required: 'theshield',
//        link: function (scope, element, attrs, ShieldCtrl) {
//            ShieldCtrl.addRollins();
//        }
//    };
//})
//
//.directive('ambrose', function () {
//    return{
//        required: 'theshield',
//        link: function (scope, element, attrs, ShieldCtrl) {
//            ShieldCtrl.addAmbrose();
//        }
//    };
//})