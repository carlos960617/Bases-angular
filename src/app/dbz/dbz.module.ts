import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//para directivas como ngif, for, switch etc. Si ya se ha cargado por otro módulo se cargara una única vez
import { MainPageComponent} from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, ListComponent, FormComponent],//listcomponent lo exportaremos a través de mainpage
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainPageComponent],
})

export class DbzModule { }
