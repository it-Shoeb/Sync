import { configureStore } from "@reduxjs/toolkit"
import reducer from "../slicer/featureSlicer"

export const store = configureStore({
    reducer
})