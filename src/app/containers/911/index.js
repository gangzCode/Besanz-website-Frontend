import React from 'react'
import './index.css'
import { useHistory } from "react-router-dom";
import render911Template from '../../data/911/911.template';

const NineOneOneContent = ({children}) => {
    const history = useHistory();


    return (
    <div className='modalContainer'>
        <div className='model'>
            <div className='model-content'>

            
            <div className="container privacy-policy">
       <div className='content' dangerouslySetInnerHTML={{ __html: render911Template() }} />
        </div>
        </div>
        <div className='model-footer'>
            <button onClick={()=>history.replace('/')} >Accept</button>
            <button  onClick={()=>history.replace('/')} >Reject</button>
        </div>
        </div>
    </div>
  )
}

export default NineOneOneContent