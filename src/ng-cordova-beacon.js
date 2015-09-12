/*
 * ng-cordova-beacon
 *
 * Author: Nic Raboy - https://blog.nraboy.com
 */

angular.module("ngCordovaBeacon", [])

    .factory("$cordovaBeacon", ["$rootScope", function($rootScope) {

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {

            var delegate = new cordova.plugins.locationManager.Delegate();

            /*
             * Tells the delegate that one or more beacons are in range
             */
            delegate.didRangeBeaconsInRegion = function(pluginResult) {
                $rootScope.$broadcast("$cordovaBeacon:didRangeBeaconsInRegion", pluginResult);
            };

            delegate.didStartMonitoringForRegion = function(pluginResult) {
                $rootScope.$broadcast("$cordovaBeacon:didStartMonitoringForRegion", pluginResult);
            };

            delegate.didDetermineStateForRegion = function(pluginResult) {
                $rootScope.$broadcast("$cordovaBeacon:didDetermineStateForRegion", pluginResult);
            };

            cordova.plugins.locationManager.setDelegate(delegate);

        }

        return {

            /*
             * Requests permission to use location services while the app is in the foreground
             *
             * @param
             * @return
             */
            requestWhenInUseAuthorization: function() {
                cordova.plugins.locationManager.requestWhenInUseAuthorization();
            },

            /*
             * Requests permission to use location services whenever the app is running
             * @param
             * @return
             */
            requestAlwaysAuthorization: function() {
                cordova.plugins.locationManager.requestAlwaysAuthorization();
            },

            /*
             * Create a beacon monitor or range for
             *
             * @param    string identifier
             * @param    string uuid
             * @param    int major
             * @param    int minor
             * @return   BeaconRegion
             */
            createBeaconRegion: function(identifier, uuid, major, minor) {
                return new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
            },

            /*
             * Starts the delivery of notifications for beacons in the specified region
             *
             * @param    BeaconRegion beaconRegion
             * @return
             */
            startRangingBeaconsInRegion: function(beaconRegion) {
                cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion);
            },

            /*
             * Starts monitoring the specified region
             *
             * @param    BeaconRegion beaconRegion
             * @return
             */
            startMonitoringForRegion: function(beaconRegion) {
                cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion);
            },

            /*
             * Stops the delivery of notifications for the specified beacon region
             *
             * @param    BeaconRegion beaconRegion
             * @return
             */
            stopRangingBeaconsInRegion: function(beaconRegion) {
                cordova.plugins.locationManager.stopRangingBeaconsInRegion(beaconRegion);
            },

            /*
             * Stops monitoring the specified region
             *
             * @param    BeaconRegion beaconRegion
             * @return
             */
            stopMonitoringForRegion: function(beaconRegion) {
                cordova.plugins.locationManager.stopMonitoringForRegion(beaconRegion);
            }

        };

    }]);
