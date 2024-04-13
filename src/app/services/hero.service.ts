import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http : HttpClient) { }
  
  url="http://127.0.0.1:3000/"
  addHero(hero:any){
    return this.http.post(this.url+'hero/create',hero)
  }
  allHeros(){
    return this.http.get(this.url+'hero/all')
  }
  deletehero(id:any){
    return this.http.delete(this.url+'hero/supprimer/'+id)
  }
  getidhero(id:any){
    return this.http.get(this.url+'hero/getbyid/'+id)
  }
  updateHero(id:any,hero:any){
    return this.http.put(this.url+'hero/update/'+id,hero)
  }
}
