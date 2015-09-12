# ng-cordova-beacon

Wrap the [cordova-plugin-ibeacon](https://github.com/petermetz/cordova-plugin-ibeacon) by Peter Metz in AngularJS code so it can be used more easily in AngularJS mobile applications.

## Using ngCordovaBeacon In Your Project

The core Apache Cordova plugin is required to use this wrapper:

```
cordova plugin add https://github.com/petermetz/cordova-plugin-ibeacon
```

### Example Usage

```
.controller("ExampleController", function($scope, $rootScope, $ionicPlatform, $cordovaBeacon) {

    $scope.beacons = {};

    $ionicPlatform.ready(function() {

        $cordovaBeacon.requestWhenInUseAuthorization();

        $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
            var uniqueBeaconKey;
            for(var i = 0; i < pluginResult.beacons.length; i++) {
                uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
            }
            $scope.$apply();
        });

        $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "b9407f30-f5f8-466e-aff9-25556b57fe6d"));

    });

});
```

## Available Functions

Here are a list of available functions:

```
$cordovaBeacon.requestWhenInUseAuthorization();
$cordovaBeacon.requestAlwaysAuthorization();
BeaconRegion $cordovaBeacon.createBeaconRegion(string identifier, string uuid, int major, int minor);
$cordovaBeacon.startRangingBeaconsInRegion(BeaconRegion beaconRegion);
$cordovaBeacon.startMonitoringForRegion(BeaconRegion beaconRegion);
$cordovaBeacon.stopRangingBeaconsInRegion(BeaconRegion beaconRegion);
$cordovaBeacon.stopMonitoringForRegion(BeaconRegion beaconRegion);
```

The `startRangingBeaconsInRegion` and `startMonitoringForRegion` functions broadcast the results as they happen.  To receive these results, do something like:

```
$rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, data) {
    // Data contains beacon information
});
```

## Have a question or found a bug (compliments work too)?

Tweet me on Twitter - [@nraboy](https://www.twitter.com/nraboy)

## Resources

AngularJS - [http://www.angularjs.org](http://www.angularjs.org)

Apache Cordova - [http://cordova.apache.org](http://cordova.apache.org)

Nic Raboy's Code Blog - [https://blog.nraboy.com](https://blog.nraboy.com)
