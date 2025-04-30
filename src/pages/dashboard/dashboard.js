import React , {useState} from 'react';

//styles Import
import styles from '../dashboard/dashboard.module.css';

//assets Import
import ProfileImage from '../../assets/harvey.jpg';
import { IoMdAdd } from "react-icons/io";
import { IoFolderSharp } from "react-icons/io5";

//Components import
import {NavBar} from '../dashboard/components/navBar/navBar.js';
import GroupContainer from './components/groupContainer/groupContainer.js';


//dashboard Page
const DashBoard = () =>{


    const [groups , setGroups] = useState([
        { _id: "001", title: "Trip to Goa" },
        { _id: "002", title: "Food" },
        { _id: "003", title: "Shopping" },
        { _id: "004", title: "Trip to Mumbai" },
        { _id: "005", title: "Gym Buddies" },
        { _id: "006", title: "Office Snacks" },
        { _id: "007", title: "Birthday Party" },
        { _id: "008", title: "Weekend Getaway" },
        { _id: "009", title: "Movie Night" },
        { _id: "010", title: "Roommates Split" }
        
    ])

    return(
        <div class = {styles.mainContainer}>
            <NavBar />

            <div className={styles.topContainer}>
                
                <div className={styles.leftContainer}>
                    <img  className={styles.profileImage}src={ProfileImage} alt='ProfileImage'/>
                    <h1 className= {styles.greetingMessage}>
                        Welcome, Harvey Specter !
                    </h1>
                </div>

                <div className={styles.rightContainer}>

                        {/* cards Container */}
                        <div className={styles.cardContainer}>
                           <div className={styles.card}>
                                <h2 className={styles.cardTitleOwe}>
                                     You Owe
                                </h2>
                                <h2 className={styles.cardAmountOwe}>
                                    ₹ 1200.00
                                </h2>
                           </div>

                           <div className={styles.card}>
                                <h2 className={styles.cardTitleOwe}>
                                     You are Owed
                                </h2>
                                <h2 className={styles.cardAmountOwed}>
                                    ₹ 2500.00
                                </h2>
                           </div>
                        </div>


                        {/* Group Container */}

                        <div className={styles.groupContainer}>
                            <h1 className={styles.yourGroups}>Your groups</h1>

                            <GroupContainer groups={groups}/>

                        </div>
                </div>
            </div>
            
            <div className={styles.bottomContainer}>
                    <div>
                        <button className={styles.createGroupButton}>
                                <IoMdAdd className={styles.addIcon}/>
                                Create Group
                        </button>
                    </div>

                    <button className={styles.joinGroupButton}>
                        <IoFolderSharp className={styles.addIcon}/>
                         Join Group     
                    </button>
            </div>
        </div>
    )
}

export default DashBoard;