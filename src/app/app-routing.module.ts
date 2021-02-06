import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './components/servers/servers.component';
import { TerminalTabComponent } from './components/terminal-tab/terminal-tab.component';

const routes: Routes = [
  { path: 'terminals', component: TerminalTabComponent },
  { path: 'servers', component: ServersComponent },
  { path: '',   redirectTo: '/terminals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
