const LONDON_COORDS = [-0.1123, 51.5032]
const ROUTES_GEOJSON = 'https://cycling.data.tfl.gov.uk/CycleRoutes/CycleRoutes.json'

const map = new mapboxgl.Map({ // eslint-disable-line no-undef
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: LONDON_COORDS,
  zoom: 9
})

map.on('load', () => {
  map.addSource('cycleroutes', {
    type: 'geojson',
    data: ROUTES_GEOJSON
  })

  map.addLayer({
    id: 'cycleroutes-layer',
    type: 'line',
    source: 'cycleroutes',
    paint: {
      'line-color': '#EE6352',
      'line-width': 2
    },
    layout: {
      'line-cap': 'square'
    }
  })
})
