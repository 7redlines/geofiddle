/// <reference path="../../../typings/tsd.d.ts" />
var geofiddle;
(function (geofiddle) {
    (function (pages) {
        var IndexController = (function () {
            function IndexController($scope, uiGmapGoogleMapApi) {
                this.$scope = $scope;
                this.uiMap = uiGmapGoogleMapApi;

                this.map = {
                    center: { latitude: 45, longitude: -73 },
                    zoom: 8,
                    options: {
                        zoomControl: false,
                        streetViewControl: false,
                        panControl: false
                    }
                };
            }
            return IndexController;
        })();
        pages.IndexController = IndexController;

        geofiddle.app.controller('index', IndexController);
    })(geofiddle.pages || (geofiddle.pages = {}));
    var pages = geofiddle.pages;
})(geofiddle || (geofiddle = {}));
//# sourceMappingURL=index.js.map
