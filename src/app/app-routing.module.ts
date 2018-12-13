import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { InicioComponent } from "./pages/inicio/inicio.component";

const app_routes:Routes = [
    { path:'home',component:InicioComponent},
    {path:'about',component:AboutComponent},
    { path:'portfolio',component:PortfolioComponent},
    {path:'item', component: ItemComponent},
    {path:'**',pathMatch:'full',redirectTo:''}
    ];

@NgModule ({
imports: [
    RouterModule.forRoot(app_routes)
],
exports:[
    RouterModule
]
})
export class AppRoutingModule {

}