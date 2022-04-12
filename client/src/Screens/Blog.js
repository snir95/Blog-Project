import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CustomButton from "../Components/Control/CustomButton";
import ViewPostModal from "../Components/Blog/ViewModals/ViewPostModal";
import EditPostModal from "../Components/Blog/ViewModals/EditPostModal";
import CreatePostModal from "../Components/Blog/ViewModals/CreatePostModal";
import DeletePostModal from "../Components/Blog/ViewModals/DeletePostModal";
import Post from "../Components/Blog/Post";
import api from "../services/api";

const modals = {
  view: ViewPostModal,
  delete: DeletePostModal,
  edit: EditPostModal,
  create: CreatePostModal,
};

const Blog = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState({});
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [postShow, setPostShow] = useState(false);

  const [modalType, setModalType] = useState(null);

  const GetBlogData = () => {
    {
      api.getApi((res) => setData(res));
    }
  };

  const handleSubmit = () => {
    const { title, description } = cardData;
    api.postApi({ title, description }, () => window.location.reload());
  };

  const handleEdit = () => {
    const { title, description } = cardData;
    api.putApi(cardData._id, { title, description }, () => {
      GetBlogData();
      alert("we good");
      setEditShow(false);
      setCardData({});
    });
  };

  const handleDelete = () => {
    console.log("sdfafda");
    api.deleteApi(cardData._id, () => {
      GetBlogData();
      setDeleteShow(false);
    });
  };

  useEffect(() => {
    GetBlogData();
  }, []);

  const handleChange = (name, value) => {
    setCardData({ ...cardData, [name]: value });
  };

  return (
    <div>
      {/* add new blog - row */}
      <CustomContainer>
        <CustomButton
          buttonName="Add new Blog"
          onClick={() => {
            setCardData({ title: "", description: "" });
            setPostShow(true);
          }}
        ></CustomButton>
      </CustomContainer>
      {/* map(card)  */}
      <CustomContainer>
        {data.map((item, index) => (
          <Post
            key={index}
            item={item}
            setViewShow={setViewShow}
            setEditShow={setEditShow}
            setCardData={setCardData}
            setDeleteShow={setDeleteShow}
          />
        ))}
      </CustomContainer>
      {/* View modal */}
      <ViewPostModal
        cardData={cardData}
        show={viewShow}
        setViewShow={setViewShow}
      />
      {/* create modal */}
      <CreatePostModal
        postShow={postShow}
        setPostShow={setPostShow}
        cardData={cardData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {/* edit modal */}
      <EditPostModal
        cardData={cardData}
        handleEdit={handleEdit}
        handleChange={handleChange}
        editShow={editShow}
        setEditShow={setEditShow}
      />
      {/* delete modal */}
      <DeletePostModal
        setDeleteShow={setDeleteShow}
        deleteShow={deleteShow}
        handleDelete={handleDelete}
      />
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

export default Blog;
