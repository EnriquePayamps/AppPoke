import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  url: string = "";
  
  constructor(public pokeService: PokeService) { 
    
  }

  ngOnInit(): void {
    this.pokeService.getPokeData(this.pokeService.name).subscribe((res:any)=>{
      this.url = res.sprites.front_default;
      
    }) 

  }

}
