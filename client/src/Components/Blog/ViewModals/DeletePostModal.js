import React from "react";
import CustomButton from "../../Control/CustomButton";
import CustomModal from "../../Modals/CustomModal";
import CustomModalFooter from "../../Modals/CustomModalFooter";

const DeletePostModal = ({ setDeleteShow, deleteShow, handleDelete }) => {
  return (
    <CustomModal show={deleteShow} header="Delete blog">
      <CustomModalFooter
        onClose={() => {
          setDeleteShow(false);
        }}
      >
        <label>Are you sure you want to </label>
        <CustomButton buttonName="Delete" onClick={handleDelete}></CustomButton>
      </CustomModalFooter>
    </CustomModal>
  );
};

export default DeletePostModal;
