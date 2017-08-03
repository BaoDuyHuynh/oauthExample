var randomuserURL = 'https://randomuser.me/api/';
var countriesURL = 'https://restcountries.eu/rest/v2/alpha?codes=';
var randomUser = function(data){
$.ajax({
url: randomuserURL,
}).done(function(data){
    //console.log(data);
    var firstName = data.results[0].name.first; 
    var lastName = data.results[0].name.last;
    var photo = data.results[0].picture.large;
    var state = data.results[0].location.state;
    var nationality = data.results[0].nat;
    $("body").append("<h3>" + " Here at HackerC. You get to find anyone to hack but just refresing the page. :)" + "</h3>");
    console.log(nationality);
    $('<img />', {
    src: photo,
    }).appendTo($('body'))
    $("body").append("<h1>" + firstName.capitalize() + " " +lastName.capitalize() + "</h1>");
    $("body").append("<h3> Email:" + data.results[0].email + " <br/> Username: "+ data.results[0].login.username + " Password: " + data.results[0].login.password + "</h3>");
    $("body").append("<h3>" + "Here is something to enjoy when you are bored and tried of hacking. " + " Phone Number: " + data.results[0].phone+ " Cell Number: "+ data.results[0].cell +"</h3>"); 
    
    // natData(data);
//another API
        $.ajax({
        url:  countriesURL + nationality,
        }).done(function(data){
            var country = data[0].name;
            var flag = data[0].flag;
            $("body").append("<h2>" + firstName.capitalize() + " " + lastName.capitalize() + " lives in " + state.capitalize() + ", " + country + "</h2>");
            $('<img />', {
            src: flag,
            }).appendTo($('body'))
        $("body").append("<h3>" + "Enjoy Hacking your principle (Maybe just Maybe) ;)" + "</h3>"); 
        }); 
}); 
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


// // new API
// var natData = function(data){
// $.ajax({
// url: countriesURL,
// }).done(function(data){
//     //console.log(data);
    
// }); 
//     var country = "https://restcountries.eu/rest/v2/alpha?codes=" + data.results[0].nat;
//     console.log(country); 
// }