import React from "react";
import CustomButton from "../../Control/CustomButton";
import CustomInput from "../../Control/CustomInput";
import CustomModal from "../../Modals/CustomModal";
import CustomModalFooter from "../../Modals/CustomModalFooter";

const EditPostModal = ({ cardData, handleEdit, handleChange, onClose }) => {
  const isDisabled =
    !cardData?.title?.trim()?.length || !cardData.description?.trim()?.length;

  return (
    <CustomModal header="Edit your blog">
      <label>Title</label>
      <CustomInput
        onChangeInput={(value) => handleChange("title", value)}
        value={cardData?.title}
      ></CustomInput>
      <label>Description</label>
      <CustomInput
        onChangeInput={(value) => handleChange("description", value)}
        value={cardData?.description}
      ></CustomInput>
      <label>Color</label>
      <CustomInput
        type="color"
        onChangeInput={(value) => handleChange("bgColor", value)}
        value={cardData?.bgColor}
      ></CustomInput>
      <CustomModalFooter onClose={onClose}>
        <CustomButton
          disabled={isDisabled}
          buttonName="Save"
          onClick={handleEdit}
        ></CustomButton>
      </CustomModalFooter>
    </CustomModal>
  );
};

export default EditPostModal;
