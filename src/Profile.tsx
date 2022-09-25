import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DBConnect from './DBConnect';
import InsertIntoDB from './InsertIntoDB';
import { Pool, PoolConfig } from 'pg';
import { PrismaClient } from '@prisma/client'
// import InsertIntoDB from './InsertIntoDB';

function Profile() {
  const { isAuthenticated, user } = useAuth0();
//   const dburl = "postgresql://neel:GKG6gWo5HVVVFEXGA4P0Sg@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddatabase-new-2064";
//   const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ...( process.env.PGSSLMODE ? {ssl: { rejectUnauthorized: false }} : {}),
//   })

// pool.on('connect', ()=> console.log('Postgres connected'))

  return (
    <div>
      {/* DBConnect(name={user?.name} email={user?.email}); */}
    <main style={{ padding: '1rem 0' }}>
      {isAuthenticated &&
      <Grid container>
        <Grid container justifyContent="center">
          <Grid sx={{ m: 1 }}>
            <Avatar alt={user?.email} src={user?.picture} sx={{ width: 75, height: 75 }} />
          </Grid>
          <Grid item xs={12} sx={{ m: 1 }}>
            <TextField id="email" label="Email" value={user?.email} variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ m: 1 }}>
            <TextField id="nickname" label="Nickname" value={user?.nickname} variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </Grid>
      }
    </main>
    </div>
  );
}

export default Profile;