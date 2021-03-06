import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from "uuid";
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions'
import { closeModal } from '../actions/modals.actions';

function useEntryDetails(desc = '', val = '', isExp = '') {
  const [description, setDescription] = useState(desc)
  const [value, setValue] = useState(val)
  const [isExpense, setIsExpense] = useState(isExp)
  const dispatch = useDispatch()

  useEffect(() => {
    setDescription(desc)
    setValue(val)
    setIsExpense(isExp)
  }, [desc, val, isExp])

  const addEntry = () => {
    dispatch(addEntryRedux({
      id: uuidv4(),
      description,
      value,
      isExpense,
    }))

    resetEntry()
  }

  const updateEntry = (id) => {
    dispatch(
      updateEntryRedux(
        id,
        {
          id,
          description,
          value,
          isExpense,
        }
      )
    )
    dispatch(closeModal())
  }

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry
  }
}

export default useEntryDetails
