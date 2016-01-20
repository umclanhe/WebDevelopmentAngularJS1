var LandingPageController = function ($scope) {
    $scope.models = {
        helloAngular: 'It is working!'
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };
}

LandingPageController.$inject = ['$scope'];
