import React from 'react';
import { RiPictureInPictureExitLine } from 'react-icons/ri';
import './Template_img_card.css';

const XlxsTemplate = ({ picture, onReturn}) => {
  return (
    <div className='XlxsTemplateImg' onClick={() => {onReturn()}}>
      <div><RiPictureInPictureExitLine /></div>
      <img 
        className='XlxsTemplatePictuer' 
        src={picture} 
        alt="Template" 
      />
    </div>
  );
};

export default XlxsTemplate;
