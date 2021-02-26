const types = {
  GET_ENTRIES: 'GET_ENTRIES',
  POPULATE_ENTRIES: 'POPULATE_ENTRIES',
  SET_ENTRY_DETAILS: 'SET_ENTRY_DETAILS',
  ADD_ENTRY: 'ADD_ENTRY',
  ADD_ENTRY_RESULT: 'ADD_ENTRY_RESULT',
  REMOVE_ENTRY: 'REMOVE_ENTRY',
  REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
  UPDATE_ENTRY: 'UPDATE_ENTRY',
}

export default types

export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload }
}
export const addEntryResultRedux = (payload) => {
  return { type: types.ADD_ENTRY_RESULT, payload }
}

export const removeEntryRedux = (id) => {
  return { type: types.REMOVE_ENTRY, payload: { id } }
}

export const removeEntryResultRedux = (id) => {
  return { type: types.REMOVE_ENTRY_RESULT, payload: { id } }
}

export const updateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } }
}

export const getAllEntries = () => {
  return { type: types.GET_ENTRIES }
}
export const populateEntries = (entries) => {
  return { type: types.POPULATE_ENTRIES, payload: entries }
}
export const setEntryDetails = (entryDetails) => {
  console.log("🚀 ~ file: entries.actions.js ~ line 31 ~ getEntryDetails ~ entryDetails", entryDetails)
  return { type: types.SET_ENTRY_DETAILS, payload: entryDetails }
}