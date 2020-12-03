import './App.css';
import { Header, Footer, Homepage, About, WWD, Donate, Contact, CalendarPage } from './components/common'
import { Link, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'

function App() {
  return (

    <main>
      <Switch>
        <Route path = '/' component = {Homepage} exact />
        <Route path = '/about' component = {About} exact />
        <Route path = '/what_We_Do' component = {WWD} exact />
        <Route path = '/donate' component = {Donate} exact />
        <Route path = '/contact' component = {Contact} exact />
        <Route path = '/calendar' component = {CalendarPage} exact />
      </Switch>
    </main>

  );
}

export default App;
