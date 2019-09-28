import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as  _ from "lodash";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  userNames = [];
  data =  [ 
  {
    "username"  : "SammyShark",
    "location"  : "Indian Ocean",
    "online"    : true,
    "followers" : 987
  },
  {
    "username"  : "JesseOctopus",
    "location"  : "Pacific Ocean",
    "online"    : false,
    "followers" : 432
  },
  {
    "username"  : "DrewSquid",
    "location"  : "Atlantic Ocean",
    "online"    : false,
    "followers" : 321
  },
  {
    "username"  : "JamieMantisShrimp",
    "location"  : "Pacific Ocean",
    "online"    : true,
    "followers" : 654
  },
   {
    "username"  : "SammyShark1",
    "location"  : "Indian Ocean",
    "online"    : true,
    "followers" : 987
  },
  {
    "username"  : "JesseOctopus1",
    "location"  : "Pacific Ocean",
    "online"    : false,
    "followers" : 432
  },
  {
    "username"  : "DrewSquid1",
    "location"  : "Atlantic Ocean",
    "online"    : false,
    "followers" : 321
  },
  {
    "username"  : "JamieMantisShrimp1",
    "location"  : "Pacific Ocean",
    "online"    : true,
    "followers" : 654
  }
]

  ngOnInit() {
    let element = document.getElementById("userNameFilter") as HTMLInputElement;
      let event = fromEvent(element, 'keydown');
      let result = event.pipe(debounceTime(1000));
      result.subscribe( (x) =>{
         this.searchUserName(element.value);
      })
  }

  searchUserName(data){
    this.userNames = [];
    for(let i = 0; i < this.data.length ; i++) {
      if(_.includes(this.data[i].username.toLowerCase(), data.toLowerCase())){
        this.userNames.push(this.data[i].username);
      }
    }

  }
  
}