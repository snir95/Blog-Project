import React from "react";
import CustomInput from "../../Control/CustomInput";
import CustomModal from "../../Modals/CustomModal";
import CustomModalFooter from "../../Modals/CustomModalFooter";

const ViewPostModal = ({ show, cardData, setViewShow }) => {
  return (
    <CustomModal show={show} header="View blog">
      <CustomInput readOnly defaultValue={cardData?.title}></CustomInput>
      <CustomInput readOnly defaultValue={cardData?.description}></CustomInput>
      <CustomModalFooter
        date={cardData.date}
        onClose={() => setViewShow(false)}
      />
    </CustomModal>
  );
};

export default ViewPostModal;
