import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: {
        coinName: '',
        coinSymbol: '',
        coinDescription: '',
        coinImage: '',
        coinOfficialPage: '',
    }
}

const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        setDetails(state, action) {
            state.details = action.payload;
        },
        getDetails(state) {
            return state.details;
        },
    }
})

export default detailsSlice;
export const { setDetails, getDetails } = detailsSlice.actions;