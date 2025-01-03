import React, { useState } from 'react';
import "./Confirmation_card.css"
import SuccesOrFailor from '../SuccessAndfailCard/SuccesAndFailorCard';

const ConfirmationDialog = ({onCancel, title, message}) => {
  const [failorOrSuccess, setFailorOrSuccess] = useState(false);
    return (
      <div>
        {failorOrSuccess && ((Math.floor(Math.random() * (1 - 0 + 1)) + 0 == 1) ?
           <SuccesOrFailor
           ind={1}
           msg={"You have succeeded to delete this group"}
           onOkClick={() => {setFailorOrSuccess(false); onCancel()}}/> :
           <SuccesOrFailor
           ind={0}
           msg={"The process to delete your have failed. Can you check your connection and repeat please ???"}
           onOkClick={() => {setFailorOrSuccess(false); onCancel()}}/>)}
    
        {!failorOrSuccess && (
          <div className="confirmation-dialog">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                fillRule="evenodd"
              ></path>
            </svg>
            <h2>{title}</h2>
            <p>{message}</p>
            <div className="button-container">
              <button className="cancel-button" onClick={() => onCancel()}>
                Cancel
              </button>
              <button className="confirm-button" onClick={() => setFailorOrSuccess(true)}>
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
      );
};

export default ConfirmationDialog;
