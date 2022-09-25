import { useAuth0 } from '@auth0/auth0-react'
import DBConnect from './DBConnect';

function InsertIntoDB() {
    const { isAuthenticated, user } = useAuth0();
    return (
      <main style={{ padding: '1rem 0' }}>
        {isAuthenticated
        }<p>Connected!</p>
      </main>
    );
  }
  
  export default InsertIntoDB;