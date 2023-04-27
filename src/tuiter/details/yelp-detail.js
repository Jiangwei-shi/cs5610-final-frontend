import React from 'react';

const ItemDetail = ({ item }) => {
  const { name, reviewNumber, category, phone, isOpen } = item;

  return (
    <div className='row'>
      <div className='col-12 col-md-4'>
        <img
          src='https://via.placeholder.com/150'
          alt=''
          className='img-thumbnail'
        />
      </div>
      <div className='col-12 col-md-8'>
        <div className='row'>
          <div className='col-12'>
            <h4>{name}</h4>
          </div>
          <div className='col-12'>
            <span style={{ color: 'gray' }}>{reviewNumber} reviews</span>
          </div>
          <div className='col-12'>
            <span>{category.join(', ')}</span>
          </div>
          <div className='col-12'>
            <span>{phone}</span>
          </div>
          <div className='col-12'>
            <p>
              {isOpen ? (
                <span className='text-success'>Open</span>
              ) : (
                <span className='text-danger'>Closed</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
