# ng-cordova-beacon

Wrap the [cordova-plugin-ibeacon](https://github.com/petermetz/cordova-plugin-ibeacon) by Peter Metz in AngularJS code so it can be used more easily in AngularJS mobile applications.

## Using ngCordovaBeacon In Your Project

Here are a list of available functions.

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
