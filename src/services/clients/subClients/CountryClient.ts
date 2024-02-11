import { setCountryList } from "../../../redux/reducers/Country";
import { ClientBase } from "../ClientBase";

export const getCountries = () => async (dispatch: any) => {
    try {
        const response = await ClientBase.countryBase.get("");
        dispatch(setCountryList(response.data))
    } catch (error) {
        console.error("Error in getCountries: ", error)
    }
}
