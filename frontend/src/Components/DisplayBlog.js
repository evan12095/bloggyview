import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {FaEdit} from 'react-icons/fa'
import {ImBin} from 'react-icons/im'
const DisplayBlog = () => {
  const navigate = useNavigate();
  const [update,setUpdate] = useState([])
  const params = useParams();
  useEffect(()=>{
      axios.get(`https://bloggy-view-backend.onrender.com/api/blog/${params.id}`)
      .then((data) => setUpdate(data.data))

    },[params.id])
    const deleteView = (e) => {
      axios.delete(`https://bloggy-view-backend.onrender.com/api/blog/${e.target.value}`,e.target.value)
      setUpdate((view) => {
        return view.filter((i) => i._id !==e.target.value)
      })
      navigate("/")
    }
  return (
    <div className='commonClass container'>
      <div className="card cardItems">
              <div className='card-header text-light' style={{backgroundColor:"navy",textAlign:"center"}}>
              <h5 className="card-title">{update.title} - {update.writer}</h5>
                                <div className='d-inline gap-5 col-4 mx-auto'>
                  <button className='btn btn-success btn-lg blogOptions' onClick={()=>navigate(`/updateView/${update._id}`)}><FaEdit/>&nbsp;Edit</button>
                  <button className='btn btn-danger btn-lg blogOptions' value={update._id} onClick={deleteView}><ImBin/>&nbsp;Delete</button>    
                    </div>
              </div>
              <div className='row items'>
              <div className='col-4'>
              <img width="auto" height="100%" src={update.coverImage} className="card-img-top" alt="..."/>
              </div>
                <div className="col-8">
                <p className="card-text blogText">{update.content}</p>


                </div>
              </div>
          </div>
    </div>
  )
}

export default DisplayBlog