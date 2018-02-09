import {SubscriptionAPI} from "dva";

declare module 'dva' {
  import { Dispatch } from "react-redux";
  export { connect } from 'react-redux'; // tslint:disable-line
  export interface Dva {
    model: (p: any) => void;
    router: (p: any) => any;
    start: (root: HTMLElement | null) => any;
    _store: {
      dispatch: Dispatch<any>;
    };
  }
  const _dva: (p: { history: any }) => Dva;
  export interface Model {
    namespace: string;
    state: object;
    subscriptions: {
      setup({ history, dispatch }: any): void;
    };
    effects?: object;
    reducers?: object;
  }
  export interface Action {
    type: any;
    payload?: object;
  }
  export interface Dispatch {
    <A extends Action>(action: A): A;
  }
  export default _dva;
}