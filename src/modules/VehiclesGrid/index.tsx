import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box } from '@mui/material';
import moment from 'moment';

import Link from '../../components/Link/Link';
import Chip from '../../components/Chip/Chip';
import Progress from '../../components/Progress/Progress';
import vehicles from './vehicles.mock';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-enterprise';

const customerCell = ({ value }: any) => <Link to="/"> {value} </Link>;
const customerStatusCell = ({ value }: any) =>
  value && (
    <Box py={1}>
      <Chip text={value} />
    </Box>
  );
const VINCell = ({ value }: any) => <Link to="/"> {value} </Link>;
const stageCell = ({ value }: any) =>
  value && (
    <Box py={1}>
      <Chip text={value} />
    </Box>
  );
const statusEntryDateCell = ({ value }: any) => value && moment(value).format('MMM DD, YYYY');
const lastContactCell = ({ value }: any) => value && moment(value).format('MMM DD, YYYY');
const deliveryReadinessCell = ({ value }: any) => <Progress progress={value} />;

const VehiclesGrid = () => {
  const columnDefs = [
    { field: 'customer', cellRenderer: customerCell },
    { field: 'customerStage', filter: 'agSetColumnFilter' },
    { field: 'customerStatus', cellRenderer: customerStatusCell, width: 170, filter: 'agSetColumnFilter' },
    { field: 'VIN', cellRenderer: VINCell, width: 160 },
    { field: 'model', width: 120, filter: 'agSetColumnFilter' },
    { field: 'color', width: 160, filter: 'agSetColumnFilter' },
    { field: 'stage', cellRenderer: stageCell, width: 100 },
    { field: 'status', width: 120, filter: 'agSetColumnFilter' },
    {
      field: 'statusEntryDate',
      cellRenderer: statusEntryDateCell,
      width: 180,
      filter: 'agDateColumnFilter',
    },
    { field: 'duration', headerName: 'Duration(days)', width: 160, filter: 'agNumberColumnFilter' },
    {
      field: 'deliveryReadiness',
      headerName: 'Delivery Readiness',
      cellRenderer: deliveryReadinessCell,
      filter: 'agNumberColumnFilter',
    },
    { field: 'software', width: 120, filter: 'agNumberColumnFilter' },
    {
      field: 'lastContact',
      cellRenderer: lastContactCell,
      width: 140,
      filter: 'agDateColumnFilter',
    },
    { field: 'ownership', width: 140 },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      enableRowGroup: true,
      resizable: true,
      autoSize: true,
    }),
    []
  );

  return (
    <Box width="100%" height="calc(100vh - 120px)" className="ag-theme-material">
      <AgGridReact
        rowGroupPanelShow="always"
        rowData={vehicles}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRows
        pagination
        sideBar={['filters', 'columns']}
      />
    </Box>
  );
};

export default VehiclesGrid;
