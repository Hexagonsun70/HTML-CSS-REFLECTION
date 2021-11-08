if (document.getElementById('map')) {
  var mymap = L.map('map', {
    center : [52.576240, 1.135470],
    zoom : 15,
    dragging: false,
    scrollWheelZoom: false
  })};

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiaGV4YWdvbnN1bjcwIiwiYSI6ImNrdThpMWFscDBpamEyd256NDVxajhlOHkifQ.IGt9FonVdy7GbCejH8YXKw'
  }).addTo(mymap);

  var marker = L.marker([52.576240, 1.135470]).addTo(mymap);

  marker.bindPopup("15 Penfold Dr,<br> Wymondham<br> NR18 0WZ,<br> UK");
