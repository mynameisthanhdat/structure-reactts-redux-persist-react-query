import { createStore } from 'redux'
import rootReducers from '../redux/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
}

const pReducer = persistReducer(persistConfig, rootReducers as any)

export const store = createStore(pReducer)
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducers>
