
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
        
        $(document).ready(function(){
            $('#submit').click(function(){
                navigator.notification.alert(
                    'You have successfully subscibed! Congrats!!',  // message
                    alertDismissed,         // callback
                    'Subscription',            // title
                    'Done'                  // buttonName
                );
            })
            function alertDismissed() {
                // do something
            }
        }) //end of submit button function

        $(document).on('slidestart', '#page3', function(){ 
            navigator.vibrate(3000);
            console.log(navigator.vibrate);
        })
        

		app.receivedEvent('deviceready');
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       

        console.log('Received Event: ' + id);
    }
};


var week1 = "<h1>Week One</h1> <img src='img/Spirit Deer Fern.jpg' alt='quilt along'><p>We are on to block three and our second applique block, Deer Fern. Are you ready to jump in? Get your freezer paper and trace the templates.  I only traced one 1/4 of the wreath on the freezer paper.</p><p> I also didn't trace the circles. I used Perfect Circle™ mylar templates made by Karen Kay Buckley. You can order a set here. More on how to use them later.I started my wreath with a 18 inches square of green Grunge.</p><p> I then pressed it in half in both way so I had my center lines. Next I pressed the template in one quarter. Using the fold to line up the straight edges of the template. Then I used a pencil to trace that section. Repeat with the other quarter sections. </p>";

var week2 = "<h1>Week Two</h1> <img src='img/Spirit Canoe.jpg' alt='quilt along'><p>We are on to block three and our second applique block, Deer Fern. Are you ready to jump in? Get your freezer paper and trace the templates.  I only traced one 1/4 of the wreath on the freezer paper.</p><p> I also didn't trace the circles. I used Perfect Circle™ mylar templates made by Karen Kay Buckley. You can order a set here. More on how to use them later.I started my wreath with a 18 inches square of green Grunge.</p><p> I then pressed it in half in both way so I had my center lines. Next I pressed the template in one quarter. Using the fold to line up the straight edges of the template. Then I used a pencil to trace that section. Repeat with the other quarter sections. </p>";

var week3 = "<h1>Week Three</h1> <img src='img/Spirit Horses.jpg' alt='quilt along'><p>We are on to block three and our second applique block, Deer Fern. Are you ready to jump in? Get your freezer paper and trace the templates.  I only traced one 1/4 of the wreath on the freezer paper.</p><p> I also didn't trace the circles. I used Perfect Circle™ mylar templates made by Karen Kay Buckley. You can order a set here. More on how to use them later.I started my wreath with a 18 inches square of green Grunge.</p><p> I then pressed it in half in both way so I had my center lines. Next I pressed the template in one quarter. Using the fold to line up the straight edges of the template. Then I used a pencil to trace that section. Repeat with the other quarter sections. </p>";
var week4 = "<h1>Week four</h1> <p>Comming Next Week!</p>";

$(document).on('pagebeforeshow', '#page3', function(){ 
    if($("#num").val() ==='1'){
        $("#week").html(week1);
    }else if($("#num").val() === '2'){
        $("#week").html(week2);
    }else if($("#num").val() === '3'){
        $("#week").html(week3);
    }else if($("#num").val() === '4'){
        $("#week").html(week4);
    }
});

    $(document).on('slidestop', '#page3', function(){ 
    if($("#num").val() ==='1'){
        $("#week").html(week1);
    }else if($("#num").val() === '2'){
        $("#week").html(week2);
    }else if($("#num").val() === '3'){
        $("#week").html(week3);
    }else if($("#num").val() === '4'){
        $("#week").html(week4);
    }
});