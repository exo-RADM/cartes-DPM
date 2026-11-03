var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1 = new ol.format.GeoJSON();
var features_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1 = format_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1.readFeatures(json_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1.addFeatures(features_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1);
var lyr_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1, 
                style: style_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1,
                popuplayertitle: '2026-10-28 - Données Google Maps de ITO World - EXO station entrances',
                interactive: true,
    title: '2026-10-28 - Données Google Maps de ITO World - EXO station entrances<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_0.png" /> Ahuntsic<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_1.png" /> Anjou<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_2.png" /> Baie-d\'Urfé<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_3.png" /> Beaconsfield<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_4.png" /> Beaurepaire<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_5.png" /> Blainville<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_6.png" /> Bois-de-Boulogne<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_7.png" /> Candiac<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_8.png" /> Cedar Park<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_9.png" /> Centrale<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_10.png" /> Chabanel<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_11.png" /> De la Concorde<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_12.png" /> Delson<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_13.png" /> Dorion<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_14.png" /> Dorval<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_15.png" /> Du Canal<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_16.png" /> Hudson<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_17.png" /> Île-Perrot<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_18.png" /> Lachine<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_19.png" /> Longueuil-Saint-Hubert<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_20.png" /> Lucien-L\'Allier<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_21.png" /> Mascouche<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_22.png" /> McMasterville<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_23.png" /> Mirabel<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_24.png" /> Mont-Saint-Hilaire<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_25.png" /> Montréal-Ouest<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_26.png" /> Parc<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_27.png" /> Pincourt<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_28.png" /> Pine Beach<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_29.png" /> Pointe-aux-Trembles<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_30.png" /> Pointe-Claire<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_31.png" /> Repentigny<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_32.png" /> Rivière-des-Prairies<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_33.png" /> Rosemère<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_34.png" /> Saint-Basile-le-Grand<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_35.png" /> Saint-Bruno<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_36.png" /> Saint-Constant<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_37.png" /> Saint-Jérôme<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_38.png" /> Saint-Lambert<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_39.png" /> Saint-Léonard-Montréal-Nord<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_40.png" /> Saint-Michel-Montréal-Nord<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_41.png" /> Sainte-Anne-de-Bellevue<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_42.png" /> Sainte-Catherine<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_43.png" /> Sainte-Rose<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_44.png" /> Sainte-Thérèse<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_45.png" /> Sauvé<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_46.png" /> Terrebonne<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_47.png" /> Valois<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_48.png" /> Vaudreuil<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_49.png" /> Vendôme<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_50.png" /> Vimont<br />\
    <img src="styles/legend/20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1_51.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1];
lyr_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1.set('fieldAliases', {'Stop Name': 'Stop Name', 'Entrance Name': 'Entrance Name', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', });
lyr_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1.set('fieldImages', {'Stop Name': '', 'Entrance Name': '', 'stop_lat': '', 'stop_lon': '', });
lyr_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1.set('fieldLabels', {'Stop Name': 'no label', 'Entrance Name': 'inline label - visible with data', 'stop_lat': 'no label', 'stop_lon': 'no label', });
lyr_20261028DonnesGoogleMapsdeITOWorldEXOstationentrances_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});