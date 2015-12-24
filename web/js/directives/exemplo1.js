app.directive('myDirective', function () {
    // return the directive definition object
    return {
        // only match this directive to element tags
        restrict: 'E',
        // insert the template matching 'my-template.html'
        templateUrl: 'my-template.html'
    };
});

app.directive('elementDirective', function ($log) {
    return {
        restrict: 'E',
        replace: true,
        template: '<p>Ze template!</p>',
        link: function (scope, el, attrs) {
            $log.log(el.html());
            // Ze template!
            $log.log(attrs.someAttr);
            // myvalue
        }
    };
});

app.directive('attributeDirective', function ($log) {
    return {
        // restrict defaults to A
        restrict: 'A',
        template: '<p>An attribute directive</p>',
        link: function (scope, el, attrs) {
            $log.log(el.html());
            // <p>An attribute directive</p>
            $log.log(attrs.attributeDirective);
            // aval
            $log.log(attrs.someAttr);
            // myvalue
        }
    };
});


app.directive('classDirective', function ($log) {
    return {
        restrict: 'C',
        template: '<p>A class directive</p>',
        link: function (scope, el, attrs) {
            $log.log(el.html());
            // <p>A class directive</p>
            $log.log(el.hasClass('normal-class'));
            // true
            $log.log(attrs.classDirective);
            // cval
            $log.log(attrs.someAttr);
            // myvalue
        }
    };
});

app.directive('commentDirective', function ($log) {
    return {
        restrict: 'M',
        // without replace: true, the template cannot
        // be inserted into the DOM 
        replace: true,
        template: '<p>A comment directive</p>',
        link: function (scope, el, attrs) {
            $log.log(el.html())
            // <p>A comment directive</p>
            $log.log(attrs.commentDirective)
            // 'val1 val2 val3'
        }
    };
});

app.directive('counter', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            // read element attribute if it exists
            var incr = parseInt(attrs.incr || 1)
                    , val = 0;
            // define callback for vanilla DOM click event
            el.bind('click', function () {
                el.html(val += incr);
            });
        }
    };
});

app.directive('vectorText', function ($document) {
    return {
        template: '<span>{{ heading }}</span>',
        link: function (scope, el, attrs) {

            // initialize the css
            el.css({
                'float': 'left',
                'padding': attrs.buffer + "px"
            });

            // initialize the scope variable
            scope.heading = '';

            // set event listener and handler
            $document.on('mousemove', function (event) {
                // mousemove event does not start $digest,
                // scope.$apply does this manually
                scope.$apply(function () {
                    if (event.pageY < 300) {
                        scope.heading = 'N';
                    } else {
                        scope.heading = 'S';
                    }
                    if (event.pageX < 300) {
                        scope.heading += 'W';
                    } else {
                        scope.heading += 'E';
                    }
                });
            });
        }
    };
});

/*
 app.directive('iso', function () {
 return {
 template: 'Inner: {{ innerval }}',
 scope: {
 innerval: '@myattr'
 }
 };
 });
 */

app.directive('iso', function () {
    return {
        scope: {
            innerval: '&myattr'
        },
        link: function (scope) {
            scope.innerval();
            // invoked!  
        }
    };
});

app.directive('parentDirective', function ($log) {
  return {
    controller: function () {
      this.identify = function () {
        $log.log('Parent!');
      };
    }
  };
})
app.directive('siblingDirective', function ($log) {
  return {
    controller: function () {
      this.identify = function () {
        $log.log('Sibling!');
      };
    }
  };
})
app.directive('childDirective', function ($log) {
  return {
    require: ['^parentDirective', '^siblingDirective'],
    link: function (scope, el, attrs, ctrls) {
      ctrls[0].identify();
      // Parent!
      ctrls[1].identify();
      // Sibling!
    }
  };
});

app.directive('childDirective', function ($log) {
  return {
    require: [
      '^parentDirective',
      '^siblingDirective',
      '^?missingDirective'
    ],
    link: function (scope, el, attrs, ctrls) {
      ctrls[0].identify();
      // Parent!
      ctrls[1].identify();
      // Sibling!
      $log.log(ctrls[2]);
      // null
    }
  };
});