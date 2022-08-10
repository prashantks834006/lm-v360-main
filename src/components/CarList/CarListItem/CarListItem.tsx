import React from 'react';
import './CarListItem.css';
import { CarInfo } from './CarInfo/CarInfo';
import { TaskProgress } from './TaskProgress/TaskProgress';
import { TaskSchedule } from './TaskSchedule/TaskSchedule';
import { TaskCount } from './TaskCount/TaskCount';

export interface CarListItemProps {
    name: string;
    model: string;
    taskName: string;
    taskStatus: string;
    schedule?: string;
    taskCount: number;
    highlight?: boolean;
}

export const CarListItem = ({
    name,
    model,
    taskName,
    taskStatus,
    schedule,
    taskCount,
    highlight = false
}: CarListItemProps) => {
    return (
        <div className={`CarListItem${highlight ? ' HighLight' : ''}`}>
            <CarInfo name={name} model={model} />
            <TaskProgress taskName={taskName} taskStatus={taskStatus} />
            <TaskSchedule schedule={schedule} />
            <TaskCount count={taskCount} scheduled={Boolean(schedule)} />
        </div>
    );
};