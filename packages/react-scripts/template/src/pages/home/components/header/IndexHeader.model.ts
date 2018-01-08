import { push } from 'react-router-redux';

const LoginModel = {
  namespace: 'indexHeader',
  state: {
    visible: false,
    sport: ''
  },
  effects: {
    *modal({ payload }: any, { put, call }: any) {
      yield put({ type: 'save', payload: { visible: true } });
    }
  },
  reducers: {
    save: (state: any, { payload }: any) => ({ ...state, ...payload })
  }
};

export default LoginModel;
