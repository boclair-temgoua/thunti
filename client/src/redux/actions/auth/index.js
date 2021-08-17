import {
    LOGOUT
} from '../rootAction'

export const handleLogout = (props) => async (dispatch) => {

    await dispatch({ type: LOGOUT })

    // * Remove from localStorage
    const removeToken = await localStorage.removeItem(process.env.REACT_APP_BASE_NAMETOKEN)
    if (!removeToken) {
        window.location.href = '/'
    }

}
