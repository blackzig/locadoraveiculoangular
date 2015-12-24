//app.directive('myDirective', function () {
//  return {
//    restrict: 'E',
//    link: function (scope) {
//      scope.overwrite = !!scope.origin;
//      scope.origin = 'link function';
//    }
//  };
//});

//app.directive('myDirective', function() {
//  return {
//    restrict: 'E',
//    replace: true,
//    templateUrl: 'my-directive.html',
//    link: function (scope) {
//      scope.overwrite = !!scope.origin;
//      scope.origin = 'link function';
//    }
//  };
//});

//app.directive('myDirective', function() {
//  return {
//    templateUrl: 'my-directive.html',
//    replace: true,
//    scope: {},
//    link: function (scope) {
//      scope.overwrite = !!scope.origin;
//      scope.origin = 'link function';
//    }
//  };
//});

app.directive('myDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'my-directive.html',
    scope: {},
    transclude: true,
    link: function (scope) {
      scope.overwrite = !!scope.origin;
      scope.origin = 'link function';
    }
  };
});

app.directive('tree', function($compile, $templateCache) {
  return {
    restrict: 'E',
    scope: {
      val: '=',
      parentData: '='
    },
    link: function(scope, el, attrs) {
      scope.isParent = angular.isArray(scope.val.items)
      scope.delSubtree = function() {
        if(scope.parentData) {   
          scope.parentData.splice(
            scope.parentData.indexOf(scope.val),
            1
          );
        }
        scope.val={};
      }   
      el.replaceWith(
        $compile(
          $templateCache.get('recursive.html')
        )(scope)
      );    
    }
  };
});