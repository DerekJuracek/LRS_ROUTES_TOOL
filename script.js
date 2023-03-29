require([
"esri/config",
"esri/Map",
"esri/views/MapView",
"esri/layers/MapImageLayer",
"esri/layers/FeatureLayer",
"esri/widgets/Search",
"esri/Graphic",
"esri/widgets/Bookmarks",
"esri/widgets/BasemapGallery",
"esri/widgets/LayerList",
"esri/widgets/Legend",
"esri/widgets/Print"], (esriConfig, Map, MapView, MapImageLayer, FeatureLayer, Search, Graphic, Bookmarks, BasemapGallery, LayerList, Legend, Print) => {
  const api = esriConfig.apiKey = "AAPK87b9a263a35c4a44809e64bf5f252bce_gAhLbwEuock12F5JkIcuWTTWTz-KkQH4phl4YKRNi9uvwHg-6c4dA_0Q1bQXyqL";
  
  const map = new Map({
    basemap: "arcgis-topographic"
  });

  const view = new MapView({
    map: map,
    center: [-74.006, 40.7128],
    zoom: 11,
    container: "viewDiv",
    constraints: {
      snapToZoom: false
    }
  });
  // const layerUrl = `https://mtagisdev.lirr.org/dosserverdev/rest/services/LRS/DOS_ROW_Network/MapServer/`;

  // const layer = new MapImageLayer({
  //   url: layerUrl
  // });
  // map.add(layer);

  const template = {
    // autocasts as new PopupTemplate()
    title: "{RouteId}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "FROM_STATIONING",
            label: "From Stationing"
          },
          {
            fieldName: "TO_STATIONING",
            label: "To Stationing"
          }
        ]
      }
    ]
  };

  const featureService = `https://mtagisdev.lirr.org/dosserverdev/rest/services/LRS/DOS_ROW_Network/FeatureServer/1`;

  const featurelayer = new FeatureLayer({
    url: featureService,
    apiKey: `yrYL6gtaHTg15i1x9mcBSpcA-1-XRILJ7cfz_ABFtQOwMIcb8w6nwYBvC6ojuOTyjjavE3efsj6aOrUkcwn3yTUMEWstbZpwHCsq9hH4UsCcml4qCJXXnwnNxw_ZGkvxkFHsv9tFSPMiIT9gb2CW7eBjza0JWHhgu4im9Z2E2nqnz72fIct2P0Y4IZvPvOHJbXMA44PvldWTPi5HZfdrbRo0qMLLvhkJKqHRu1Ry9Rw.`,
    popupTemplate: template
  });
  // const searchWidget = new Search({
  //   view: view
  // });

  const searchWidget = new Search({
    view: view,
    allPlaceholder: "Track",
    includeDefaultSources: false,
    sources: [
      {
        layer: featurelayer,
        searchFields: ["RouteID"],
        displayField: "RouteId",
        exactMatch: false,
        outFields: ["RouteId", "FROM_STATIONING", "TO_STATIONING"],
        name: "ROW LRS NETWORK",
        placeholder: "example: IND-D-1"
      },
      {
        name: "ArcGIS World Geocoding Service",
        placeholder: "example: Nuuk, GRL",
        apiKey: "AAPK87b9a263a35c4a44809e64bf5f252bce_gAhLbwEuock12F5JkIcuWTTWTz-KkQH4phl4YKRNi9uvwHg-6c4dA_0Q1bQXyqL",
        singleLineFieldName: "SingleLine",
        url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
      }
    ]
  });


  // Add the search widget to the top right corner of the view
  view.ui.add(searchWidget, {
    position: "top-right"
  });

  // view.ui.move("zoom", "bottom-right");
  // const basemaps = new BasemapGallery({
  //   view,
  //   container: "basemaps-container"
  // });
  // const bookmarks = new Bookmarks({
  //   view,
  //   container: "bookmarks-container"
  // });
  // const layerList = new LayerList({
  //   view,
  //   selectionEnabled: true,
  //   container: "layers-container"
  // });
  // const legend = new Legend({
  //   view,
  //   container: "legend-container"
  // });
  // const print = new Print({
  //   view,
  //   container: "print-container"
  // });

  // map.when(() => {
  //   const { title, description, thumbnailUrl, avgRating } = map.portalItem;
  //   document.querySelector("#header-title").textContent = title;
  //   document.querySelector("#item-description").innerHTML = description;
  //   document.querySelector("#item-thumbnail").src = thumbnailUrl;
  //   document.querySelector("#item-rating").value = avgRating;

  // });

  // let activeWidget;

  //       const handleActionBarClick = ({ target }) => {
  //         if (target.tagName !== "CALCITE-ACTION") {
  //           return;
  //         }

  //         if (activeWidget) {
  //           document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
  //           document.querySelector(`[data-panel-id=${activeWidget}]`).hidden = true;
  //         }

  //         const nextWidget = target.dataset.actionId;
  //         if (nextWidget !== activeWidget) {
  //           document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
  //           document.querySelector(`[data-panel-id=${nextWidget}]`).hidden = false;
  //           activeWidget = nextWidget;
  //         } else {
  //           activeWidget = null;
  //         }
  //       };

  //       document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

  //       let actionBarExpanded = false;

  //       document.addEventListener("calciteActionBarToggle", event => {
  //         actionBarExpanded = !actionBarExpanded;
  //         view.padding = {
  //           left: actionBarExpanded ? 135 : 45
  //         };
  //       });


  // featurelayer.popupTemplate = template;
  //         type: "fields",
  //         fieldInfos: [
  //           {
  //             fieldName: "FROM_STATIONING",
  //             label: "From Stationing"
  //           },
  //           {
  //             fieldName: "TO_STATIONING",
  //             label: "To Stationing"
  //           },
  //         ]


  map.add(featurelayer);
  
  const form1 = document.querySelector("#firstButton");
  const form2= document.querySelector("#secondButton");
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");

  const input3 = document.querySelector("#input3");
  const input4 = document.querySelector("#input4");
  const input5 = document.querySelector("#input5");

  form1.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting normally
  const inputValue1 = input1.value;
  const inputValue2 = input2.value;
  // const inputValue3 = input3.value;
  // const inputValue4 = input4.value;
  // const inputValue5 = input5.value;
  // console.log("Input 3 value: " + inputValue3);
  // console.log("Input 4 value: " + inputValue4);
  // console.log("Input 5 value: " + inputValue5);


  fetch(`https://mtagisdev.lirr.org/dosserverdev/rest/services/LRS/DOS_ROW_Network/MapServer/exts/LRServer/networkLayers/1/measureToGeometry?locations=%5B%7B%22routeId%22%3A%22${inputValue1}%22%2C%22measure%22%3A${inputValue2}%7D%5D&temporalViewDate=&outSR=4326&gdbVersion=&historicMoment=&f=json&token=yrYL6gtaHTg15i1x9mcBSpcA-1-XRILJ7cfz_ABFtQOwMIcb8w6nwYBvC6ojuOTyjjavE3efsj6aOrUkcwn3yTUMEWstbZpwHCsq9hH4UsCcml4qCJXXnwnNxw_ZGkvxkFHsv9tFSPMiIT9gb2CW7eBjza0JWHhgu4im9Z2E2nqnz72fIct2P0Y4IZvPvOHJbXMA44PvldWTPi5HZfdrbRo0qMLLvhkJKqHRu1Ry9Rw.`, {
    method: "GET" 
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok.");
    }
  })
  .then(jsonData => {

    // you can now do something with the input values here
    console.log(jsonData);
    const xcoord = jsonData.locations[0].geometry.x;
    console.log(xcoord);
    const ycoord = jsonData.locations[0].geometry.y;
    console.log(ycoord);
    
    const point = {
      type: "point",
      longitude: xcoord,
      latitude: ycoord
    };
  
    const markerSymbol = {
      type: "simple-marker",
      color: [30, 144, 255],
      outline: {
        color: [255, 255, 255],
        width: 2
      }
    };
    
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });
    
    view.graphics.add(pointGraphic);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
  form1.reset();
  });
 

  form2.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting normally
    const inputValue3 = input3.value;
    const inputValue4 = input4.value;
    const inputValue5 = input5.value;
    fetch(`https://mtagisdev.lirr.org/dosserverdev/rest/services/LRS/DOS_ROW_Network/MapServer/exts/LRServer/networkLayers/1/measureToGeometry?locations=%5B%7B%22routeId%22%3A%22${inputValue3}%22%2C%22fromMeasure%22%3A${inputValue4}%2C%22toMeasure%22%3A${inputValue5}%7D%5D&temporalViewDate=&outSR=4326&gdbVersion=&historicMoment=&f=json&token=yrYL6gtaHTg15i1x9mcBSpcA-1-XRILJ7cfz_ABFtQOwMIcb8w6nwYBvC6ojuOTyjjavE3efsj6aOrUkcwn3yTUMEWstbZpwHCsq9hH4UsCcml4qCJXXnwnNxw_ZGkvxkFHsv9tFSPMiIT9gb2CW7eBjza0JWHhgu4im9Z2E2nqnz72fIct2P0Y4IZvPvOHJbXMA44PvldWTPi5HZfdrbRo0qMLLvhkJKqHRu1Ry9Rw.`, {
      method: "GET"
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then(jsonData => {
      console.log(jsonData);
  
      // Extract the paths from the API response
      const paths = jsonData.locations[0].geometry.paths;
  
      const polyline = {
        type: "polyline",
        paths: paths
      };

      let polylineAtt = {
        Name: inputValue3,
        FromtPt: inputValue4,
        ToPt: inputValue5
      };
  
      const simpleLineSymbol = {
        type: "simple-line",
        color: [226, 119, 40], // Orange
          outline: {
            color: [255, 255, 255],
            width: 2
          }
      };
  
      const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol,
        attributes: polylineAtt

      });
  
      view.graphics.add(polylineGraphic);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
    form2.reset();
  });
});






// const form = document.querySelector("form");
// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const input3 = document.querySelector("#input3");

// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // prevent form from submitting normally
//   const inputValue1 = input1.value;
//   const inputValue2 = input2.value;
//   const inputValue3 = input3.value;
//   console.log("Input 1 value: " + inputValue1);
//   console.log("Input 2 value: " + inputValue2);
//   console.log("Input 3 value: " + inputValue3);
  // you can now do something with the input values here

  // const data = {
  //   attributes: [
  //     {
  //       Route: {
  //         Name: "1005",
  //         Track: inputValue1,
  //         FromPoint: inputValue2,
  //         ToPoint: inputValue3,
  //       },
  //     },
  //   ],
  // };

  // var body2 = JSON.stringify(data);
  // console.log(body2)
  

  
// fetch("https://fmetest.mta.info/fmerest/v3/automations/workflows/fe5ff09a-1c84-45b9-b824-b18c29d76b65/79016efc-aeea-9547-b9f4-e0b6bbc33a6a/message", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Network response was not ok.");
//   })
//   .then(jsonData => {
//     console.log(jsonData);
//     form.reset();
//   })
//   .catch(error => {
//     console.error("There was a problem with the fetch operation:", error);
//     async 
//   });

// });
// });
 
