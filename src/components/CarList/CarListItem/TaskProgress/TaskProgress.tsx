import React from 'react';
import { ReactComponent as ProgressBar } from './ProgessBar.svg';
import './TaskProgress.css';

export interface TaskProgressProps {
    taskName: string;
    taskStatus: string;
}

export const TaskProgress = ( { taskName, taskStatus }: TaskProgressProps ) => {
    return (
        <div className="Task">
            <div className="TaskProgress">
                <div className="TaskName">
                    <span className="TaskNameText">{taskName}</span>
                </div>
                <ProgressBar />
            </div>
            <div className="TaskStatus">
                <div className="TaskStatusDetail">
                    <span className="TaskStatusText">{taskStatus}</span>
                    <div className="TaskStatusTag">
                        <span className="TaskStatusTagText">Off track</span>
                    </div>
                </div>
            </div>
        </div>
    );
};