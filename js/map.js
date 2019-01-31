var map = L.map('map').setView([-31.671,-58.770], 7);

var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

function popUpInfo(feature, layer) {
    
    if (feature.properties && feature.properties.Name) {
        layer.bindPopup("<b>"+feature.properties.Name+"</b><br>"+feature.properties.description+"");
    }
}
L.geoJson(localidades, {
    onEachFeature: popUpInfo
    }).addTo(map);
