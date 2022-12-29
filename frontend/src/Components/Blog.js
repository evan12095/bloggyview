import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {AiFillRead} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const Views = () => {
  const filterData = e => {
    const value = e.target.value.toLowerCase();
    const filteredData = search.filter(
      item => (`${item.title}`.toLowerCase().includes(value))
    )
    setView(filteredData);
  }
  const filterCategory = e => {
    const selectedResult = e.target.value;
    if(selectedResult === "none")
    {
      setView(search)
    }
    else{
      const selectedAns = search.filter(
        item => (`${item.category}`.includes(selectedResult))
      );
      setView(selectedAns);
    }

  }
  const [view,setView] = useState([]);
  const [search,setSearch] = useState([]);
  const navigate = useNavigate();

  const displayViews = () => {
      axios.get(`https://bloggy-view-backend.onrender.com/api/blog`)
      .then((res)=>{
        setView(res.data)
        setSearch(res.data)
      })
  }
  useEffect(()=>{
      displayViews();
  },[])

  return (
    <div className='commonClass container'>
    <input className='search' type='text' placeholder='Type any title...' onInput={filterData}/>

        <div class="filterOption form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Education"onInput={filterCategory}/>
  <label class="form-check-label" for="inlineRadio1">Education</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Technology"onInput={filterCategory}/>
  <label class="form-check-label" for="inlineRadio2">Technology</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Food"onInput={filterCategory}/>
  <label class="form-check-label" for="inlineRadio3">Food</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="Travel"onInput={filterCategory}/>
  <label class="form-check-label" for="inlineRadio4">Travel</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="none"onInput={filterCategory}/>
  <label class="form-check-label" for="inlineRadio5">All Blogs</label>
</div>
        <div className='content'>
          {view && view.map((item,index) => (
            <div className="card BlogContent" key={index}>
              <div className='card-header text-light' style={{backgroundColor:"navy",textAlign:"center"}}>
              </div>
              <div className='row Blogitems'>
              <img src={item.coverImage} className="col coverImage" alt="..."/>
              <div className='col'>
              <h5 className="card-title"><b><em>{item.title}</em></b> </h5>
              <p className="card-text para">Author : {item.writer}</p>
              <p className="card-text para">Category : {item.category}</p>
              <button className='btn btn-success para' onClick={()=>navigate(`/displayBlog/${item._id}`)}><AiFillRead/>&nbsp; Read Now</button>
              </div>
              </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Views