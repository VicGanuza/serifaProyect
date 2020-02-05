import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NegociosComponent } from './negocios/negocios.component';
import { AreasComponent } from './areas/areas.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { AutoridadesComponent } from './autoridades/autoridades.component';
import { BalanceComponent } from './balance/balance.component';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'negocios',
        component: NegociosComponent
    },
    {
        path: 'areas',
        component: AreasComponent
    },
    {
        path: 'institucional',
        component: InstitucionalComponent
    },
    {
        path: 'autoridades',
        component: AutoridadesComponent
    },
    {
        path: 'balance',
        component: BalanceComponent
    },
    {
        path: 'ambiente',
        component: AmbienteComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
