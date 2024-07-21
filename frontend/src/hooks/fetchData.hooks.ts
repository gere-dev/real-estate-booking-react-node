import { useEffect } from 'react';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { RootState, Status } from '@/types';

type SelectData<T> = (state: RootState) => T;
type SelectStatus = (state: RootState) => Status;
export const useFetchData = <TData>(
  fetchAction: AsyncThunkAction<TData, any, any>,
  selectData: SelectData<TData>,
  selectStatus: SelectStatus,
  dependencies: any[] = []
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchAction);
  }, [dispatch, ...dependencies]);

  return {
    data,
    status,
  };
};
