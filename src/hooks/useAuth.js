import {useSelector} from "react-redux";

const useAuth=()=>{
    const {isAuth, email}= useSelector(state => state.authReducer)
    return {isAuth, email}
}
export default useAuth