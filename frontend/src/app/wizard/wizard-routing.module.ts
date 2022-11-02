import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WizardComponent } from './pages/wizard/wizard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', // /wizard
        pathMatch: 'full',
        // component: wizardPageComponent, Old page , not implemented yet
        component: WizardComponent,
      },
      {
        path: 'edit', // /wizard/edit
        component: WizardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
