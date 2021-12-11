import { Negocio } from './../models/negocio.model';
import { Component, OnInit } from '@angular/core';
import { Marker } from '../models/marker.model';
import { StorageService } from '../Services/storage.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map = null;
  negocios: Negocio[] = null;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.negocios = this.storageService.getNegocios();
    this.loadMap();
  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');

    const myLatLng = {
      lat: 18.481959,
      lng: -69.914238
    };

    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      if(this.negocios != null)
        this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.negocios.forEach(negocio => this.addMarker(negocio));
  }

  addMarker(negocio: Negocio) {
    var marker: Marker = negocio.location;
    var mapMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
    this.addInfoToMarker(negocio, mapMarker);
    return mapMarker;
  }

  addInfoToMarker(negocio: Negocio, mapMarker: any) {
      let infoWindowContent = `
      <div id="content" style="color: black;">
        <h2 id="firstHeading" class="firstHeading"> ${negocio.nombre} </h2>
        <p>Tipo: ${negocio.tipo} </p>
        <p>Telefono: ${negocio.telefono} </p>
        <p>Direccion: ${negocio.direccion} </p>
      </div>
      `;

      let infoWindow = new google.maps.InfoWindow({content: infoWindowContent});

      mapMarker.addListener('click', () => {
        infoWindow.open(this.map, mapMarker);
      });
  }

}
