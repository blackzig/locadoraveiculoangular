//app.controller('MainCtrl', function ($scope) {
//  $scope.overwrite = false;
//  $scope.origin = 'parent controller';
//});


app.controller('MainCtrl', function($scope) {
  $scope.data = {
    text: 'Primates',
    items: [
      {
        text: 'Anthropoidea',
        items: [
          {
            text: 'New World Anthropoids'
          },
          {
            text: 'Old World Anthropoids',
            items: [
              {
                text: 'Apes',
                items: [
                  {
                    text: 'Lesser Apes'
                  },
                  {
                    text: 'Greater Apes'
                  }
                ]
              },
              {
                text: 'Monkeys'
              }
            ]
          }
        ]
      },
      {
        text: 'Prosimii'
      }
    ]
  };
});