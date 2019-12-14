import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';
import { ScrumMasterPanelComponent } from './scrum-master-panel/scrum-master-panel.component';


const routes: Routes = [
  {
    path: '',
    component: StoryListComponent
  },
  {
    path: 'scrum-master',
    component: ScrumMasterPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
