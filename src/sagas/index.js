import * as entriesSaga from './entriesSaga'
import * as entriesSagaDeletion from './entriesSagaDeletion'
import * as entriesSagaAddition from './entriesSagaAddition'


export function initSagas(sagaMiddleware) {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(entriesSagaAddition).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}