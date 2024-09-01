import React from "react";

import "./index.css";

import  TermsAndConditionTemplate  from "../../data/terms-and-condition/terms-and-condition.template";


const TermsAndConditionContent = () => {
  return (
    <div className="container privacy-policy">
       <div
       className='content'
          dangerouslySetInnerHTML={{ __html: TermsAndConditionTemplate() }}
        />
    </div>
  );
};

export default TermsAndConditionContent;
