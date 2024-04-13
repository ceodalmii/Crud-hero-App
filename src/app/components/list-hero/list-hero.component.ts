import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent {
  heros:any;
  constructor(private service:HeroService){}
  ngOnInit() {
      this.service.allHeros().subscribe(
      res=>{this.heros=res},
      err=>{console.log(err)}
    )
  }
  delete(id:any){
    this.service.deletehero(id).subscribe(
      res=>{console.log(res);
      this.ngOnInit()},
      err=>{console.log(err);}
    )
  }

}
