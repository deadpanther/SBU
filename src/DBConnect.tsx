// import { useAuth0 } from '@auth0/auth0-react'
import { Pool } from 'pg';

export interface UserProps {
  name?: string,
  email?: string,
}
const dburl = "postgresql://neel:GKG6gWo5HVVVFEXGA4P0Sg@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddatabase-new-2064"
const DBConnect = (props: UserProps) =>   {
  const pool = new Pool({
    connectionString: dburl,
  })

  pool.on('connect', ()=> console.log('Postgres connected'))

  
  //
  // EXECUTE QUERY
  //
  pool.query('SELECT version()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
}  
//   return (
//       <div>
//           <div>
//               <h2>{props.email}</h2>
//               <h4>Start from: {props.name}</h4>
//           </div>
//       </div>
//   );
// };
export default DBConnect;


//   const { Client } = require("pg");

// const client = new Client(process.env.DATABASE_URL);

// (async () => {
//   await client.connect();
//   try {
//     const results = await client.query("SELECT NOW()");
//     console.log(results);
//   } catch (err) {
//     console.error("error executing query:", err);
//   } finally {
//     client.end();
//   }
// })();