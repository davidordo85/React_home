import { Nav } from 'react-bootstrap';
import { logout } from '../../../api/auth';

const AuthLink = ({ isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Logout' }
    : {
        // as: Link,
        //  to: '/login',
        children: 'Login',
      };

  return <Nav.Link {...props} />;
};

export default AuthLink;
