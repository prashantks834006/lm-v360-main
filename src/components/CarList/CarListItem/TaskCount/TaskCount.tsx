import React from 'react';
import { ReactComponent as SelectIcon } from './SelectIcon.svg';
import './TaskCount.css';

export interface TaskCountProps {
  count: number;
  scheduled?: boolean;
}

export const TaskCount = ({ count, scheduled }: TaskCountProps) => {
  return (
    <div className="TaskCount">
      <div>
        <div>
          <div className="TaskCountDetail">
            <span className={`TaskCountText ${scheduled ? '' : ' Danger'}`}>{count} Task(s)</span>
          </div>
          <div className="SelectIcon">
            <SelectIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
