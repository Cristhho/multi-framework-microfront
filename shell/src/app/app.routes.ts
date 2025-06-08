import { Routes } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'qr-generator',
    } as WebComponentWrapperOptions,
  },
];
