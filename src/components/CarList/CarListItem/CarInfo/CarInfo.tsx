import React from 'react';
import { ReactComponent as CarSvg } from './Car.svg';
import './CarInfo.css';

export interface CarInfoProps {
  name: string;
  model: string;
}

export const CarInfo = ({ name, model }: CarInfoProps) => {
  return (
    <div className="CarInfo">
      <div className="CarLogo">
        <CarSvg />
      </div>
      <div className="CarDetail">
        <div className="CarName">
          <span className="CarNameText">{name}</span>
        </div>
        <div className="CarModel">
          <span className="CarModelText">{model}</span>
        </div>
      </div>
    </div>
  );
};
