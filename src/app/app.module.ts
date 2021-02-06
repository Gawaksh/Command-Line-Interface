import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalTabComponent } from './components/terminal-tab/terminal-tab.component';
import { TerminalComponent } from './components/terminal-tab/terminal/terminal.component';
import { HeaderComponent } from './shared/UI-components/header/header.component';
import { FooterComponent } from './shared/UI-components/footer/footer.component';
import { ServersComponent } from './components/servers/servers.component';

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
    AppRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
