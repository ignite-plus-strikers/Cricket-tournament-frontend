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
import ShowPlayer from './Admin/Team/ShowPlayer';
import AddPlayer from './Admin/Team/AddPlayer';
import AddTeams from './Admin/Series/AddTeams';
import SeriesComponent from './Admin/Series/SeriesComponent';
import ShowTeams from './Admin/Series/ShowTeams';
import FixtureComponent from './Admin/Fixtures/FixtureComponent';
import TeamComponent from './Admin/Team/TeamComponent';
import TeamUpdate from './Admin/Team/TeamUpdate';
import SeriesUpdate from './Admin/Series/SeriesUpdate';
import AddPlayerr from './Admin/Team/AddPlayerr';
import BackgroundImage from './background_img/BackgroundImage';




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
        <Route path="/admin/dashboard/FixtureDisplay" component={FixtureComponent} />
        <Route path="/admin/dashboard/Team/:id" component={TeamUpdate} />
        <Route path="/admin/dashboard/TeamAddForm" component={TeamForm} />
        <Route path="/admin/dashboard/TeamDisplay" component={TeamComponent} />
        <Route path="/admin/dashboard/TeamShowPlayer/:id" component={ShowPlayer} />
        <Route path="/admin/dashboard/TeamAddPlayer/:id" component={AddPlayer} />
        <Route path="/admin/dashboard/SeriesAddTeam/:id" component={AddTeams} />
        <Route path="/admin/dashboard/SeriesShowTeam/:id" component={ShowTeams} />
        <Route path="/admin/dashboard/SeriesAddForm" component={SeriesForm} />
        <Route path="/admin/dashboard/SeriesDisplay" component={SeriesComponent} />
        <Route path="/admin/dashboard/Series/:id" component={SeriesUpdate} />
        <Route exact path="/admin/dashboard/searchbox" component={AddPlayerr} />
        <Route exact path="/home" component={BackgroundImage} />
       
       
        </Router>
        <Footer/>

    </div>
  );
}

export default App;
