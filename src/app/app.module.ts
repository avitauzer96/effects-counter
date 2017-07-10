import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterComponent } from './components/counter/counter.component';
import { CounterEffects } from './effects/counter.effects';
import { AppState } from './reducers/app-state';
import { counterReducer } from './reducers/counter.reducer';
import { userReducer  } from './reducers/users.reducer';
import { activeUserReducer } from './reducers/active-user.reducer';
import { FakeApiService } from './services/fake-api.service';
import { UserEffects } from './effects/user.effects';

const reducers: AppState = {
  counter: counterReducer,
  users: userReducer,
  activeUser: activeUserReducer
};

@NgModule({
  imports:      [
    BrowserModule,
    StoreModule.provideStore(reducers),
    EffectsModule.run(CounterEffects),
    EffectsModule.run(UserEffects)
  ],
  declarations: [ AppComponent, CounterComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ FakeApiService ]
})
export class AppModule { }
