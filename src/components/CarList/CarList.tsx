import React from 'react';
import './CarList.css';
import { CarListItem } from './CarListItem/CarListItem';

export interface CarListProps {
    id: string;
}

export const CarList = () => {
    return (
        <div className="CarList">
            <CarListItem
                name="Stephanie Nelson"
                model="DJ8474938304562"
                taskName="Ordering"
                taskStatus="Collec information"
                taskCount={2}
                highlight={true}
            />
            <CarListItem
                name="Elsie Harper"
                model="DJ8474938304562"
                taskName="Production"
                taskStatus="Body in White"
                schedule="Sep. 12, 2022, 4:00PM"
                taskCount={2}
            />
        </div>
    );
};