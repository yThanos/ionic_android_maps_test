import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('map')mapRef: ElementRef;

  mapa: GoogleMap;
  ionViewDidEnter(){
    this.createMap();
  }

  marker: Marker = {
    coordinate: {
      lat: -29.715674957530123,
      lng: -53.715002212004485
    },
    title: "Biblioteca Central Da UFSM",
    snippet: "A Biblioteca Central da UFSM é um órgão de apoio da Pró-Reitoria de Graduação. Coordena o Sistema de Bibliotecas da UFSM (SiB-UFSM).",
    opacity: 0.8
  }

  polygonOptions = {
    points: [
      [10, 10],
      [20, 20],
      [30, 30],
      [40, 40],
      [50, 50],
    ],
    strokeColor: '#0000ff',
    fillColor: '#00ffff',
    strokeWidth: 5,
  }

  async createMap(){
    this.mapa = await GoogleMap.create({
      id: "my_map",
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      config: {
        center: {
          lat: -29.720026670824154,
          lng: -53.7175518200379
        },
        zoom: 16
      }
    })

    this.mapa.addPolygons([this.polygonOptions]);
    //marker.setMap(map);
    //polygon.setMap(map);
  }
}
/*


let map = new google.maps.Map(document.getElementById("mapa") as HTMLElement, {
      center: { lat: -29.720026670824154, lng: -53.7175518200379 },
      zoom: 16,
    });
    let polygon = new google.maps.Polygon({
      paths:[
        new google.maps.LatLng(-29.71591558004931,-53.71481397158000),
        new google.maps.LatLng(-29.71598066995641,-53.71520914011945),
        new google.maps.LatLng(-29.71543628034292,-53.71532837200635),
        new google.maps.LatLng(-29.71537414873194,-53.71492979684156),
        new google.maps.LatLng(-29.71591558004931,-53.71481397158000)
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(-29.715674957530123, -53.715002212004485),
      map: map,
      visible: false
    });

    let infoWindow = new google.maps.InfoWindow({
      content: "<div style='display:flex;flex-direction:row;justify-content:space-between;'><img src='https://imgur.com/MWeNnx6.png' width='100' height='100'><div style='width: 10px;'></div><div style='display:flex;flex-direction:column;justify-content:center;'><b>Biblioteca Central Da UFSM</b><p>A Biblioteca Central da UFSM é um órgão de apoio da Pró-Reitoria de Graduação. Coordena o Sistema de Bibliotecas da UFSM (SiB-UFSM).</p></div></div>",
      ariaLabel: "Area 1"
    });



    polygon.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map
      });
    })





const northeast = [-29.710317267445962, -53.708645705427465]
const southwest = [-29.727996585731866, -53.72328774178500]
const teste = () =>{
    GoogleMap.create({
      id: "my_map",
      element: document.getElementById("map")!,
      apiKey: environment.mapsKey,
      config: {
        center: {
          lat: -29.720026670824154,
          lng: -53.7175518200379
        },
        zoom: 16
      }
    });
    let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -29.720026670824154, lng: -53.7175518200379 },
      zoom: 16,
    });
    let polygon = new google.maps.Polygon({
      paths:[
        new google.maps.LatLng(-29.71591558004931,-53.71481397158000),
        new google.maps.LatLng(-29.71598066995641,-53.71520914011945),
        new google.maps.LatLng(-29.71543628034292,-53.71532837200635),
        new google.maps.LatLng(-29.71537414873194,-53.71492979684156),
        new google.maps.LatLng(-29.71591558004931,-53.71481397158000)
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(-29.715674957530123, -53.715002212004485),
      map: map,
      visible: false
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "Area 1",
      ariaLabel: "Area 1"
    });

    polygon.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map
      });
    })
    marker.setMap(map);
    polygon.setMap(map);
}
*/
