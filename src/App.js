import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import MatchSelection from './Scorer/MatchSelection';
import PreMatch from './Scorer/PreMatch';
import AdminDashboard from './Admin/AdminDashboard';
import ListPlayersComponent from './Admin/Player/ListPlayersComponent'; 
import PlayerAddnUpdate from './Admin/Player/PlayerAddnUpdate';
import AddForm from './Admin/Player/AddForm';
import FixturesForm from './Admin/Fixtures/FixturesForm';
import TeamForm from './Admin/Team/TeamForm';
import SeriesForm from './Admin/Series/SeriesForm';



function App() {
  return (
    <div>
        <Header/>
        <Router>
        <Route exact path="/scorer/matchSelection" component={MatchSelection} />
        <Route exact path="/scorer/matchSelection/prematch" component={PreMatch} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/dashboard/PlayerDisplay" component={ListPlayersComponent} />
        <Route path="/admin/dashboard/Player/:id" component={PlayerAddnUpdate} />
        <Route path="/admin/dashboard/PlayerAddForm" component={AddForm} />
        <Route path="/admin/dashboard/FixtureAddForm" component={FixturesForm} />
        <Route path="/admin/dashboard/TeamAddForm" component={TeamForm} />
        <Route path="/admin/dashboard/SeriesAddForm" component={SeriesForm} />
        
       
        </Router>
        <Footer/>

    </div>
  );
}

export default App;
