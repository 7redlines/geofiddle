/// <reference path="../../typings/tsd.d.ts" />

module geofiddle {

    export var injector: ng.auto.IInjectorService;

    export var app = angular.module("geofiddle", []).config(($injector) => {
        injector = $injector;
    });
}