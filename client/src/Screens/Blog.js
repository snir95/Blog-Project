import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { CustomButtonRow, CustomButton } from "../Components/Control/Button";
import { CustomModal } from "../Components/Control/Modals/Modal";
import { CustomModalFooter } from "../Components/Control/Modals/ModalFooter";
import { CustomInput } from "../Components/Control/Input";
import { CustomCard } from "../Components/Blog/Post";
import { CustomCardHead } from "../Components/Blog/CardHead";
import { CustomCardBody } from "../Components/Blog/CardBody";
import { CustomCardFooter } from "../Components/Blog/CardFooter";

const Blog = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState({});

  // GET
  const [viewShow, setViewShow] = useState(false);

  // EDIT - update
  const [viewEdit, setEditShow] = useState(false);

  // DELETE
  const [viewDelete, setDeleteShow] = useState(false);

  // NEW - post
  const [viewPost, setViewPost] = useState(false);

  // Data. Setters

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
    const url = `http://localhost:8000/blogs/${id}`;
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

  const handleChange = (name, value) => {
    setCardData({ ...cardData, [name]: value });
  };

  const isDisabled =
    !cardData?.title?.trim()?.length || !cardData.description?.trim()?.length;

  console.log(cardData);

  return (
    <div>
      {/* add new blog */}
      <CustomContainer>
        <CustomButton
          buttonName="Add new Blog"
          onClick={() => {
            setCardData({ title: "", description: "" });
            setViewPost(true);
          }}
        ></CustomButton>
      </CustomContainer>
      {/* card  */}
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
                    console.log("current: ", item);
                    setEditShow(true);
                    setCardData(item);
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
        <CustomInput readOnly defaultValue={cardData?.title}></CustomInput>
        <CustomInput
          readOnly
          defaultValue={cardData?.description}
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
            setViewPost(false);
          }}
        >
          <CustomButton
            disabled={isDisabled}
            buttonName="Save"
            onClick={handleSubmit}
          ></CustomButton>
        </CustomModalFooter>
      </CustomModal>

      {/* edit modal */}

      <CustomModal show={viewEdit} header="Edit your blog">
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

      {/* delete modal */}

      <CustomModal show={viewDelete} header="Delete blog">
        <CustomModalFooter
          onClose={() => {
            setDeleteShow(false);
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
// do i need this?
export const CustomContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
//^^^^
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0 0 0;
`;

export default Blog;
