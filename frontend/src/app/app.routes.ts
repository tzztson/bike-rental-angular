import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./wizard/wizard.module').then((m: any) => m.WizardModule),
  },
  {
    path: '**',
    loadChildren: () => import('./wizard/wizard.module').then((m: any) => m.WizardModule),
  },
];
