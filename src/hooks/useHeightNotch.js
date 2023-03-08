import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { heightNotch } from '@utils/variable';

function useHeightNotch(h) {
  const { isShowHeightNotch } = useSelector((state) => state.settingReducer);
  const [heightN, setHeightN] = useState();
  const countHeight = () => {
    setHeightN(window.innerHeight - (isShowHeightNotch ? h + heightNotch : h));
  };

  useEffect(() => {
    countHeight();
    window.addEventListener('resize', countHeight);
  }, []);
  return heightN;
}

export default useHeightNotch;
