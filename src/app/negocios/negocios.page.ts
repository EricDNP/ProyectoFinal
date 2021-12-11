import { StorageService } from './../Services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Negocio } from '../models/negocio.model';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.page.html',
  styleUrls: ['./negocios.page.scss'],
})
export class NegociosPage implements OnInit {

  negocios: Negocio[] = null;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.negocios = this.storageService.getNegocios();
  }

}
