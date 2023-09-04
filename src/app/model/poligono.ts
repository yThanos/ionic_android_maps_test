export class Poligono implements google.maps.PolygonOptions{
    paths: google.maps.LatLng[];
    strokeColor: string;
    strokeOpacity: number;
    strokeWeight: number;
    fillColor: string;
    fillOpacity: number;
    constructor(path: google.maps.LatLng[], strokeColor: string, strokeOpacity: number, strokeWeight: number, fillColor: string, fillOpacity: number){
      this.paths = path;
      this.strokeColor = strokeColor;
      this.strokeOpacity = strokeOpacity;
      this.strokeWeight = strokeWeight;
      this.fillColor = fillColor;
      this.fillOpacity = fillOpacity;
    }
}
