import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ServersService {
  profileForm:any;
  constructor() { 
    this.profileForm = {
      server_name: ['', [Validators.required]],
      server_ip: ['', [Validators.required]],
      server_password:['', [Validators.required]],
      server_port:['', [Validators.required]]
    }
  }
  
}
