import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const UpdateView = () => {
    const navigate = useNavigate();
    const [update,setUpdate] = useState({title:"",writer:"",description:"",content:"",})
    const params = useParams();
    useEffect(()=>{
        axios.get(`https://bloggy-view-backend.onrender.com/api/blog/${params.id}`)
        .then((data) => setUpdate(data.data))
    },[params.id])
const inputHandle=(e)=>{
    setUpdate({...update,[e.target.name] : e.target.value})
}
const handleUpdation = (e)=>{
    e.preventDefault();
    axios.put(`https://bloggy-view-backend.onrender.com/api/blog`,update)
    .then((res) => setUpdate({title:"",writer:"",description:"",content:"",}))
    navigate('/')
}

  return (
    <div className='commonClass container'>
        <form className='input'>
            <h5>Update your Blog</h5>
            <div className='row inputScreen'>
            <div className='col'>
            <div className="mb-4 inputTag">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input name='title' value={update.title} onChange={inputHandle} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-4 inputTag">
            <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
            <input name='writer' value={update.writer} onChange={inputHandle} type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-4 inputTag">
            <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
            <select  class="form-select form-select-sm" aria-label=".form-select-sm example" name='year' onChange={inputHandle} value={update.category || ""}>
            <option value="none" selected  hidden>Select your Blog Category</option>
            <option value="Education">Education Blog</option>
            <option value="Technology">Technology Blog</option>
            <option value="Food">Food Blog</option>
            <option value="Travel">Travel Blog</option>
          </select>
        </div>
            </div>
        <div className='col'>
        <div className="mb-4 inputTag">
            <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
            <textarea rows="12" name='content' value={update.content} onChange={inputHandle} className="form-control" placeholder="Start typing your blog here ..." id="floatingTextarea2" text="text" ></textarea>
        </div>
        </div>
            </div>

            <div className='insideForm'>
        <button type="submit" className="btn btn-secondary onButton" onClick={handleUpdation}>Update my blog</button>
        </div>        </form>
    </div>
  )
}

export default UpdateView