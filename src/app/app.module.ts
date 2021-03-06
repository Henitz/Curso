import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { OneComponent } from './one/one.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { FormComponent } from './form/form.component';
import { DashComponent } from './dash/dash.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectService } from './select.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoOneComponent } from './produtos/produto-one/produto-one.component';
import { PedidoFormComponent } from './pedidos/pedido-form/pedido-form.component';
import { PedidoListComponent } from './pedidos/pedido-list/pedido-list.component';
import { PedidoOneComponent } from './pedidos/pedido-one/pedido-one.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_services/auth-guard.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormComponent,
    ListComponent,
    OneComponent,
    FormComponent,
    DashComponent,
    DropdownComponent,
    BarChartComponent,
    LineChartComponent,
    ProdutoListComponent,
    ProdutoOneComponent,
    PedidoFormComponent,
    PedidoListComponent,
    PedidoOneComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [SelectService, AuthGuard, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
