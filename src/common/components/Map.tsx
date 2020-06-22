import React from "react";
import {
  Map,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
  Viewport,
} from "react-leaflet";
import * as Leaflet from "leaflet";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const center: [number, number] = [51.505, -0.09];

const polyline: Leaflet.LatLngExpression[] = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
];

const viewport: Viewport = {
  center,
  zoom: 13,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mapRoot: {
      width: "100%",
      height: "100%",
    },
  })
);
const LeafletMap = () => {
  const classes = useStyles();
  return (
    <Map viewport={viewport} className={classes.mapRoot}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker center={center} color="blue" radius={10} />
      <CircleMarker center={[51.51, -0.12]} color="#238383" radius={10}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline color="#21262b" positions={polyline} />
    </Map>
  );
};

export default LeafletMap;