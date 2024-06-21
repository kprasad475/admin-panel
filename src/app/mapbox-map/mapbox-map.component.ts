import { Component, OnInit, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox-map',
  templateUrl: './mapbox-map.component.html',
  styleUrls: ['./mapbox-map.component.scss']
})
export class MapboxMapComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = 'pk.eyJ1Ijoia3ByYXNhZDQ3NSIsImEiOiJjbHhvbDV1OWcwZGRqMmpzOGpmcDc1MWJxIn0.Y6cYUEmrOexap0zIU5D1Sw';
  }

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });

    new mapboxgl.Marker()
      .setLngLat([-74.5, 40])
      .addTo(map);
  }
}
