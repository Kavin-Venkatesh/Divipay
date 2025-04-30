
import styles from '../groupContainer/groupContainer.module.css';


import { MdDeleteOutline } from "react-icons/md";

const GroupContainer = ({ groups}) =>{

    return(
          <div className={styles.groups}>
            {groups.map((group) =>(
                    <div className={styles.groupCard} key={group._id}>
                    <div className={styles.groupTitleContainer}>
                        <h4 className={styles.groupTitleName}>
                            {group.title}
                        </h4>
                    </div>
                    <MdDeleteOutline  className={styles.deleteIcon} />
                </div>
                ))}
            </div>
    )
}

export default GroupContainer;