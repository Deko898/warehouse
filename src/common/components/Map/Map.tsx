import React from "react";
import {
  Map,
  TileLayer,
  CircleMarker,
  Polyline,
  Viewport,
} from "react-leaflet";
import * as Leaflet from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useStyles } from "./map.styles";

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const center: [number, number] = [51.505, -0.09];

const viewport: Viewport = {
  center,
  zoom: 13,
};

interface IPosition {
  coordinates: [number, number];
  color: string;
}
interface IProps {
  polyline: Leaflet.LatLngExpression[];
  positions: IPosition[];
}

const LeafletMap = ({
  polyline,
  positions,
}: IProps) => {
  const classes = useStyles();
  return (
    <Map viewport={viewport} className={classes.mapRoot}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((p,index) => (
        <CircleMarker key={index} center={p.coordinates} color={p.color} radius={10} />
      ))}
      <Polyline color="#21262b" positions={polyline} />
    </Map>
  );
};

export default LeafletMap;
