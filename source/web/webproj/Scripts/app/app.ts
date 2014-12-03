/// <reference path="../../typings/tsd.d.ts" />

module geofiddle {

    export var injector: ng.auto.IInjectorService;

    export var app = angular.module("geofiddle", ['uiGmapgoogle-maps']).config(($injector) => {
        injector = $injector;
    });
}