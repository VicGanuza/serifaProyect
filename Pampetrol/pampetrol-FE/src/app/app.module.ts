import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './common/menu/menu.component';
import { NegociosComponent } from './negocios/negocios.component';
import { AreasComponent } from './areas/areas.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { AutoridadesComponent } from './autoridades/autoridades.component';
import { BalanceComponent } from './balance/balance.component';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        NegociosComponent,
        AreasComponent,
        InstitucionalComponent,
        AutoridadesComponent,
        BalanceComponent,
        AmbienteComponent,
        ContactoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
