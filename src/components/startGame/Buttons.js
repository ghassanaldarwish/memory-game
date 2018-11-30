
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props =>
  <form className='buttons fadein' onSubmit={props.onSubmit} >
    {/* <div className='button'>
      <label htmlFor='single'>

      </label>
      <input type='file' id='single' onChange={props.onChange} />
    </div> */}

    <div className='button'>
      <label htmlFor='multi'>
        {/* <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' /> */}
      </label>
      <input type='file' name="gameImgs" id='multi' onChange={props.onChange} multiple required/>
    </div>
		<button type="submit">upload</button>
  </form>
