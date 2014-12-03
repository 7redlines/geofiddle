/// <reference path="../../../typings/tsd.d.ts" />

module geofiddle.pages {
    
    export class IndexController {

        private uiMap: any;

        public map: any;
        
        constructor(public $scope: ng.IScope, uiGmapGoogleMapApi) {
            this.uiMap = uiGmapGoogleMapApi;


            this.map = {
                center: { latitude: 45, longitude: -73 },
                zoom: 8,
                options: {
                    zoomControl: false,
                    streetViewControl: false,
                    panControl: false,
                }
            };
        }
    }

    geofiddle.app.controller('index', IndexController);
} 