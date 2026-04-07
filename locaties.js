// TOP-40 ID's
const top40 = [
1,5,3,4,51,62,31,109,114,83,
10,8,33,36,30,41,108,19,20,42,
57,78,28,110,54,58,112,113,29,14,
27,56,36,37,38,40,31,32,36,37
];

// -----------------------------
// JOUW LOCATIES HIER
// -----------------------------
// Voorbeeld:
// const locaties = [
//   { id: 1, name: "Aholanvaara tank barrier", lat: 66.9, lon: 28.6, description: "Sterke stelling", markerType: "" },
//   ...
// ];
// -----------------------------

// Marker-type logica
locaties.forEach(loc => {
    const desc = (loc.description || "").toLowerCase();

    if (!desc || desc.includes("geen beschrijving")) {
        loc.name = "Mogelijke defensieve stellingen";
        loc.markerType = "greenCircle";
    } else if (top40.includes(loc.id)) {
        loc.markerType = "redStar";
    } else {
        loc.markerType = "blueDrop";
    }
});
