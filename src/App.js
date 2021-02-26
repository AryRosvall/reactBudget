import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";

import { getAllEntries } from './actions/entries.actions';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

import './App.css';

function App() {

  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const { isOpen, id } = useSelector(state => state.modals)
  const entries = useSelector(state => state.entries)
  const dispatch = useDispatch()

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])

  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncome = 0
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value)
      }
      return totalIncome += Number(entry.value)
    })

    setTotalIncome(totalIncome)
    setTotalExpenses(totalExpenses)
    setTotal(totalIncome - totalExpenses)
  }, [entries])

  useEffect(() => {
    dispatch(getAllEntries())
  }, [dispatch])

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your balance:" value={total} size="small" />
      <DisplayBalances income={totalIncome} expenses={totalExpenses} />
      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm

      />
      <ModalEdit
        isOpen={isOpen}
        {...entry}
      />
    </Container>
  );
}

export default App;