import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../Components/Control/CustomButton";
import ViewPostModal from "../Components/Blog/ViewModals/ViewPostModal";
import EditPostModal from "../Components/Blog/ViewModals/EditPostModal";
import CreatePostModal from "../Components/Blog/ViewModals/CreatePostModal";
import DeletePostModal from "../Components/Blog/ViewModals/DeletePostModal";
import Post from "../Components/Blog/Post";
import {
  useGetBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useCreateBlogMutation,
} from "../services/blog";

const modals = {
  view: ViewPostModal,
  deleted: DeletePostModal,
  edit: EditPostModal,
  create: CreatePostModal,
};

const Blog = () => {
  const [cardData, setCardData] = useState({});
  const [modalType, setModalType] = useState(null);

  const { data: currentData } = useGetBlogsQuery();
  const [deleteBlog, deleteResult] = useDeleteBlogMutation();
  const [createBlog, createResult] = useCreateBlogMutation();
  const [updateBlog, updateResult] = useUpdateBlogMutation();

  const onShowModal = (type) => {
    setModalType(type);
  };

  const handleSubmit = () => {
    const { title, description, bgColor } = cardData;
    createBlog({ title, description, bgColor });
    onShowModal(null);
  };
  //tag id fix
  const handleEdit = () => {
    const { _id, title, description, bgColor } = cardData;
    updateBlog({ _id, title, description, bgColor });
    onShowModal(null);
  };

  const handleDelete = () => {
    deleteBlog(cardData._id);
    onShowModal(null);
  };

  const handleChange = (name, value) => {
    setCardData({ ...cardData, [name]: value });
  };

  const Modal = modals[modalType];

  const onAddNewPost = () => {
    setCardData({ title: "", description: "", bgColor: "white" });
    onShowModal("create");
  };

  return (
    <div>
      <Title1>Welcome to Blog Site</Title1>
      <CustomContainer>
        <CustomButton
          buttonName="Add new Blog"
          onClick={onAddNewPost}
        ></CustomButton>
      </CustomContainer>
      <CustomContainer>
        {currentData &&
          currentData.map((item, index) => (
            <Post
              key={index}
              item={item}
              onShowModal={onShowModal}
              setCardData={setCardData}
            />
          ))}
      </CustomContainer>

      {modalType && (
        <Modal
          cardData={cardData}
          handleEdit={handleEdit}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          onClose={() => onShowModal(null)}
        />
      )}
    </div>
  );
};
export const CustomContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0 0 0;
`;
const Title1 = styled.h1`
  justify-content: center;
  text-align: center;
`;

export default Blog;
