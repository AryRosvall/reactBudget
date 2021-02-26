import { call, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

import entriesTypes, { addEntryResultRedux } from "../actions/entries.actions";

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({ payload }) {
  yield call(addEntry, payload)
  yield call(addEntryDetails, payload)
  yield put(addEntryResultRedux(payload))
}

async function addEntry({ id, description }) {
  await axios.post(`http://localhost:4000/entries`, {
    id,
    description
  })
}

async function addEntryDetails({ id, isExpense, value }) {

  await axios.post(`http://localhost:4000/values`, { id, isExpense, value })
}