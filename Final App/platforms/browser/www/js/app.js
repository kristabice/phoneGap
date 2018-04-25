
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		window.addEventListener("batterystatus", onBatteryStatus, false);
		function onBatteryStatus(status) {
		console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
		if(status.isPlugged === true){

			alert('Your device has been plugged in');
		} else{
			alert('you have unplugged your device');
		}

		}

		app.receivedEvent('deviceready');
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       

        console.log('Received Event: ' + id);
    }
};
