import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { HomeFourComponent } from './components/home-four/home-four.component';
import { HomeFiveComponent } from './components/home-five/home-five.component';
import { HomeSixComponent } from './components/home-six/home-six.component';
import { HomeSevenComponent } from './components/home-seven/home-seven.component';
import { HomeEightComponent } from './components/home-eight/home-eight.component';
import { HomeNineComponent } from './components/home-nine/home-nine.component';
import { HomeTenComponent } from './components/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/home-eleven/home-eleven.component';
import { HomeTwelveComponent } from './components/home-twelve/home-twelve.component';
import { HomeThirteenComponent } from './components/home-thirteen/home-thirteen.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'home-four', component: HomeFourComponent},
    {path: 'home-five', component: HomeFiveComponent},
    {path: 'home-six', component: HomeSixComponent},
    {path: 'home-seven', component: HomeSevenComponent},
    {path: 'home-eight', component: HomeEightComponent},
    {path: 'home-nine', component: HomeNineComponent},
    {path: 'home-ten', component: HomeTenComponent},
    {path: 'home-eleven', component: HomeElevenComponent},
    {path: 'home-twelve', component: HomeTwelveComponent},
    {path: 'home-thirteen', component: HomeThirteenComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    // Here add new pages component

    {path: '**', component: HomeOneComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }