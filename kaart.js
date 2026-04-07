// --------------------------------------
// Kaart initialiseren
// --------------------------------------
const map = L.map('map').setView([66.9, 28.6], 8);


// --------------------------------------
// Basemaps (OSM + ArcGIS)
// --------------------------------------

// OpenStreetMap
const osm = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { maxZoom: 19 }
);

// Satelliet (ArcGIS)
const sat = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{x}/{y}',
    { maxZoom: 19 }
);

// Hillshade (Stamen Terrain – transparant, werkt zonder API-key)
const hillshade = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.jpg',
    {
        opacity: 0.4,
        zIndex: 999
    }
);

// Standaardlagen activeren
osm.addTo(map);
hillshade.addTo(map);


// --------------------------------------
// Iconen
// --------------------------------------
const redStarIcon = L.icon({
    iconUrl: 'red-star.png',
    iconSize: [28, 28],
    iconAnchor: [14, 14]
});

const blueDropIcon = L.icon({
    iconUrl: 'blue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
});

const greenCircleIcon = L.icon({
    iconUrl: 'green-dot.png',
    iconSize: [28, 28],
    iconAnchor: [14, 14]
});


// --------------------------------------
// Markers plaatsen
// --------------------------------------
locaties.forEach(loc => {
    let icon;

    if (loc.markerType === "redStar") icon = redStarIcon;
    else if (loc.markerType === "greenCircle") icon = greenCircleIcon;
    else icon = blueDropIcon;

    const marker = L.marker([loc.lat, loc.lon], { icon }).addTo(map);

    marker.bindPopup(`<b>${loc.name}</b><br>${loc.description}`);

    const li = document.createElement("li");
    li.textContent = loc.name;
    li.onclick = () => {
        map.setView([loc.lat, loc.lon], 13);
        marker.openPopup();
    };
    document.getElementById("locatieLijst").appendChild(li);
});


// --------------------------------------
// Basemap wisselen
// --------------------------------------
document.querySelectorAll("input[name='basemap']").forEach(r => {
    r.onchange = () => {
        if (r.value === "osm") {
            map.removeLayer(sat);
            osm.addTo(map);
        } else {
            map.removeLayer(osm);
            sat.addTo(map);
        }
    };
});


// --------------------------------------
// Hillshade toggle
// --------------------------------------
document.getElementById("hillshadeToggle").onchange = e => {
    if (e.target.checked) hillshade.addTo(map);
    else map.removeLayer(hillshade);
};


// --------------------------------------
// Hillshade slider
// --------------------------------------
document.getElementById("hillshadeSlider").oninput = e => {
    hillshade.setOpacity(e.target.value);
};


