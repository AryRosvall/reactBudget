
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {

  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += parseFloat(entry.value)
      }
      return totalIncome += parseFloat(entry.value)
    })
    console.log("income ", totalIncome, "expenses ", totalExpenses)

    setTotalIncome(totalIncome)
    setTotalExpenses(totalExpenses)
    setTotal(totalIncome - totalExpenses)
  }, [entries])

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }
  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    })
    console.log("🚀 ~ file: App.js ~ line 58 ~ addEntry ~ result", result)
    setEntries(result)
    resetEntry()
  }

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your balance:" value={total} size="small" />
      <DisplayBalances income={totalIncome} expenses={totalExpenses} />
      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
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