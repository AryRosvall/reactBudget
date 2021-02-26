import { take, put, delay, call } from "redux-saga/effects";

function double(number) {
  return number * 2
}
export function* testSaga() {
  while (true) {
    console.log("starting saga")
    const state = yield take('TEST_MESSAGE')
    const a = yield call(double, 2)
    const b = yield double(3)
    console.log("FINISH SAGA FUNCTIONS", state)
    console.log("a", a)
    console.log("b", b)
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(1000)
    yield put({
      type: 'TEST_MESSAGE'
    })
  }
}