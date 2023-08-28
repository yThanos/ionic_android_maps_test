import { Component } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mapa?: GoogleMap;

  constructor() {
    setTimeout(() => {
      this.init();
    }, 500);
  }

  async init(){
    this.mapa = await GoogleMap.create({
      id: "my_map",
      element: document.getElementById("map")!,
      apiKey: "AIzaSyDEalAKzT7YOti3UKWwaCsDqbkSRcj8Hsc",
      config: {
        center: {
          lat: -29.720026670824154,
          lng: -53.7175518200379
        },
        zoom: 16
      }
    })
    let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -29.720026670824154, lng: -53.7175518200379 },
      zoom: 16,
    });
  }
}
const northeast = [-29.710317267445962, -53.708645705427465]
const southwest = [-29.727996585731866, -53.72328774178500]
