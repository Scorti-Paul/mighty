import './../style/users.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Footer from './Footer'

const User = () => {

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(12)
  const [pageCount, setPageCount] = useState(0)

  const getData = async () => {
    const res = await axios.get('https://randomuser.me/api/?&results=50&seed=abc')
    const data = res.data.results;
    const slice = data.slice(offset, offset + perPage)
    const postData = slice.map(user => <div className='user' key={user.login.username}>
      <img src={user.picture.large} alt={user.login.username} />
      <p className='name'>{`${user.name.first} ${user.name.last} `}</p>
      <p className='phone'>{`${user.phone}`}</p>
      <p className='location'>{`${user.location.country}, ${user.location.state} - ${user.location.city}`}</p>
    </div>)

    setData(postData)
    setPageCount(Math.ceil(data.length / perPage))
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  }

  useEffect(() => {
    getData()
  }, [offset])


  return (
    <>
      <div className='users'>
        <h1>Generate Random Users</h1>
        <div className="user-container">
          {data}
        </div>
        <div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default User