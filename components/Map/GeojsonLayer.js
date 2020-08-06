import React, {useState} from 'react';
import ReactMapGL, {Layer, Source} from "react-map-gl";
import {MAPBOX_TOKEN} from "../../config/variables";

const GeojsonLayer = ({ geojson }) => {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
    bearing: 0,
    pitch: 0,
    height: '100%',
    width: '100%'
  });
  const [hover, setHover] = useState({});

  const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
      'fill-opacity': 0.4
    }
  };

  const  _renderTooltip = () =>  {
    const {hoveredFeature, x, y} = hover;
    return (
      hoveredFeature && (
        <div className="tooltip" style={{left: x, top: y}}>
          <div>State: {hoveredFeature.properties.name}</div>
        </div>
      )
    );
  }

  const _onHover = e => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = e;
    const hoveredFeature = features && features.find(f => f.layer.id === 'data');

    setHover({hoveredFeature, x: offsetX, y: offsetY});
  };

  return (
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onHover={_onHover}
      >
        <Source type="geojson" data={geojson}>
          <Layer {...dataLayer} />
        </Source>
        {_renderTooltip()}
      </ReactMapGL>
  )
}

export default GeojsonLayer;
