import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterComponent } from './components/counter/counter.component';
import { CounterEffects } from './effects/counter.effects';
import { AppState } from './reducers/app-state';
import { counterReducer } from './reducers/counter.reducer';

const reducers: AppState = {
  counter: counterReducer
};

@NgModule({
  imports:      [
    BrowserModule,
    StoreModule.provideStore(reducers),
    EffectsModule.run(CounterEffects)
  ],
  declarations: [ AppComponent, CounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
