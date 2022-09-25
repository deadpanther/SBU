import { FunctionComponent } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { TextField } from "@mui/material";
import styles from "./Wireframe.module.css";

const Wireframe: FunctionComponent = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className={styles.wireframeDiv}>
      <div className={styles.rectangleDiv} />
      <TextField
        className={styles.rectangleTextField}
        sx={{ width: 341 }}
        color="primary"
        variant="filled"
        type="text"
        size="medium"
        margin="none"
      />
      <div className={styles.rectangleDiv1} />
      <img className={styles.rectangleIcon} alt="" />
      <div className={styles.rectangleDiv2} />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-2.svg" />
      <img className={styles.ellipseIcon1} alt="" src="../ellipse-2.svg" />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-2.svg" />
      <div className={styles.rectangleDiv3} />
      <div className={styles.rectangleDiv4} />
      <div className={styles.rectangleDiv5} />
      <img className={styles.maskGroupIcon} alt="" src="../mask-group.svg" />
      <div className={styles.rectangleDiv6} />
      <div className={styles.rectangleDiv7} />
      <div className={styles.rectangleDiv8} />
      <div className={styles.rectangleDiv9} />
      <input className={styles.rectangleInput} type="text" />
      <div className={styles.rectangleDiv10} />
      <div className={styles.rectangleDiv11} />
      <div className={styles.rectangleDiv12} />
      <div className={styles.rectangleDiv13} />
      <div className={styles.rectangleDiv12} />
      <i className={styles.firstName}>First Name</i>
      <div className={styles.rectangleDiv13} />
      <div className={styles.rectangleDiv16} />
      <div className={styles.rectangleDiv17} />
      <div className={styles.rectangleDiv18} />
      <div className={styles.rectangleDiv19} />
      <div className={styles.rectangleDiv20} />
      <div className={styles.rectangleDiv21} />
      <div className={styles.rectangleDiv22} />
      <div className={styles.footerDiv}>Footer</div>
      <div className={styles.editProfileDiv}>
        <p className={styles.blankLineP}>&nbsp;</p>
      </div>
      <div className={styles.rectangleDiv23} />
      <img
        className={styles.bipencilSquareIcon}
        alt=""
        src="../bipencilsquare.svg"
      />
      <i className={styles.myProfile}>My Profile</i>
      <i className={styles.aboutMe}>About me :</i>
      <i className={styles.myNameIsXyz}>My name is Xyz</i>
      <i className={styles.moreInformation}>More Information :</i>
      <i className={styles.lastNameI}>Last Name</i>
      <i className={styles.dateOfBirth}>Date Of Birth</i>
      <i className={styles.bloodTypeI}>Blood Type</i>
      <i className={styles.height}>Height</i>
      <i className={styles.weight}>Weight</i>
      <i className={styles.sexI}>Sex</i>
      <i className={styles.xyzI}>Xyz</i>
      <i className={styles.abcI}>Abc</i>
      <i className={styles.i}>01/18/2005</i>
      <i className={styles.bveI}>B+ve</i>
      <i className={styles.ftI}>6ft</i>
      <i className={styles.kgI}>80kg</i>
      <i className={styles.maleI}>Male</i>
      <i className={styles.ageI}>Age</i>
      <i className={styles.i1}>21</i>
      <i className={styles.atriVyas}>Atri Vyas</i>
      <i className={styles.atrivyasstonybrookedu}>atri.vyas@stonybrook.edu</i>
      <i className={styles.ahmedabadIndia}>Ahmedabad, India</i>
      <i className={styles.maleI1}>Male</i>
      <i className={styles.i2}>03-02-2022</i>
      <i className={styles.photosI}>
        <p className={styles.photos}>Photos :</p>
      </i>
      <i className={styles.editProfile}>
        <p className={styles.photos}>Edit Profile</p>
      </i>
    </div>
  );
};

export default Wireframe;
