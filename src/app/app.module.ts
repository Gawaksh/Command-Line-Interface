import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//Modules
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

//Components
import { AppComponent } from './app.component';
import { TerminalTabComponent } from './components/terminal-tab/terminal-tab.component';
import { TerminalComponent } from './components/terminal-tab/terminal/terminal.component';
import { HeaderComponent } from './shared/UI-components/header/header.component';
import { FooterComponent } from './shared/UI-components/footer/footer.component';
import { ServersComponent } from './components/servers/servers.component';

//Services
import { ServersService } from './services/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    TerminalTabComponent,
    TerminalComponent,
    HeaderComponent,
    FooterComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
