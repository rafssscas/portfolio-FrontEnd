import { NgModule } from '@angular/core';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import {NeweducacionComponent} from "./componentes/educacion/neweducacion.component";
import {EditExperienciaComponent} from "./componentes/experiencia/edit-experiencia/edit-experiencia.component";
import {EditeducacionComponent} from "./componentes/educacion/editeducacion.component";
import {NewSkillComponent} from "./componentes/hys/new-skill.component";
import {EditSkillComponent} from "./componentes/hys/edit-skill.component";
  const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    { path: 'newskill', component: NewSkillComponent},
    { path: 'editskill/:id', component: EditSkillComponent}

  ];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
