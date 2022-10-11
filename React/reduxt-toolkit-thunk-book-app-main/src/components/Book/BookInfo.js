import React, { Fragment } from 'react';

const BookInfo = ({info}) => {
  return (
    <Fragment>
      
      <h2>Book Details</h2>
      {
        !(Object.values(info).length > 0) ?
        <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select!
      </div> :
      <div >
        <p className='list-group-item d-flex  justify-content-between align-items-center'>Title : {info.title}</p>
        <p className='list-group-item d-flex  justify-content-between align-items-center '>Inserted By : {info.userName}</p>
        <p className='list-group-item d-flex  justify-content-between align-items-center'>Description : {info.Description} </p>
        <p className='list-group-item d-flex  justify-content-between align-items-center'>Price : {info.price} </p>
      </div>
      }
      
       
    </Fragment>
  );
};

export default BookInfo;
