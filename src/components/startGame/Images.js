import shortid from 'shortid';
import React from 'react';

export default props =>
  props.images.map((image, i) =>
    <div key={i} className='fadein'>
      {/* <div
        className='delete'
      >
				X
      </div> */}
      <img src={image} alt='' />
    </div>
  )
