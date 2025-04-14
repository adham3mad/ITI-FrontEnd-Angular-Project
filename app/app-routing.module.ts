import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { signinComponent } from './signin/sign-incomponent';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetilesComponent } from './detiles/detiles.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CategoryjeweleryComponent } from './categoryjewelery/categoryjewelery.component';
import { MensclothingComponent } from './mensclothing/mensclothing.component';
import { WomensclothingComponent } from './womensclothing/womensclothing.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ProductGuardService } from './product-guard.service';

const routes: Routes = [
  {path:'all-product',component:StoreListComponent

  },
  {path:'details/:id',component:DetilesComponent 
  
},
{path:'sign-in',component:signinComponent

},
{path:'sign-up',component:SignupComponent

},
{path:'home',component:HomeComponent

},
{path:'',redirectTo:'home',pathMatch:'full'

},
{path:'contactus',component:ContactusComponent

},
{path:'jewelery',component:CategoryjeweleryComponent
},
{path:'mensclothes',component:MensclothingComponent
},
{path:'womensclothes',component:WomensclothingComponent
},
{path:'electronics',component:ElectronicsComponent
},
{path:'additem',component:AddItemComponent,canActivate:[ProductGuardService]
}





,{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
