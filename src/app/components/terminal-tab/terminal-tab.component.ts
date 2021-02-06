import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-terminal-tab',
  templateUrl: './terminal-tab.component.html',
  styleUrls: ['./terminal-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalTabComponent implements OnInit {

  constructor() { }
  public tabs:any=[];
  ngOnInit(): void {
    this.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1', removable: true }
    ];
  }
  
 
  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }
 
  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }

}