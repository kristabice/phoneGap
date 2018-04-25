/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
    
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

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