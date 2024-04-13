import { HeroService } from './../../services/hero.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  hero={
    power: 0 ,
    name:''
  }
  image:any;
  selectimage(e:any){
    this.image=e.target.files[0];
  }
  
  
  constructor(private services:HeroService){}
  ajouterHero(){
    let formData =new FormData();
    formData.append('name',this.hero.name)
    formData.append('power',this.hero.power.toString())
    formData.append('image',this.image)
    this.services.addHero(formData).subscribe(
      res=>{console.log(res);},
      err=>{console.log(err)}
    )
  }
}
