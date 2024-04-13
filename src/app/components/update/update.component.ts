import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id:any;
  hero!:any;
  constructor(private act:ActivatedRoute, private service:HeroService,private router:Router){}
  ngOnInit() {    
    this.id=this.act.snapshot.paramMap.get('id');
    this.service.getidhero(this.id).subscribe(
      res=>{this.hero=res},
      err=>{console.log(err)}
    )
  
  }

  image:any;
  selectimage(e:any){
   this.image=e.target.files[0];
   console.log(this.image);
 }


 update(){
  let formeData =new FormData();
  formeData.append('name',this.hero.name)
  formeData.append('power',this.hero.power)
  formeData.append('image',this.image)
  console.log(formeData);
  this.service.updateHero(this.id,formeData).subscribe(
    res=>{console.log(res);
          this.hero=res;
          this.router.navigate(['listHero'])
          
    },
    err=>{console.log(err)}
  )
 }


}
