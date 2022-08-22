import React from 'react';
import ActionRequired from '../ActionRequired/ActionRequired';
import actions from '../../mock/Actions';
import Tabs from '../../components/Tabs';
import ActionCompleted from '../ActionCompleted/ActionCompleted';

const ActionsTabs = () => {
  const tabItems = [
    {
      label: 'Actions Required (2)',
      content: actions.map((action) => !action.isComplete && <ActionRequired {...action} />),
    },
    {
      label: 'Actions Completed (1)',
      content: actions.map((action) => action.isComplete && <ActionCompleted {...action} />),
    },
  ];
  return <Tabs tabItems={tabItems} />;
};

export default ActionsTabs;
