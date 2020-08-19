import {SportsCricket,Dashboard} from '@material-ui/icons';
import AdminDashboard from './AdminDashboard';


const Routes = [
    {
        path: '/',
        sidebarName: 'Dashboard',
        navbarName: 'Dashboard',
        icon: Dashboard,
        
        
      },
  {
    path: '/admin/dashboard/PlayerDisplay',
    sidebarName: 'Player Master',
    navbarName: 'Player Master',
    icon: SportsCricket,
    
  },
  {
    path: '/admin/dashboard/TeamDisplay',
    sidebarName: 'Team Master',
    navbarName: 'Team Master',
    icon: SportsCricket,
    
  },
  {
    path: '/admin/dashboard/SeriesDisplay',
    sidebarName: 'Series Master',
    navbarName: 'Series Master',
    icon: SportsCricket,
    
  },
  {
    path: '/admin/dashboard/FixtureDisplay',
    sidebarName: 'Fixtures Master',
    navbarName: 'Fixtures Master',
    icon: SportsCricket,
    
  },
  {
    path: '/admin/dashboard/UmpireDisplay',
    sidebarName: 'Umpire Master',
    navbarName: 'Umpire Master',
    icon: SportsCricket,
    
  },
  {
    path: '/admin/dashboard/RefereeDisplay',
    sidebarName: 'Referee Master',
    navbarName: 'Referee Master',
    icon: SportsCricket,
    
  }
];

export default Routes;