import React, { useEffect, useState } from "react";
import axios from "axios";
import { CustomButtonRow, CustomButton } from "../Components/Control/Button";
import {
  CustomCard,
  CustomCardBody,
  CustomCardFooter,
  CustomCardHead,
} from "../Components/Blog/Post";
import styled from "styled-components";
import {
  CustomModal,
  CustomModalFooter,
  CustomInput,
} from "../Components/Modals";

const Blog = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);

  // GET
  const [viewShow, setViewShow] = useState(false);

  // EDIT - update
  const [viewEdit, setEditShow] = useState(false);

  // DELETE
  const [viewDelete, setDeleteShow] = useState(false);

  // NEW - post
  const [viewPost, setViewPost] = useState(false);

  // Data. Setters
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

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
    const Credentials = { title, description };
    axios
      .post(url, Credentials)
      .then((response) => {
        const { statusText, message } = response;
        if (statusText !== "OK") {
          alert(data, message, statusText);
        } else if (title.trim().length > 0 && description.trim().length > 0) {
          alert("blog uploaded succesfully");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    const url = `http://localhost:8000/blogs/${id}`;
    const Credentials = { title, description };
    axios
      .put(url, Credentials)
      .then((response) => {
        const { statusText, message } = response;
        if (statusText !== "OK") {
          alert(data, message, statusText);
        } else {
          GetBlogData();
          alert("blog edited succesfully");
          setEditShow(false);
          setDescription("");
          setTitle("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = () => {
    const url = `http://localhost:8000/blogs/${id}`;
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

  const isDisabled = !title?.trim()?.length || !description?.trim()?.length;

  return (
    <div>
      {/* add new blog */}
      <CustomContainer>
        <CustomButton
          buttonName="Add new Blog"
          onClick={() => {
            setViewPost(true);
            setTitle("");
            setDescription("");
          }}
        ></CustomButton>
      </CustomContainer>
      {/* card html */}
      <CustomContainer>
        {data.map((item, index) => (
          <CustomCard key={index}>
            <CustomCardHead title={item.title}></CustomCardHead>
            <CustomCardBody description={item.description}></CustomCardBody>
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
                    setTitle(item.title);
                    setDescription(item.description);
                    setId(item._id);
                  }}
                ></CustomButton>
                <CustomButton
                  buttonName="Delete"
                  onClick={() => {
                    setDeleteShow(true);
                    setCardData(item, setId(item._id));
                  }}
                ></CustomButton>
              </CustomButtonRow>
            </CustomCardFooter>
          </CustomCard>
        ))}
      </CustomContainer>

      {/*  (NEWWW) view modal */}
      <CustomModal show={viewShow} header="View blog">
        <CustomInput
          readOnly
          onChangeInput={setTitle}
          defaultValue={cardData.title}
        ></CustomInput>
        <CustomInput
          readOnly
          onChangeInput={setDescription}
          defaultValue={cardData.description}
        ></CustomInput>
        <CustomModalFooter
          date={cardData.date}
          onClose={() => setViewShow(false)}
        />
      </CustomModal>

      {/* post modal */}

      <CustomModal show={viewPost} header="Create a blog">
        <label>Title</label>
        <CustomInput
          onChangeInput={setTitle}
          defaultValue={title}
        ></CustomInput>
        <label>Description</label>
        <CustomInput
          onChangeInput={setDescription}
          defaultValue={description}
        ></CustomInput>
        <CustomModalFooter
          onClose={() => {
            setViewPost(false);
          }}
        >
          <CustomButton buttonName="Save" onClick={handleSubmit}></CustomButton>
        </CustomModalFooter>
      </CustomModal>

      {/* edit modal */}

      <CustomModal show={viewEdit} header="Edit your blog">
        <label>Title</label>
        <CustomInput
          onChangeInput={setTitle}
          defaultValue={title}
        ></CustomInput>
        <label>Description</label>
        <CustomInput
          onChangeInput={setDescription}
          defaultValue={description}
        ></CustomInput>
        <CustomModalFooter
          onClose={() => {
            setEditShow(false);
          }}
        >
          <CustomButton buttonName="Save" onClick={handleEdit}></CustomButton>
        </CustomModalFooter>
      </CustomModal>

      {/* delete modal */}

      <CustomModal show={viewDelete} header="Delete blog">
        <CustomModalFooter
          onClose={() => {
            setEditShow(false);
          }}
        >
          <label>Are you sure you want to </label>
          <CustomButton
            buttonName="Delete"
            onClick={handleDelete}
          ></CustomButton>
        </CustomModalFooter>
      </CustomModal>
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
