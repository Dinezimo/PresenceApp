import React, { useState } from 'react';
import './BulkCard.css';
import XlxsTemplate from './Template_img_card';

const BulkCard = ({ img_template, downloadable, onReturn }) => {
  const [display_xlxs_template, setDisplay_xlxs_template] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file);
  };

  const handleUploadClick = () => {
    document.getElementById('fileUploadInput').click();
  };

  return (
    <div>
      {display_xlxs_template && <XlxsTemplate picture={img_template} onReturn={() => {setDisplay_xlxs_template(false)}}/>}
      {!display_xlxs_template && (
    <div className='bulkContainer'>
      <div className='template'>
        <h2 className='bulk_small_title'>xmlns file template</h2>
        <img className='bulk_small_illustration' src={img_template} alt='Template illustration' onClick={() => setDisplay_xlxs_template(true)}/>
      </div>
      <div className='bulk_button'>
          <button><a href={downloadable} download="template.xlsx">Download a template</a></button>
        <input
          type='file'
          id='fileUploadInput'
          accept='.xlsx'
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button onClick={handleUploadClick}>Upload a xlsx file</button>
        <button onClick={onReturn}>Return</button>
      </div>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
    )}
    </div>
  );
};

export default BulkCard;
