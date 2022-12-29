import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Input = () => {
    const navigate = useNavigate();
    const [newView,setNewView] = useState({title:"",writer:"",description:"",content:"",coverImage:""})

    const handleReviewSubmit =async (e) => {
            e.preventDefault();
           await axios.post(`https://bloggy-view-backend.onrender.com/api/blog`,newView)
            .then((res) => console.log(res))
            navigate('/')
    }

    const inputHandle = (e) => {
        setNewView({...newView,[e.target.name] : e.target.value })
    }

  return (
    <div className='commonClass container'>
        <form className='input'>
        <h5>Write a Review</h5>
        <hr className='underLine'/>
        <div className='row inputScreen'>
        <div className='col'>
        <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input name='title' value={newView.title} onChange={inputHandle} type="text" placeholder='Enter your Blog Title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
            <input name='writer' value={newView.writer} onChange={inputHandle} type="text" placeholder='Enter your Name' className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
            <select  class="form-select form-select-sm" aria-label=".form-select-sm example" name='category' onChange={inputHandle} value={newView.category || ""}>
            <option value="none" selected hidden>Select your Blog Category</option>
            <option value="Education">Education Blog</option>
            <option value="Technology">Technology Blog</option>
            <option value="Food">Food Blog</option>
            <option value="Travel">Travel Blog</option>
          </select>
        </div>
        <div className='mb-4'>
        <label for="formFile" class="form-label">Cover Image</label>
        <FileBase className="form-control" id="formFile" multiple={false}  onDone={({ base64 }) => setNewView({ ...newView, coverImage: base64 })} />
        </div>
        </div>
        <div className='col'>
        <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
            <textarea
                className="form-control"
                placeholder="Start typing your blog here ..."
                type="text"
                value={newView.content}
                onChange={inputHandle}
                name="content"
                rows="12"
                required            
                >
            </textarea>
        </div>
        </div>
        </div>
        <div className='insideForm'>
        <button type="submit" className="btn btn-secondary onButton" onClick={handleReviewSubmit}>Post my blog</button>
        </div>
        </form>
    </div>
  )
}

export default Input