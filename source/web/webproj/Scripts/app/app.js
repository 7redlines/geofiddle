/// <reference path="../../typings/tsd.d.ts" />
var geofiddle;
(function (geofiddle) {
    geofiddle.injector;

    geofiddle.app = angular.module("geofiddle", ['uiGmapgoogle-maps']).config(function ($injector) {
        geofiddle.injector = $injector;
    });
})(geofiddle || (geofiddle = {}));
//# sourceMappingURL=app.js.map
