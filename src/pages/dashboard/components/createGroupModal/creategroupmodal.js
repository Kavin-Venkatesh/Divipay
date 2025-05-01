import React, { useState } from "react";
import Modal from "../../../../components/modal/modal";
import styles from "./creategroupmodal.module.css";

const CreateGroupModal = ({ isOpen, isClose, onGroupCreate }) => {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([
    { name: "", email: "" },
    { name: "", email: "" },
  ]);

  const handleAddMember = () => {
    setMembers([...members, { name: "", email: "" }]);
  };

  const handleRemoveMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const handleSubmit = () => {
    const newGroup = { groupName, members };
    onGroupCreate(newGroup);
    setGroupName("");
    console.log("Members", members);
    setMembers([{ name: "", email: "" }, { name: "", email: "" }]);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Create a New Group"
      onClose={isClose}
      onConfirm={handleSubmit}
    >
      <div className={styles.modalContent}>
        <input
          type="text"
          placeholder="Group Name"
          className={styles.inputField}
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <div className={styles.membersContainer}>
          <h3>Members:</h3>
          {members.map((member, index) => (
            <div key={index} className={styles.memberRow}>
                <p className={styles.memberTitle}>Member {index + 1} :</p>
              <input
                type="text"
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                placeholder="Name"
              />
              <input
                type="email"
                value={member.email}
                onChange={(e) =>
                  handleMemberChange(index, "email", e.target.value)
                }
                placeholder="Email"
              />
              <button onClick={() => handleRemoveMember(index)}>Remove</button>
            </div>
          ))}
          <button className={styles.addMemberButton} onClick={handleAddMember}>
            Add Member
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGroupModal;