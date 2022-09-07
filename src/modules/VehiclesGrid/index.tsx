import React, { useCallback, useRef, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box } from '@mui/material';
import { FilterChangedEvent } from 'ag-grid-community';

import { LicenseManager } from 'ag-grid-enterprise';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './custom.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { pushMetadata } from '../../redux/slices/uiMetaDataSlice';
import GridTopActions from './GridTopActions';
import AppliedFilters from './AppliedFilters';
import { getRowData, getColDefs } from '../../services/vehicles';

LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_LICENSE_KEY as string);

const defaultColDef = {
  sortable: true,
  filter: true,
  enableRowGroup: true,
  resizable: true,
  autoSize: true,
};

const gridOptions: any = {
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
  pagination: true,
};

const VehiclesGrid = () => {
  const [filterModel, setFilterModel] = useState<{ [key: string]: any }>();
  const [colDefs, setColDefs] = useState<any>();
  const [rowData, setRowData] = useState<any>();
  const gridRef = useRef<AgGridReact>(null);
  const metaData = useSelector((state: RootState) => state.metaData);
  const dispatch = useDispatch();

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

  const onFilterChanged = (event: FilterChangedEvent) => {
    setFilterModel(event.api.getFilterModel());
  };

  const filtersApplied = filterModel && !!Object.keys(filterModel).length;
  const varHeight = filtersApplied ? '200px' : '150px';

  useEffect(() => {
    const index = metaData.data.findIndex(
      (singleMetaData) => singleMetaData.module === 'HomePage/Dashboard' && singleMetaData.subModule === 'AllVehicles'
    );
    if (index !== -1) {
      setColDefs(metaData.data[index].colDefs);
    } else {
      getColDefs().then((newColDefs) => {
        setColDefs(newColDefs);
        dispatch(
          pushMetadata({
            module: 'HomePage/Dashboard',
            subModule: 'AllVehicles',
            colDefs: newColDefs,
          })
        );
      });
    }
  }, [dispatch, metaData]);

  useEffect(() => {
    getRowData().then((newRowData) => setRowData(newRowData));
  }, []);

  useEffect(() => {
    gridOptions.columnDefs = colDefs;
  }, [colDefs]);

  useEffect(() => {
    gridOptions.rowData = rowData;
  }, [rowData]);

  if (!gridOptions.columnDefs || !gridOptions.rowData) return <>Loading...</>;
  return (
    <>
      <GridTopActions onSearch={onSearch} onToggleToolPanelClick={onToggleToolPanelClick} />
      {filtersApplied && <AppliedFilters filterModel={filterModel} gridRef={gridRef} />}
      <Box width="100%" height={`calc(100vh - ${varHeight})`} className="ag-theme-material">
        <AgGridReact {...gridOptions} ref={gridRef} onFilterChanged={onFilterChanged} />
      </Box>
    </>
  );
};

export default VehiclesGrid;
