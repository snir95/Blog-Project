import React from "react";
import CustomInput from "../../Control/CustomInput";
import CustomModal from "../../Modals/CustomModal";
import CustomModalFooter from "../../Modals/CustomModalFooter";

const ViewPostModal = ({ cardData, onClose }) => {
  return (
    <CustomModal header="View blog">
      <CustomInput readOnly defaultValue={cardData?.title}></CustomInput>
      <CustomInput readOnly defaultValue={cardData?.description}></CustomInput>
      <CustomModalFooter date={cardData.date} onClose={onClose} />
    </CustomModal>
  );
};

export default ViewPostModal;
