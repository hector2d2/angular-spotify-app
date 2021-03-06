import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify services listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDeGRZYH2H8pQtCBDDviwstmAe4IcuaQy3gAmupRcrnyf4z3fgBrtWnY4-1aht7EcZo5dUeB0c2zYqb2SE'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) =>
        data['albums'].items
      ));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map((data: any) =>
        data.artists.items
      ));

  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe(map((data: any) =>
        data.tracks
      ));
  }
}
