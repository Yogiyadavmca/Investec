import {configureStore} from '@reduxjs/toolkit';
import mainReducer from '../containers/screen/first/reducer';

export default configureStore({
  reducer: {
    main: mainReducer,
  },
});
