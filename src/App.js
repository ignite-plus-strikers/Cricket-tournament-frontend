import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import MatchSelection from './Scorer/MatchSelection';
import PreMatch from './Scorer/PreMatch';
import AdminDashboard from './Admin/AdminDashboard';
import PlayerForm from './Admin/Player/PlayerForm';
import Display from './Admin/Player/Display';
import ListPlayersComponent from './Admin/Player/ListPlayersComponent'; 
import PlayerAddnUpdate from './Admin/Player/PlayerAddnUpdate';

function App() {
  return (
    <div>
        <Header/>
        <Router>
        <Route exact path="/scorer/matchSelection" component={MatchSelection} />
        <Route exact path="/scorer/matchSelection/prematch" component={PreMatch} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/dashboard/Player/PlayerForm" component={PlayerForm} />
        <Route exact path="/admin/dashboard/Player/Display" component={ListPlayersComponent} />
        <Route path="/admin/dashboard/Player/:id" component={PlayerAddnUpdate} />
        </Router>
        <Footer/>

    </div>
  );
}

export default App;
