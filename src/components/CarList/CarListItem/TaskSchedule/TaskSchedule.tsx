import React from 'react';
import './TaskSchedule.css';

export interface TaskScheduleProps {
    schedule?: string;
}

export const TaskSchedule = ( { schedule }: TaskScheduleProps ) => {
    return (
        <div className="TaskSchedule">
            <div className="ScheduleLabel">
                <div className="ScheduleLabelDetail">
                    <span className="ScheduleLabelText">Delivery Scheduled</span>
                </div>
            </div>
            <div className="ScheduleTime">
                <div className="ScheduleTimeDetail">
                    <span className="ScheduleTimeText">{schedule ?? '--'}</span>
                </div>
            </div>
        </div>
    );
};