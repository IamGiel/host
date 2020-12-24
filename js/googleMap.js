// Initialize and add the map
function initMap(lati, longti) {
    // The location of Uluru
    const uluru = {
        lat: lati,
        lng: longti
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {

        console.log(position)
        let lat_ = position.coords.latitude;
        let long_ = position.coords.longitude;

        if (position && lat_ && long_) {
            //   alert("called lat: " + lat_ + " and long: " + long_);
            initMap(lat_, long_);
            
        }
    })
};

function googPlaceApi() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=nearest train station&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&locationbias=circle:2000@46.236180,-119.088620&key=AIzaSyD76om3hFfratW1ect9aYbiMESTv0KO350", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}


getLocation();
googPlaceApi();