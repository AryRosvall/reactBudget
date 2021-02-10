
import { Container, Header, Statistic, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';


function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your balance:" value="500.00" size="small" />
      <DisplayBalances income="1000.00" expenses="500.00" />

      <MainHeader title="History" type="h3" />

      <EntryLine description="holi" isExpense value="10.00" />
      <EntryLine description="holi2" value="10.00" />
      <EntryLine description="holi3" isExpense value="10.00" />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
