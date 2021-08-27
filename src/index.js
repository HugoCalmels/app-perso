import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getSheets } from './actions/post.action';
import { getUser } from './actions/user.action';
import { getLibrary } from './actions/libraries.action';
import { getLanguage } from './actions/languages.action';
import { getLesson } from './actions/lesson.action';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
store.dispatch(getSheets());
store.dispatch(getUser());
store.dispatch(getLibrary());
store.dispatch(getLanguage());
store.dispatch(getLesson());


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


