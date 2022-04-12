import React from "react";
import CustomButton from "../../Control/CustomButton";
import CustomInput from "../../Control/CustomInput";
import CustomModal from "../../Modals/CustomModal";
import CustomModalFooter from "../../Modals/CustomModalFooter";

const CreatePostModal = ({
  postShow,
  setPostShow,
  cardData,
  handleSubmit,
  handleChange,
}) => {
  const isDisabled =
    !cardData?.title?.trim()?.length || !cardData.description?.trim()?.length;
  return (
    <CustomModal show={postShow} header="Create a blog">
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
          setPostShow(false);
        }}
      >
        <CustomButton
          disabled={isDisabled}
          buttonName="Save"
          onClick={handleSubmit}
        ></CustomButton>
      </CustomModalFooter>
    </CustomModal>
  );
};

export default CreatePostModal;