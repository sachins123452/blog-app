import React from 'react';
import useNetworkStatus from './useNetworkStatus';
import { showDanger } from 'components/nudges/Alert';

const useCallFunctionWhenOnline = () => {
  let network = useNetworkStatus();
  const executeFun = (fun) => {
    if (!network) {
      showDanger('No Internet Connection.');
      return;
    }
    fun();
  };
  return executeFun
};

export default useCallFunctionWhenOnline;
