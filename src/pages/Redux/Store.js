import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { projectReducer } from "./Project/Reducer";
import { ChatReducer } from "./Chat/Reducer";
import { commentsReducer } from "./Comment/Reducer";
import { issueReducer } from "./Issue/Reducer";
import { subscriptionReducer } from "./Subscription/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chat: ChatReducer,
  comment: commentsReducer,
  issue: issueReducer,
  subscription: subscriptionReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
