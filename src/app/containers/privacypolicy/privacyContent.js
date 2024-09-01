import React from 'react'

import renderPrivacyPolicyTemplate from '../../data/privacy-policy/privacy-policy.template';

import "./index.css"

const PrivacyContent = () => {
  return (
    <div className='container privacy-policy'>
        <div className='content'>
       <p>Last Modified: 1/15/2023</p>
       <div
       className='content'
          dangerouslySetInnerHTML={{ __html: renderPrivacyPolicyTemplate() }}
        />
      </div>
    </div>
  )
}

export default PrivacyContent