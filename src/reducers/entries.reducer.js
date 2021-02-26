import entriesTypes from "../actions/entries.actions";

const entriesReducer = (state = initialEntries, action) => {
  let newEntries
  let index
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload
    case entriesTypes.SET_ENTRY_DETAILS:
      newEntries = [...state]
      index = newEntries.findIndex((entry) => entry.id === action.payload.id);
      newEntries[index] = { ...newEntries[index], ...action.payload }
      return newEntries
    case entriesTypes.ADD_ENTRY_RESULT:
      newEntries = state.concat({ ...action.payload })
      return newEntries
    case entriesTypes.REMOVE_ENTRY_RESULT:
      newEntries = state.filter(entry => entry.id !== action.payload.id)
      return newEntries
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state]
      index = newEntries.findIndex((entry) => entry.id === action.payload.id);
      newEntries[index] = { ...action.payload.entry }
      return newEntries
    default:
      return state
  }
}

var initialEntries = []

export default entriesReducer