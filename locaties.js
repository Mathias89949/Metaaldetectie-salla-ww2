// TOP-40 ID's
const top40 = [
1,5,3,4,51,62,31,109,114,83,
10,8,33,36,30,41,108,19,20,42,
57,78,28,110,54,58,112,113,29,14,
27,56,36,37,38,40,31,32,36,37
];

// -----------------------------
// ALLE LOCATIES (opgeschoond)
// -----------------------------
const locaties = [
  { id: 1, lat: 66.843123, lon: 28.709842, name: "Porttoaapa tank battle", description: "Sovjet tanks breken door Finse linies, 11 dec 1939." },
  { id: 5, lat: 66.68652, lon: 27.97873, name: "Joutsijärvi battle area", description: "Winteroorlog gevechten, guerrilla-acties." },
  { id: 6, lat: 67.716144, lon: 28.772409, name: "Lattuna crossing", description: "Partizanenroute; Finse hinderlaag mislukt." },
  { id: 7, lat: 67.03048, lon: 28.99142, name: "Post-War Mine Victims Memorial", description: "Monument voor burgers gedood door mijnen 1945-49." },
  { id: 8, lat: 66.844717, lon: 28.692583, name: "Salpa Line - Ruuhijärvi", description: "Bunkers, MG-nesten, artilleriestellingen." },
  { id: 9, lat: 66.69649, lon: 27.62299, name: "Tasasenvaara defensive positions", description: "Finse linie Winteroorlog; later door Duitsers versterkt." },
  { id: 10, lat: 66.6869, lon: 27.985233, name: "Salpa Line - Joutsijärvi", description: "Noordelijkste Salpa-bunker; museum." },
  { id: 11, lat: 67.70763, lon: 28.84773, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 12, lat: 66.956944, lon: 30.337917, name: "Soviet pilots memorial", description: "Graf van 5 Sovjet piloten; Duitse brug." },
  { id: 13, lat: 66.73181, lon: 28.12798, name: "Lapin talo building", description: "Commandopost voor 4 landen." },
  { id: 14, lat: 67.121, lon: 27.493028, name: "German barracks", description: "Duitse barakken Pelkosenniemi." },
  { id: 15, lat: 67.000944, lon: 30.640833, name: "Voyta River", description: "Sovjet verdedigingslinie." },
  { id: 16, lat: 66.981111, lon: 30.558833, name: "Former border line", description: "Oude grens tot 1940." },
  { id: 17, lat: 67.72205, lon: 28.44144, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 18, lat: 66.762033, lon: 28.1427, name: "Kursu village", description: "Finse terugtocht 1939." },
  { id: 19, lat: 66.76781, lon: 27.37309, name: "German defence - Tohmo", description: "Duitse Ringwall-stellingen 1944." },
  { id: 20, lat: 66.80477, lon: 27.41566, name: "German defence - Leväranta", description: "Duitse Ringwall-stellingen 1944." },
  { id: 21, lat: 67.707604, lon: 28.713494, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 23, lat: 66.956583, lon: 30.311417, name: "Former German cemetery", description: "Duitse begraafplaats Alakurtti." },
  { id: 25, lat: 67.16997, lon: 28.669717, name: "Ulmojanvaara base", description: "Duitse basis met artillerienesten." },
  { id: 26, lat: 66.685547, lon: 27.973632, name: "Joutsijärvi shop", description: "Info over militaire sites." },
  { id: 27, lat: 66.500199, lon: 28.17124, name: "Soviet airplane crash site", description: "Neergestorte Pe-2 bommenwerper." },
  { id: 28, lat: 66.50409, lon: 28.17956, name: "Palojärvi logging prison camp", description: "Duits werkkamp." },
  { id: 29, lat: 66.974, lon: 29.253556, name: "Salla Border Company garrison", description: "Finse grenscompagnie; verbrand 1939." },
  { id: 30, lat: 66.78715, lon: 28.33519, name: "Pilkkavaara defensive positions", description: "Duitse stellingen 1944." },
  { id: 31, lat: 67.05992, lon: 28.911411, name: "Ukonlampi Salpa Line", description: "Anti-tankbarrières." },
  { id: 32, lat: 67.67899, lon: 28.948676, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 33, lat: 67.281883, lon: 28.18985, name: "Restored Salpa Line Savukoski", description: "Herstelde bunkers." },
  { id: 34, lat: 67.72013, lon: 28.72047, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 36, lat: 66.82985, lon: 28.6372, name: "Salpa Line in Salla", description: "Uitgebreide stellingen." },
  { id: 37, lat: 66.928544, lon: 28.885798, name: "Salla railway line", description: "Strategische spoorlijn." },
  { id: 38, lat: 66.71201, lon: 27.61985, name: "Puikkola", description: "Zweedse vrijwilligers HQ." },
  { id: 40, lat: 66.950167, lon: 29.183389, name: "German cemetery Vanha Salla", description: "Duitse oorlogsbegraafplaats." },
  { id: 41, lat: 67.2534, lon: 28.45808, name: "Iso Marjavaara positions", description: "Duitse stellingen." },
  { id: 42, lat: 67.24, lon: 28.81426, name: "Sattovaara field guard", description: "Duitse veldwachtpost." },
  { id: 43, lat: 67.29435, lon: 28.151682, name: "Civil Guard House memorial", description: "Suojeluskunta-monument." },
  { id: 45, lat: 66.96475, lon: 29.1745, name: "Spekov Memorial", description: "Sovjet held Spekov, gesneuveld 1940." },
  { id: 46, lat: 66.747771, lon: 29.179356, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 47, lat: 66.917813, lon: 29.014136, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 48, lat: 66.536914, lon: 29.442389, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 49, lat: 67.13615, lon: 27.482617, name: "Battle of Pelkosenniemi", description: "Winteroorlog slagveld 18 dec 1939." },
  { id: 50, lat: 66.694033, lon: 27.866567, name: "Mäntyvaara War Memorial", description: "Slag bij Mäntyvaara, 20 dec 1939." },
  { id: 51, lat: 66.912667, lon: 29.823167, name: "Kelsinkäinen battleground", description: "Zwaar Winteroorlog-slagveld." },
  { id: 52, lat: 66.9604, lon: 28.268034, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 53, lat: 66.931456, lon: 28.900728, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 54, lat: 66.7115, lon: 27.185472, name: "Hanhikoski garrison", description: "Fins/Duits garnizoen; vliegveld." },
  { id: 55, lat: 66.92591, lon: 28.90777, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 56, lat: 66.7395, lon: 28.83707, name: "Cellar of Sotka", description: "Fins schuilhol; Sovjet aanval." },
  { id: 57, lat: 66.960611, lon: 29.186333, name: "Vanha Salla prison camp", description: "Duits Stalag 309." },
  { id: 58, lat: 67.288833, lon: 28.0434, name: "Saunakangas garrison", description: "Fins garnizoen." },
  { id: 59, lat: 66.71312, lon: 27.4314, name: "Volunteer Fire-Brigade House", description: "Gebruikt door Russen, Finnen, Duitsers." },
  { id: 60, lat: 66.89915, lon: 28.983099, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 61, lat: 66.99702, lon: 29.0656, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 62, lat: 66.929028, lon: 29.609472, name: "Kairala bottleneck", description: "Zwaar slagveld Winteroorlog + 1941." },
  { id: 63, lat: 66.52059, lon: 29.47005, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 64, lat: 67.54906, lon: 28.8863, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 65, lat: 67.131889, lon: 28.21183, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 66, lat: 67.14636, lon: 28.23841, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 67, lat: 67.31483, lon: 28.719875, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 68, lat: 67.73424, lon: 28.97931, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 69, lat: 67.1431, lon: 27.5135, name: "Soviet soldiers memorial", description: "Winteroorlog massagraven Vasaniemi." },
  { id: 70, lat: 67.49192, lon: 27.81189, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 71, lat: 67.46791, lon: 27.67496, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 73, lat: 66.874436, lon: 28.777494, name: "Hautaniemi PoW camp", description: "Duits krijgsgevangenenkamp." },
  { id: 74, lat: 67.074133, lon: 28.866467, name: "Mäntylä base", description: "Winteroorlog basis Saija." },
  { id: 75, lat: 67.26514, lon: 27.94252, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 76, lat: 67.40334, lon: 27.49507, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 77, lat: 67.49135, lon: 27.809968, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 78, lat: 66.929253, lon: 29.94873, name: "Nurmi station & camp", description: "Duits kamp + station." },
  { id: 80, lat: 67.29835, lon: 28.14216, name: "Korvatunturi Visitor Centre", description: "WO2-expositie." },
  { id: 83, lat: 66.943833, lon: 30.270611, name: "Alakurtti defensive positions", description: "Zware Sovjet stellingen." },
  { id: 84, lat: 66.952028, lon: 30.387667, name: "Alakurtti staff area", description: "Duits bergkorps HQ." },
  { id: 85, lat: 67.146648, lon: 29.540172, name: "Korja village", description: "Dorp op Sovjetzijde na WO2." },
  { id: 88, lat: 66.96123, lon: 30.33643, name: "Soviet cemetery Alakurtti", description: "Sovjet begraafplaats." },
  { id: 90, lat: 66.826149, lon: 28.66612, name: "Soviet soldiers memorial Salla", description: "Monument 1946." },
  { id: 96, lat: 66.69172, lon: 27.55597, name: "Isokylä base", description: "Duits kamp; ziekenhuis, barakken." },
  { id: 99, lat: 66.799717, lon: 28.516067, name: "Paikanselkä Parade Field", description: "Zweedse vrijwilligers; Mannerheim speech." },
  { id: 101, lat: 66.510319, lon: 29.032405, name: "Wilderness Jaegers memorial", description: "Monument JR12." },
  { id: 102, lat: 66.8363, lon: 28.67156, name: "Salla Museum of War", description: "Museum WO2 + wederopbouw." },
  { id: 103, lat: 66.7196, lon: 27.4014, name: "Kemijärvi regional museum", description: "Regionaal museum." },
  { id: 104, lat: 66.53213, lon: 28.709149, name: "Aholanvaara tank barrier", description: "Salpa Line tankbarrière." },
  { id: 105, lat: 66.834486, lon: 28.673722, name: "Soldiers of four countries", description: "Monument voor 4 landen." },
  { id: 106, lat: 67.291795, lon: 28.167532, name: "Savukoski war grave", description: "Monument + 58 graven." },
  { id: 108, lat: 66.687306, lon: 27.90775, name: "Kuusivaara positions", description: "Finse + Duitse stellingen." },
  { id: 109, lat: 67.094783, lon: 28.821317, name: "Saija village", description: "Finse + Duitse stellingen; massagraven." },
  { id: 110, lat: 66.68685, lon: 27.992195, name: "German base Joutsijärvi", description: "Duits kamp + vliegveld." },
  { id: 111, lat: 66.934457, lon: 28.92988, name: "Kelloselkä departure area", description: "Duitse aanval richting Kandalaksha." },
  { id: 112, lat: 66.508429, lon: 28.355526, name: "Karhujärvi barracks", description: "Fins kamp; grenscompagnie." },
  { id: 113, lat: 66.736528, lon: 29.030226, name: "Onkamo border guard", description: "Fins grensstation; Duitse aanval." },
  { id: 114, lat: 67.021028, lon: 30.809639, name: "Verman River", description: "Zwaar slagveld 1941; Sovjet stellingen." },
  { id: 116, lat: 66.94177, lon: 29.019431, name: "Kelloselkä border crossing", description: "Grenspost." },
  { id: 117, lat: 66.816283, lon: 28.570733, name: "Paikanselkä battle area", description: "Winteroorlog frontlijn." },
  { id: 118, lat: 67.29211, lon: 28.16838, name: "Savukoski war heroes", description: "Monument voor gevallenen." },
  { id: 120, lat: 66.661854, lon: 28.04728, name: "Battle of Ahoniemi", description: "Winteroorlog slag; 200 Sovjet doden." },
  { id: 121, lat: 66.661854, lon: 28.04728, name: "Battle of Ahoniemi", description: "Winteroorlog: Finnen flankeren Sovjet I/596 IR; 200+ Sovjet doden." },

  // Samengevoegd Kemijärvi-cluster → 1 marker
  { id: 126, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },

  { id: 130, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" }, // blijft dezelfde locatie
  { id: 131, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 132, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 135, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 136, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 139, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 142, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 148, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 155, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 156, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 157, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 159, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 161, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 162, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 171, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 174, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 181, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 184, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 190, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 191, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },

  // Overige unieke locaties
  { id: 194, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },
  { id: 200, lat: 66.715702, lon: 27.438555, name: "WO2 gebied", description: "WO2 gebied" },

  { id: 201, lat: 66.747771, lon: 29.179356, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 202, lat: 66.917813, lon: 29.014136, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 203, lat: 66.536914, lon: 29.442389, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 204, lat: 67.54906, lon: 28.8863, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 205, lat: 67.131889, lon: 28.21183, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 206, lat: 67.14636, lon: 28.23841, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 207, lat: 67.31483, lon: 28.719875, name: "Mogelijke posities", description: "Geen beschrijving." },
  { id: 208, lat: 67.73424, lon: 28.97931, name: "Mogelijke posities", description: "Geen beschrijving." }
];

// -----------------------------
// MARKER-TYPE LOGICA
// -----------------------------
locaties.forEach(loc => {
    const desc = (loc.description || "").toLowerCase();

    // 1. Geen beschrijving → groene cirkel + naam "Mogelijke posities"
    if (!desc || desc.includes("geen beschrijving")) {
        loc.name = "Mogelijke posities";
        loc.markerType = "greenCircle";
        return;
    }

    // 2. Top-40 → rode ster
    if (top40.includes(loc.id)) {
        loc.markerType = "redStar";
        return;
    }

    // 3. Alles overig → blauwe marker
    loc.markerType = "blueDrop";
});


