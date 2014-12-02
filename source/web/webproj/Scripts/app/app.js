/// <reference path="../../typings/tsd.d.ts" />
var geofiddle;
(function (geofiddle) {
    geofiddle.injector;

    geofiddle.app = angular.module("geofiddle", []).config(function ($injector) {
        geofiddle.injector = $injector;
    });
})(geofiddle || (geofiddle = {}));
//# sourceMappingURL=app.js.map
