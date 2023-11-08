import { 
    TypedUseSelectorHook, 
    useDispatch, 
    useSelector 
} from "react-redux";
import { 
    AppDispath, 
    RootState 
} from "./store";

type DispatchFunc = () => AppDispath
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;