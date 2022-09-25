import { FunctionComponent } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import styles from "./GroupComponent.module.css";
var parse = require('pg-connection-string').parse;
var connectionString = parse("postgresql://neel:GKG6gWo5HVVVFEXGA4P0Sg@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddatabase-new-2064");


// var parse = require('pg-connection-string').parse;
// const Pool = require('pg').Pool
// const dburl = parse("postgresql://neel:GKG6gWo5HVVVFEXGA4P0Sg@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddatabase-new-2064");
//   const pool = new Pool({
    // user: 'neel',
    // host: 'free-tier11.gcp-us-east1.cockroachlabs.cloud',
    // database: 'defaultdb',
    // password: 'GKG6gWo5HVVVFEXGA4P0Sg',
    // port: 26257,
//     connectionString: dburl
//     });


    // const { Client } = require('pg');
    // require('dotenv').config();
    
    // module.exports.getClient = async () => {
    //   const client = new Client({
    //     ssl: true,
    //     user: 'neel',
    //     host: 'free-tier11.gcp-us-east1.cockroachlabs.cloud',
    //     database: 'defaultdb',
    //     password: 'GKG6gWo5HVVVFEXGA4P0Sg',    
    //   });
    //   await client.connect();
    //   return client;
    // };

    
const GroupComponent: FunctionComponent = () => {
  const { isAuthenticated, user } = useAuth0();
  if(user){
    {
    console.log("HEY!!!");
    
    }
  }
  return (
    <div className={styles.groupDiv}>
      <div className={styles.rectangleDiv} />
      <button className={styles.rectangleButton} />
      <img className={styles.ovalIcon} alt="" src="../oval.svg" />
      <img className={styles.ovalIcon1} alt="" src="../oval1.svg" />
      <div className={styles.groupDiv1}>
        <button className={styles.leaguesButton}>
          <div className={styles.helpDiv}>Help</div>
          <img className={styles.pathIcon} alt="" src="../path.svg" />
        </button>
        <input className={styles.scheduleInput} type="text" />
        <div className={styles.cashGamesDiv}>
          <div className={styles.habitsDiv}>Forum</div>
          <div className={styles.frameDiv} />
          <img className={styles.groupIcon} alt="" src="../group-6.svg" />
        </div>
        <div className={styles.tournamentsDiv}>
          <div className={styles.dashboardDiv}>Dashboard</div>
          <img className={styles.fill1Icon} alt="" src="../fill-1.svg" />
        </div>
      </div>
      <div className={styles.medicoDiv}>SBU Hacks</div>
      <div className={styles.rectangleDiv1} />
      <i className={styles.welcomeUserI}> { user?.name }</i>
      <div className={styles.groupDiv2}>
        <img className={styles.rectangleIcon} alt="" src="../rectangle-3.svg" />
        <div className={styles.searchDiv}>Search</div>
        <img className={styles.searchIcon} alt="" src="../search-icon.svg" />
      </div>
      <img
        className={styles.notificationIcon}
        alt=""
        src="../notification.svg"
      />
      <div className={styles.profileDiv}>
        <div className={styles.danielleCampbellDiv}>{ user?.name }</div>
        <img
          className={styles.profileIcon}
          alt=""
          src="../profile-icon@2x.png"
        />
        <img className={styles.path2Icon} alt="" src="../path-2.svg" />
      </div>
      <div className={styles.graphCardDiv}>
        <div className={styles.rectangleDiv2} />
        <b className={styles.timeDays}>{`Time --> Days `}</b>
        <div className={styles.groupDiv3}>
          <div className={styles.groupDiv4}>
            <b className={styles.b}>
              <p className={styles.runningP}>Running</p>
            </b>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-4.svg" />
          </div>
        </div>
        <img className={styles.groupIcon1} alt="" src="../group-5.svg" />
        <img className={styles.path5Icon} alt="" src="../path-5.svg" />
        <div className={styles.div}>5</div>
        <div className={styles.div1}>10</div>
        <div className={styles.div2}>0</div>
        <div className={styles.div3}>20</div>
        <div className={styles.div4}>30</div>
        <div className={styles.div5}>40</div>
        <div className={styles.div6}>50</div>
        <div className={styles.div7}>10</div>
        <div className={styles.div8}>15</div>
        <div className={styles.div9}>20</div>
        <div className={styles.div10}>25</div>
      </div>
      <div className={styles.rectangleDiv3} />
      <textarea className={styles.rectangleTextarea} />
      <div className={styles.cardsDiv}>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-278@2x.png"
        />
        <div className={styles.nicholesDiv}>
          <div className={styles.textDiv}>
            <div className={styles.textDiv}>
              <b className={styles.kB}>2</b>
              <b className={styles.clearedQeueB}>Average Hours:</b>
            </div>
          </div>
        </div>
        <div className={styles.nicholesDiv}>
          <div className={styles.textDiv}>
            <div className={styles.textDiv}>
              <b className={styles.kB}>2</b>
              <b className={styles.clearedQeueB}>Average Hours:</b>
            </div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="../rectangle-277@2x.png"
        />
        <div className={styles.nicholesDiv2}>
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="../rectangle-280@2x.png"
          />
          <div className={styles.nicholesDiv2}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.groupDiv7}>
              <b className={styles.kB2}>
                <p className={styles.runningP}>2</p>
              </b>
              <b className={styles.clearedQeueB2}>Rewards earned:</b>
              <img className={styles.bitmapIcon} alt="" src="../bitmap.svg" />
            </div>
            <img
              className={styles.rectangleIcon4}
              alt=""
              src="../rectangle-279@2x.png"
            />
          </div>
        </div>
        <div className={styles.nicholesDiv}>
          <div className={styles.textDiv}>
            <div className={styles.textDiv}>
              <b className={styles.kB}>2</b>
              <b className={styles.clearedQeueB}>Average Hours:</b>
            </div>
          </div>
        </div>
        <div className={styles.nicholesDiv4}>
          <div className={styles.textDiv4}>
            <div className={styles.groupDiv9}>
              <b className={styles.kB4}>{`3 [<10]`}</b>
              <b className={styles.clearedQeueB4}>Points earned:</b>
            </div>
            <div className={styles.rectangleDiv5} />
            <img className={styles.ractIcon} alt="" src="../ract@2x.png" />
          </div>
        </div>
        <div className={styles.nicholesDiv5}>
          <div className={styles.textDiv5}>
            <div className={styles.textDiv5}>
              <b className={styles.kB5}>3</b>
              <img className={styles.groupIcon2} alt="" src="../group-56.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;