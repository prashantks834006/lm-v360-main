import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushMetadata } from '../redux/slices/uiMetaDataSlice';
import { getMetaData } from '../services/vehicles';
import { RootState } from '../redux/store';
import { MetaData } from '../types/metaData';

const useMetaData = (module: string, subModule: string): MetaData | undefined => {
  const [metaData, setMetaData] = useState<MetaData>({
    module,
    subModule,
  });
  const allMetaData = useSelector((state: RootState) => state.metaData.data);
  const dispatch = useDispatch();
  const index = useMemo(
    () =>
      allMetaData.findIndex(
        (singleMetaData) => singleMetaData.module === module && singleMetaData.subModule === subModule
      ),
    [allMetaData, module, subModule]
  );

  useEffect(() => {
    if (index === -1) {
      getMetaData(module, subModule)
        .then((metaDataResponse) => {
          dispatch(pushMetadata(metaDataResponse));
        })
        .catch((error) => {
          dispatch(
            pushMetadata({
              module,
              subModule,
            })
          );
        });
    }
  }, [allMetaData, dispatch, index, module, subModule]);

  return allMetaData[index];
};

export default useMetaData;
