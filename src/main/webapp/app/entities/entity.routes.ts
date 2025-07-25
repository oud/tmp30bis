import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'tmp30BisApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'contrat',
    data: { pageTitle: 'tmp30BisApp.contrat.home.title' },
    loadChildren: () => import('./contrat/contrat.routes'),
  },
  {
    path: 'groupe',
    data: { pageTitle: 'tmp30BisApp.groupe.home.title' },
    loadChildren: () => import('./groupe/groupe.routes'),
  },
  {
    path: 'produit',
    data: { pageTitle: 'tmp30BisApp.produit.home.title' },
    loadChildren: () => import('./produit/produit.routes'),
  },
  {
    path: 'garantie',
    data: { pageTitle: 'tmp30BisApp.garantie.home.title' },
    loadChildren: () => import('./garantie/garantie.routes'),
  },
  {
    path: 'taux',
    data: { pageTitle: 'tmp30BisApp.taux.home.title' },
    loadChildren: () => import('./taux/taux.routes'),
  },
  {
    path: 'operation',
    data: { pageTitle: 'tmp30BisApp.operation.home.title' },
    loadChildren: () => import('./operation/operation.routes'),
  },
  {
    path: 'pm-entreprise',
    data: { pageTitle: 'tmp30BisApp.pmEntreprise.home.title' },
    loadChildren: () => import('./pm-entreprise/pm-entreprise.routes'),
  },
  {
    path: 'pm-etablissement',
    data: { pageTitle: 'tmp30BisApp.pmEtablissement.home.title' },
    loadChildren: () => import('./pm-etablissement/pm-etablissement.routes'),
  },
  {
    path: 'adresse',
    data: { pageTitle: 'tmp30BisApp.adresse.home.title' },
    loadChildren: () => import('./adresse/adresse.routes'),
  },
  {
    path: 'telephone',
    data: { pageTitle: 'tmp30BisApp.telephone.home.title' },
    loadChildren: () => import('./telephone/telephone.routes'),
  },
  {
    path: 'email',
    data: { pageTitle: 'tmp30BisApp.email.home.title' },
    loadChildren: () => import('./email/email.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
