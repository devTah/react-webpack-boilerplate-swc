import React from 'react';
import { Outlet } from 'react-router-dom';

function MainWrapper() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {}, []);

  return (
    <React.Fragment>
      {/* Main content */}
      <Outlet />
    </React.Fragment>
  );
}

export default MainWrapper;
