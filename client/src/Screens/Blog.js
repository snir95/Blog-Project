import React,{useEffect,useState} from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import axios from 'axios';
import { CustomButtonRow, CustomButton } from '../Components/Control/Button';
import { CustomCard, CustomCardBody, CustomCardContainer, CustomCardFooter, CustomCardHead } from '../Components/Blog/Post';


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
    const [postShow, setPostShow] = useState(false);

    // Data. Setters
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");

    const GetBlogData = () => {
        const url = 'http://localhost:8000/blogs'
        axios.get(url).then(response => {
            const { data, statusText, message } = response;
            if (statusText !== 'OK') {
                alert(message, statusText)
            }
            else {
                setData(data)
            }
        }).catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = () => {
        const url = 'http://localhost:8000/blogs'
        const Credentials = {title, description}
        axios.post(url, Credentials).then(response => {
                const { statusText, message } = response;
                if (statusText !== 'OK') {
                    alert(data, message, statusText)
                }
                else if (title.length>0 && description.length>0){
                   alert('blog uploaded succesfully');
                   window.location.reload();
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEdit = () => {
        const url = `http://localhost:8000/blogs/${id}`
        const Credentials = { title, description}
        axios.put(url, Credentials).then(response => {
                const { statusText, message } = response;
                if (statusText !== 'OK') {
                    alert(data, message, statusText)
                }
                else{
                    GetBlogData();
                    alert('blog edited succesfully');
                    setEditShow(false);
                    setDescription('')
                    setTitle('')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleDelete = () => {
        const url = `http://localhost:8000/blogs/${id}`
        axios.delete(url ).then(response => {
                const { statusText, message } = response;
                if (statusText !== 'OK') {
                    alert(data, message, statusText)
                }
                else{
                    alert('blog deleted succesfully');
                    GetBlogData();
                    setDeleteShow(false);
                    
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect( ()=>{
        GetBlogData();
    },[])

    
    const isDisabled = !title?.trim()?.length || !description?.trim()?.length;

    return (
        <div >
            {/* add new blog */}
            <div className='w-100 '>
                <div className='mt-5 mb-4' >
                    <CustomButton buttonName='Add new Blog'  onClick={() => setPostShow(true)} ></CustomButton>
                </div>
            </div>
            {/* card html */}
            <CustomCardContainer>
                {data.map((item, index) =>
                    <CustomCard  key={index} >
                        <CustomCardHead title={item.title} ></CustomCardHead>
                        <CustomCardBody description={item.description} ></CustomCardBody>
                        <CustomCardFooter date={item.date}>
                            <CustomButtonRow>
                                <CustomButton buttonName='View' onClick={() => {setViewShow(true); setCardData(item)}}></CustomButton>
                                <CustomButton buttonName='Edit' onClick={() => {setEditShow(true); setTitle(item.title); setDescription(item.description); setId(item._id)}}></CustomButton>
                                <CustomButton buttonName='Delete' onClick={() => {setDeleteShow(true); setCardData(item, setId(item._id))}}></CustomButton>
                            </CustomButtonRow>
                        </CustomCardFooter>
                    </CustomCard>
                )}
            </CustomCardContainer>

            {/* <div className='row'>
                {data.map((item,index) =>
                    <Card className='w-25 px-0 m-4' key={index}>
                        <div className='card-header' >
                        <card-title> {item.title}: </card-title>
                        </div>
                        <card-body>
                            <div className='card-body'>
                                    {item.description}
                            </div>
                            <div className='card-footer text-muted'>
                                <p>{item.date}</p>
                                <CustomButtonRow>
                                    <CustomButton buttonName='View' onClick={() => {setViewShow(true); setCardData(item)}}></CustomButton>
                                    <CustomButton buttonName='Edit' onClick={() => {setEditShow(true); setTitle(item.title); setDescription(item.description); setId(item._id)}}></CustomButton>
                                    <CustomButton buttonName='Delete' onClick={() => {setDeleteShow(true); setCardData(item, setId(item._id))}}></CustomButton>
                                    
                                </CustomButtonRow>
                            </div>
                        </card-body> 
                    </Card>
                    )} 
            </div> */}

                {/* view modal */}
            <div className='model-box-view'>
                <Modal
                show={viewShow}
                onHide={()=>{setViewShow(false)}}
                backdrop="static"
                keyboard={false}
                >
                    <ModalHeader closeButton>
                        <ModalTitle>View Blog</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <div className='form-group'>
                                <input text="text" className='form-control' value={cardData.title} readOnly></input>
                            </div>
                            <div className='form-group'>
                                <input text="text" className='form-control' value={cardData.description} readOnly></input>
                            </div>
                            <div className='form-group'>   
                                <input text="text" className='form-control' value={cardData.date} readOnly></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <CustomButton buttonName='Close' onClick={()=>setViewShow(false)}></CustomButton>
                    </ModalFooter>
                </Modal>
            </div>       
                {/* post modal */}
            <div className='model-box-view'>
                <Modal
                show={postShow}
                onHide={()=>{setPostShow(false)}}
                backdrop="static"
                keyboard={false}
                >
                    <ModalHeader closeButton>
                        <ModalTitle>Add new Blog</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <div className='form-group mt-4'>
                                <input text="text" className='form-control' required onChange={(e)=> setTitle(e.target.value)} placeholder="Please enter the Title.." ></input>
                            </div>
                            <div className='form-group my-4'>
                                <input text="text" className='form-control' required onChange={(e)=> setDescription(e.target.value)} placeholder="Please enter the Description." ></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <CustomButton buttonName='Close' onClick={()=>{setPostShow(false)}}></CustomButton>
                        <CustomButton buttonName='Save' type='submit' disabled={isDisabled} className='btn btn-success' onClick={handleSubmit}  ></CustomButton>
                    </ModalFooter>
                </Modal>
            </div>
                {/* edit modal */}
                <div className='model-box-view'>
                <Modal
                show={viewEdit}
                onHide={()=>setEditShow(false)}
                backdrop="static"
                keyboard={false}
                >
                    <ModalHeader closeButton>
                        <ModalTitle>Edit Blog</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <div className='form-group mt-4'>
                                <label>Title</label>
                                <input text="text" className='form-control' required onChange={(e)=> setTitle(e.target.value)} placeholder="Please enter the Title" defaultValue={title} ></input>
                            </div>
                            <div className='form-group my-4'>
                            <label>description</label>
                                <input text="text" className='form-control' required onChange={(e)=> setDescription(e.target.value)} placeholder="Please enter the Description"  defaultValue={description}></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <CustomButton buttonName='Close' onClick={()=> {setEditShow(false)}}>Close</CustomButton>
                        <CustomButton buttonName='Save' type='submit' onClick={handleEdit}>Save</CustomButton>
                    </ModalFooter>
                </Modal>
            </div>
                {/* delete modal */}
                <div className='model-box-view'>
                <Modal
                show={viewDelete}
                onHide={()=>{setDeleteShow(false)}}
                backdrop="static"
                keyboard={false}
                >
                    <ModalHeader closeButton>
                        <ModalTitle>Delete Blog</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            are you sure???
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <CustomButton buttonName='Close' onClick={()=>{setDeleteShow(false)}}></CustomButton>
                        <CustomButton type='submit' buttonName='Delete' onClick={handleDelete}  ></CustomButton>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );

};

export default Blog;
