import React from 'react';
import Image from '../../elements/Image';

const Conversation = ({params}) => {
  if (!params) {
    params = {
      name: "Brian Thompson",
      company: "SV Angel"
    }
  }
  console.log(params);
  return (
    <>
      <div className="conversation">
        <div className="conversation-header">
          <p className="name">{params.name}</p>
          <p className="company">{params.company}</p>
        </div>
      </div>
    </>
  );
}

export default Conversation;