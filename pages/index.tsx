import { RootReducer } from '../src/redux/reducer/RootReducer';
import { defaultRootState } from '../src/redux/state/RootState';
import RootSaga from '../src/saga/RootSaga';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import App from '../src/components/App'

export default function Index() {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: defaultRootState
  })

  sagaMiddleware.run(RootSaga);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
