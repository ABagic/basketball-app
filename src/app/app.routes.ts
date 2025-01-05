import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';
import { DraftComponent } from './draft/draft.component';
import { AllTimeDraftComponent } from './all-time-draft/all-time-draft.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'draft',
    component: DraftComponent,
  },
  {
    path: 'all-time-draft',
    component: AllTimeDraftComponent,
  },
];
