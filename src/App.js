
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';


function App() {

  const [entries, setEntries] = useState(initialEntries)

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your balance:" value="500.00" size="small" />
      <DisplayBalances income="1000.00" expenses="500.00" />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "1000.00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "200.00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "2000.00",
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: "100.00",
    isExpense: true
  },

]