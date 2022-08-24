import React, { useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box } from '@mui/material';
import moment from 'moment';

import { IVehiclesData } from '../../types/vehicle';
import { PATHS } from '../../utils/constants';
import Link from '../../components/Link/Link';
import Chip from '../../components/Chip/Chip';
import Progress from '../../components/Progress/Progress';
import vehicles from './vehicles.mock';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './custom.css';
import 'ag-grid-enterprise';
import GridTopActions from './GridTopActions';

const customerCell = ({ value }: any) => <Link to={PATHS.dashboard}> {value} </Link>;
const customerStatusCell = ({ value }: any) =>
  value && (
    <Box py={1}>
      <Chip text={value} />
    </Box>
  );
const VINCell = ({ value }: any) => <Link to={PATHS.dashboard}> {value} </Link>;
const stageCell = ({ value }: any) =>
  value && (
    <Box py={1}>
      <Chip text={value} />
    </Box>
  );
const statusEntryDateCell = ({ value }: any) => value && moment(value).format('MMM DD, YYYY');
const lastContactCell = ({ value }: any) => value && moment(value).format('MMM DD, YYYY');
const deliveryReadinessCell = ({ value }: any) => <Progress progress={value} />;

const columnDefs = [
  { field: 'customer', cellRenderer: customerCell, width: 130 },
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
    width: 160,
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

const defaultColDef = {
  sortable: true,
  filter: true,
  enableRowGroup: true,
  resizable: true,
  autoSize: true,
};

const rowData: IVehiclesData[] = vehicles;

const gridOptions = {
  suppressMenuHide: false,
  defaultColDef,
  enableCharts: true,
  animateRows: true,
  enableRangeSelection: true,
  rowDragManaged: true,
  headerHeight: 30,
  rowHeight: 30,
  pivotPanelShow: 'always',
  pivotColumnGroupTotals: 'before',
  pivotRowTotals: 'before',
  sideBar: {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
    ],
  },
  columnDefs,
  rowData,
  pagination: true,
};

const VehiclesGrid = () => {
  const gridRef = useRef<AgGridReact<IVehiclesData>>(null);

  const onSearch = useCallback((searchText: string) => {
    gridRef.current?.api.setQuickFilter(searchText);
  }, []);

  const onToggleToolPanelClick = useCallback((panelId: 'columns' | 'filters') => {
    if (gridRef.current?.api.getOpenedToolPanel() === panelId) {
      gridRef.current?.api.closeToolPanel();
    } else {
      gridRef.current?.api.openToolPanel(panelId);
    }
  }, []);

  return (
    <>
      <GridTopActions onSearch={onSearch} onToggleToolPanelClick={onToggleToolPanelClick} />
      <Box width="100%" height="calc(100vh - 150px)" className="ag-theme-material">
        <AgGridReact {...gridOptions} ref={gridRef} />
      </Box>
    </>
  );
};

export default VehiclesGrid;
