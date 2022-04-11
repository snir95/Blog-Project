import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CustomButton from "../Components/Control/CustomButton";
import CustomButtonRow from "../Components/Control/CustomButtonRow";
import CustomCard from "../Components/Blog/CustomCard";
import CustomCardFooter from "../Components/Blog/CustomCardFooter";
import ViewPostModal from "../Components/Blog/ViewModals/ViewPostModal";
import EditPostModal from "../Components/Blog/ViewModals/EditPostModal";
import CreatePostModal from "../Components/Blog/ViewModals/CreatePostModal";
import DeletePostModal from "../Components/Blog/ViewModals/DeletePostModal";
import Post from "../Components/Blog/Post";

const Blog = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState({});

  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [postShow, setPostShow] = useState(false);

  // Data. Setters

  const GetBlogData = () => {
    const url = "http://localhost:8000/blogs";
    axios
      .get(url)
      .then((response) => {
        const { data, statusText, message } = response;
        if (statusText !== "OK") {
          alert(message, statusText);
        } else {
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    const url = "http://localhost:8000/blogs";
    const { title, description } = cardData;
    axios
      .post(url, { title, description })
      .then((response) => {
        const { statusText, message } = response;
        if (statusText !== "OK") {
          alert(data, message, statusText);
        } else {
          alert("blog uploaded succesfully");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    const url = `http://localhost:8000/blogs/${cardData._id}`;
    const { title, description } = cardData;
    axios
      .put(url, { title, description })
      .then((response) => {
        const { statusText, message } = response;
        if (statusText !== "OK") {
          alert(data, message, statusText);
        } else {
          GetBlogData();
          alert("blog edited succesfully");
          setEditShow(false);
          setCardData({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = () => {
    const url = `http://localhost:8000/blogs/${cardData._id}`;
    axios
      .delete(url)
      .then((response) => {
        const { statusText, message } = response;
        if (statusText !== "OK") {
          alert(data, message, statusText);
        } else {
          alert("blog deleted succesfully");
          GetBlogData();
          setDeleteShow(false);
        }
      })
      .catch((err) => {
        console.log(err);
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
