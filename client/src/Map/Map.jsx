import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import Box from "@mui/material/Box";

export default function Map({ campground }) {
  const l = campground.geometry.coordinates[0];
  const l2 = campground.geometry.coordinates[1];
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: l, lat: l2 };
  const [zoom] = useState(9.79);
  maptilersdk.config.apiKey = "vfCT5mYblPd5LyyNV4VO";

  useEffect(() => {
    if (map.current) {
      map.current.scrollZoom.disable();
      return; // stops map from intializing more than once
    }

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [center.lng, center.lat],
      zoom: zoom,
      geolocateControl: false,
    });
    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([l, l2])
      .addTo(map.current);
  }, [center.lng, center.lat, zoom]);

  return (
    <Box sx={{ display: "flex" }}>
      <div className="container">
        <div ref={mapContainer} id="map" className="map" />
      </div>
    </Box>
  );
}
