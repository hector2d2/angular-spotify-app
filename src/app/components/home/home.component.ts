import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading = true; 
  error = false;
  mensajeError = '';

  constructor(private spotify:SpotifyService) {
    this.loading = true;
     this.spotify.getNewReleases().subscribe((data:any)=>{
      this.nuevasCanciones = data;
      this.loading = false;
     }, (err) =>{
       this.mensajeError = err.error.error.message;
       this.loading = false;
       this.error = true;
     });
   }

  ngOnInit(): void {
  }
  

}
