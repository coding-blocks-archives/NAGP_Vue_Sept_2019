import {
  Module,
  Mutation,
  Action,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';

import store from './index';

@Module({name: 'counter', store, dynamic: true})
class CounterModule extends VuexModule {
  public count: number = 0;

  @Mutation
  public incr(delta: number) {
    this.count += delta;
  }

}

export default getModule(CounterModule);

