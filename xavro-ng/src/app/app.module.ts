import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { NgxTypedJsModule } from 'ngx-typed-js';
// import {TabsModule} from 'ngx-tabset';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { WelcomeComponent } from './components/common/welcome/welcome.component';
import { AboutComponent } from './components/common/about/about.component';
import { CtaComponent } from './components/common/cta/cta.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { WhyWeDifferentComponent } from './components/common/why-we-different/why-we-different.component';
import { ContactComponent } from './components/common/contact/contact.component';
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
import { DemoSidebarComponent } from './components/common/demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        HomeOneComponent,
        NavbarComponent,
        WelcomeComponent,
        AboutComponent,
        CtaComponent,
        FooterComponent,
        FeedbackComponent,
        WhyWeDifferentComponent,
        ContactComponent,
        HomeTwoComponent,
        HomeThreeComponent,
        HomeFourComponent,
        HomeFiveComponent,
        HomeSixComponent,
        HomeSevenComponent,
        HomeEightComponent,
        HomeNineComponent,
        HomeTenComponent,
        HomeElevenComponent,
        HomeTwelveComponent,
        HomeThirteenComponent,
        BlogDetailsComponent,
        DemoSidebarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        CarouselModule,
        FormsModule,
        CountUpModule,
        TooltipModule,
        NgxTypedJsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
