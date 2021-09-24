import React, {Suspense} from 'react';
import './App.css';
import {store} from "./app/store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from "redux-persist";
import useApp from "./hook/app";

function App() {
  const persistor = persistStore(store)

    const {handleClick, text} = useApp();

  return (
      <React.Fragment>
          <Suspense fallback={<p>loading...!</p>}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={false}>
                    <span>{text}</span>
                    <button onClick={() => handleClick('Hello World')}>Activar texto</button>
                </PersistGate>
            </Provider>
          </Suspense>
      </React.Fragment>

  );
}

export default App;
