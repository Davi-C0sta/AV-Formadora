// src/app/frases/frases.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // <-- Adicione isto
import { FrasesAPIService } from '../frases-api.service';

@Component({
  selector: 'app-frases',
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  templateUrl: './frases.page.html',
  styleUrls: ['./frases.page.scss'],
})
export class FrasesPage {
  imageData: any;
  errorMessage: string = '';

  constructor(private apiService: FrasesAPIService) {}

  buscarImagem() {
    this.apiService.getImageOfTheDay().subscribe(
      (res) => {
        this.imageData = res;
        console.log('Imagem da NASA:', this.imageData);
      },
      (error) => {
        console.error('Erro ao buscar imagem da NASA:', error);
        this.errorMessage = 'Não foi possível obter a imagem do dia.';
      }
    );
  }
}

