import { PedidoOneComponent } from './pedidos/pedido-one/pedido-one.component';
import { ProdutoOneComponent } from './produtos/produto-one/produto-one.component';
import { PedidoFormComponent } from './pedidos/pedido-form/pedido-form.component';
import { OneComponent } from './one/one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { PedidoListComponent } from './pedidos/pedido-list/pedido-list.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_services/auth-guard.service';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes', component: ListComponent},
  {path: 'dash', component: DashComponent},
  {path: 'clientes/:id', component: OneComponent},
  {path: 'clientes/form/:id', component: FormComponent },
  {path: 'produtos/produto-form', component: ProdutoFormComponent },
  {path: 'produtos/produto-list', component: ProdutoListComponent},
  {path: 'produtos', component: ProdutoListComponent},
  {path: 'produtos/:codigo' , component: ProdutoOneComponent},
  {path: 'produtos/produto-form/:codigo', component:ProdutoFormComponent },
  {path: 'pedidos/pedido-form', component:PedidoFormComponent },
  {path: 'pedidos/pedido-list', component: PedidoListComponent},
  {path: 'pedidos', component: PedidoListComponent},
  {path: 'pedidos/:codigo', component: PedidoOneComponent},
  {path: 'pedidos/pedido-form/:codigo' ,component: PedidoFormComponent},


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
