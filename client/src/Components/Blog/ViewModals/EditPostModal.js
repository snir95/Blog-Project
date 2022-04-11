import React from "react";
import CustomButton from "../../Control/CustomButton";
import CustomInput from "../../Control/CustomInput";
import CustomModal from "../../Modals/CustomModal";
import CustomModalFooter from "../../Modals/CustomModalFooter";

const EditPostModal = ({
  cardData,
  handleEdit,
  handleChange,
  editShow,
  setEditShow,
}) => {
  const isDisabled =
    !cardData?.title?.trim()?.length || !cardData.description?.trim()?.length;

  return (
    <CustomModal show={editShow} header="Edit your blog">
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
      <CustomModalFooter
        onClose={() => {
          setEditShow(false);
        }}
      >
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
