import React from 'react';

//styles Import
import styles from '../navBar/navBar.module.css';

//assets Import
import Logo from '../../../../assets/image.png';
import Harvey from '../../../../assets/harvey.jpg'

const NavBar =  () =>{
    return(
        <div className= {styles.navBarContainer}>
            <div className={styles.imageContainer}>
                <img className= {styles.logoImage} src={Logo} alt = "DiviPay Logo" />
            </div>
            <div className= {styles.detailsContainer}>
                <img className={styles.profileAvatar} src={Harvey} alt="Profile Pic" />
            </div>
        </div>
    )
}

export { NavBar };