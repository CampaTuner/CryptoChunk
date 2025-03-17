import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slices/ThemeSlice";
import topGainerSLice from './Slices/TopGainerSlice'
import detailsSlice from './Slices/DetailsSlice'

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        topGainer: topGainerSLice.reducer,
        details: detailsSlice.reducer,
    }
})
export default store