import React from "react";
import CustomButton from "../Control/CustomButton";
import CustomButtonRow from "../Control/CustomButtonRow";
import CustomCard from "./CustomCard";
import CustomCardFooter from "./CustomCardFooter";

const Post = ({
  item,
  setViewShow,
  setEditShow,
  setCardData,
  setDeleteShow,
}) => {
  return (
    <CustomCard title={item.title} description={item.description}>
      <CustomCardFooter date={item.date}>
        <CustomButtonRow>
          <CustomButton
            buttonName="View"
            onClick={() => {
              setViewShow(true);
              setCardData(item);
            }}
          ></CustomButton>
          <CustomButton
            buttonName="Edit"
            onClick={() => {
              setEditShow(true);
              setCardData(item);
            }}
          ></CustomButton>
          <CustomButton
            buttonName="Delete"
            onClick={() => {
              setDeleteShow(true);
              setCardData(item);
            }}
          ></CustomButton>
        </CustomButtonRow>
      </CustomCardFooter>
    </CustomCard>
  );
};

export default Post;
