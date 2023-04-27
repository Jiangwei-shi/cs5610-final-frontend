import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReviewList from './review-list';
import ItemDetail from './yelp-detail';
import reviews from './reviews';
import item from './item';
import getDetail from '../../services/detail-service';

const DetailScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getDetail(id).then(data => {
      setData(data);
    });
  }, [id]);

  return (
    <div className='d-flex flex-column'>
      <div className='item-detail mb-3'>
        {data && <ItemDetail item={data} />}
      </div>
      <div className='write-a-review'>
        <Link
          to='/write-review'
          className='rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold'
        >
          Write a review
        </Link>
      </div>
      <div className='review-list'>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default DetailScreen;
