import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServersService } from '../../services/servers.service';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverForm: FormGroup;
  columnDefs = [
    { headerName:'Server Name', field: 'server_name' },
    { headerName:'Server Ip', field: 'server_ip' },
    { headerName:'Server Port', field: 'server_port' }
  ];

  rowData = [];
  defaultColDef = {
    width: 350,
    filter: 'agTextColumnFilter',
    resizable: true,
  };
  constructor(private fb: FormBuilder,
    public serversService: ServersService
  ) {
    
    this.serverForm = this.fb.group(this.serversService.profileForm);
  }

  ngOnInit(): void {
  }
  onSubmit = () => {
    console.log(this.serverForm.value);
  }

}
