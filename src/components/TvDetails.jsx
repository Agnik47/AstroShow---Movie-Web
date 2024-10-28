import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncLoadTv } from '../store/actions/tvAction';
import { removeTv } from '../store/reducers/TvSlice';

const TvDetails = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    }
  },[]);
  
  return (
    <div>TvDetails</div>
  )
}

export default TvDetails