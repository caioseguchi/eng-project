import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { CalculatorW } from './pages/calculator-w/calculator-w';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'calculator-w', component: CalculatorW },
];
