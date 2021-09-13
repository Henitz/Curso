import { OneComponent } from './one/one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes', component: ListComponent},
  {path: 'dash', component: DashComponent},
  {path: 'clientes/:id', component: OneComponent},
  {path: 'clientes/form/:id', component: FormComponent },
  {path: 'produtos/produto-form', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
