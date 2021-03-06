/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
beforeEach(angular.mock.module('app'));

describe('buildrequest controller', function() {
    let $httpBackend, $rootScope, $scope, $stateParams, $timeout, modal;
    let dataService = ($scope = ($rootScope = null));
    let createController = ($stateParams = (modal = ($httpBackend = ($timeout = null))));

    const injected = function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        $timeout = $injector.get('$timeout');
        const $controller = $injector.get('$controller');
        const $q = $injector.get('$q');
        dataService = $injector.get('dataService');
        $httpBackend = $injector.get('$httpBackend');

        modal = {};
        return createController = () =>
            $controller('forceDialogController', {
                $scope,
                builderid: 1,
                schedulerid: 'forcesched',
                modal
            }
            )
        ;
    };
    beforeEach(inject(injected));

    it('should query for forcecheduler', function() {
        dataService.when('forceschedulers/forcesched', [{all_fields:[{'foo': 'int'}]}]);
        const controller = createController();
        return $rootScope.$apply();
    });

    return it('should call forcecheduler control api when ok', function() {
        dataService.when('forceschedulers/forcesched', [{name: "forcesched", all_fields:[{'foo': 'int'}]}]);
        const controller = createController();
        $timeout.flush();
        $httpBackend.when('POST', 'api/v2/forceschedulers/forcesched') .respond("{}");
        $scope.ok();
        return $rootScope.$apply();
    });
});
