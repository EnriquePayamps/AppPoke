import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  Info:any
  
  url: string = ""


  constructor(private pokeService: PokeService , public dialog: MatDialog)  { }

  

  ngOnInit(): void {
    this.pokeService.getPokeData(this.Info.name).subscribe((res:any)=>{
      this.url = res.sprites.front_default;
      
    })
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '400px',
    });
    this.pokeService.getPokeName(this.Info.name);

    }
  

}
