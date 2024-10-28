import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadMovie, removeMovie } from '../store/actions/movieAction';
import { useParams } from 'react-router-dom';

const   MovieDetails = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    }
  },[]);


  return (
    <div className='text-white flex  items-center justify-center h-screen'>
        <h1 className='text-9xl font-bold'>Movie Details</h1>
    </div>
  ) 
}

export default MovieDetails 