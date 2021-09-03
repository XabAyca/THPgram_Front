import React from 'react';

const ErrorModal = ({ errors }) => {


  return (
    <div className="error-modal">
      {errors.map((error) => {
        return <p>{error.detail}</p>;
      })}
    </div>
  );
};

export default ErrorModal;