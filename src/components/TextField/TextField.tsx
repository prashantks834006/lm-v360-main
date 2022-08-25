import React from 'react';

interface IProps {
  id?: string;
  value?: string;
  placeHolder?: string;
}

const TextField: React.FC<IProps> = ({ id, value, placeHolder }) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeHolder}
      style={{
        padding: '10px',
        background: '#F6F6F6',
        borderRadius: '4px',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '130%',
        color: '#787878',
        borderColor: 'transparent',
      }}
    />
  );
};

export default TextField;
