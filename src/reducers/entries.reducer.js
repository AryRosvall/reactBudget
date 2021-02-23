


const entriesReducer = (state = initialEntries, action) => {
  let newEntries
  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat({ ...action.payload })
      return newEntries
    case 'REMOVE_ENTRY':
      newEntries = state.filter(entry => entry.id !== action.payload.id)
      return newEntries
    case 'UPDATE_ENTRY':
      newEntries = [...state]
      const index = newEntries.findIndex((entry) => entry.id === action.payload.id);
      newEntries[index] = { ...action.payload.entry }
      return newEntries
    default:
      return state
  }
}

var initialEntries = [
  {
    id: 1,
    description: "Work redux",
    value: "1000.00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water redux",
    value: 200.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 2000.00,
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: 100.00,
    isExpense: true
  },

]

export default entriesReducer