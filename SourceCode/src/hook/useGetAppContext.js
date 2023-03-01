import React, {useContext} from 'react'
import { AppStateContext } from '../DateFormatter';

const useGetAppContext = () => {
    const context = useContext(AppStateContext);
    return context;
}

export default useGetAppContext