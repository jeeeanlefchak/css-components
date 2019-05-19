import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { RippleComponent } from './components/ripple/ripple.component';
import { TextEffectComponent } from './components/text-effect/text-effect.component';
import { TextAnimationComponent } from './components/text-animation/text-animation.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListItemsComponent } from './list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    RippleComponent,
    TextEffectComponent,
    TextAnimationComponent,
    SearchboxComponent,
    MenuComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    LoadingScreenComponent,
    RippleComponent,
    TextEffectComponent,
    TextAnimationComponent,
    SearchboxComponent,
    MenuComponent
  ]
})
export class AppModule { }
