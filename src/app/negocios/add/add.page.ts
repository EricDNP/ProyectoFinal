import { StorageService } from './../../Services/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  tipos = ["Grande", "Mediana", "Pequeña", "Microempresa"];

  constructor(private storageService: StorageService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async guardarNegocio(nombre, foto, tipo, telefono, direccion, latitud, longitud) {
    if(nombre == "" || foto == "" || tipo == "" || telefono == ""
      || direccion == "" || latitud == "" || longitud == "") {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Debe ingresar todos los parametros para continuar',
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      
    }
  }

}
