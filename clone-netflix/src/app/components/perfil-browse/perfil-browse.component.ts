import { Component, OnInit } from '@angular/core';

import profiles from '../../../assets/data/profile.json'


interface Profile{
  id:number,
  name:string,
  img:string  
}

@Component({
  selector: 'app-perfil-browse',
  templateUrl: './perfil-browse.component.html',
  styleUrls: ['./perfil-browse.component.css']
})
export class PerfilBrowseComponent implements OnInit {

  profilesAvatar:Profile[] = profiles;
  
  constructor(){ }

  ngOnInit(): void {
  
  }
  
  


}
