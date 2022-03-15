import { Component } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  pokeList: Array<any> = [];

   page: number = 0;

   setData(){
     
    this.pokeService.getList(this.page).subscribe((res: any)=>{
      this.pokeList = res.results;
    })
   }


  constructor(private pokeService: PokeService){
    this.setData();
    
  }

  nextPage(){
    this.page +=8;
    this.setData();
    
  }

  prevPage(){
    this.page -=8;

    this.setData();
  }


}
