app.controller('MainCtrl', function ($scope) {
    $scope.data = {
        label:"My Button"
    };
    
});


app.controller('ShieldCtrl', function ($scope)
{
	$scope.shieldNames = [];

	this.addReigns = function ()
	{
		$scope.shieldNames.push("Roman Reigns: Juggernaut");
	};

	this.addRollins = function ()
	{
		$scope.shieldNames.push("Seth Rollins: Architect");
	};

	this.addAmbrose = function ()
	{
		$scope.shieldNames.push("Dean Ambrose: Lunatic Fringe");
	};
});