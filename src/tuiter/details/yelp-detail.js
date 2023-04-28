import React from 'react';

const ItemDetail = ({ item }) => {
  const {
    name,
    review_count,
    categories,
    display_phone,
    is_closed,
    image_url,
  } = item;

  // Create an array of category titles.
  const categoryTitles = categories.map(category => category.title);

  return (
    <div className='row'>
      <div className='col-12 col-md-4'>
        <img
          src={image_url}
          alt=''
          className='img-thumbnail'
          style={{ width: '150px', height: '150px' }}
        />
      </div>
      <div className='col-12 col-md-8'>
        <div className='row'>
          <div className='col-12'>
            <h4>{name}</h4>
          </div>
          <div className='col-12'>
            <span style={{ color: 'gray' }}>{review_count} reviews</span>
          </div>
          <div className='col-12'>
            <span>{categoryTitles.join(', ')}</span>
          </div>
          <div className='col-12'>
            <span>{display_phone}</span>
          </div>
          <div className='col-12'>
            <p>
              {is_closed ? (
                <span className='text-danger'>Closed</span>
              ) : (
                <span className='text-success'>open</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
