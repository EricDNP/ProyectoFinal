import { Component } from '@angular/core';

export interface Tab {
  title: string,
  path: string,
  icon: string
}

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  TabsData: Tab[] = [
    { title:"Negocios", path:"negocios", icon:"business" },
    { title:"Mapa", path:"map", icon:"map" }
  ]

  constructor() {}

}
