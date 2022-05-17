import React from "react";
import CustomButton from "../Control/CustomButton";
import CustomButtonRow from "../Control/CustomButtonRow";
import CustomCard from "./CustomCard";
import CustomCardFooter from "./CustomCardFooter";

const Post = ({ item, setCardData, onShowModal }) => {
  return (
    <CustomCard
      title={item.title}
      description={item.description}
      bgColor={item.bgColor}
    >
      <CustomCardFooter date={item.date}>
        <CustomButtonRow>
          <CustomButton
            buttonName="View"
            onClick={() => {
              onShowModal("view");
              setCardData(item);
            }}
          ></CustomButton>
          <CustomButton
            buttonName="Edit"
            onClick={() => {
              onShowModal("edit");
              setCardData(item);
            }}
          ></CustomButton>
          <CustomButton
            buttonName="Delete"
            onClick={() => {
              onShowModal("deleted");
              setCardData(item);
            }}
          ></CustomButton>
        </CustomButtonRow>
      </CustomCardFooter>
    </CustomCard>
  );
};

export default Post;
