import { call, put, take } from "@redux-saga/core/effects";
import axios from "axios";

import entriesTypes, { removeEntryResultRedux } from "../actions/entries.actions";

export function* deleteEntrySaga() {
  while (true) {
    const { payload: { id } } = yield take(entriesTypes.REMOVE_ENTRY)
    yield call(deleteEntry, id)
    yield put(removeEntryResultRedux(id))
  }
}

function deleteEntry(id) {
  axios.delete(`http://localhost:4000/entries/${id}`)
  axios.delete(`http://localhost:4000/values/${id}`)
}