import { InitialState} from '../Types';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { getHomePageVideos } from './reducers/getHomePageVideos';
import { getSearchPageVideos } from './reducers/getSearchPageVideos';

const initialState: InitialState={
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: []
} 

const YoutubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm:(state, action: PayloadAction<string>)=>{
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state)=>{
            state.searchTerm = "";
        },
        // changeCurrentPlaying:(state, action: PayloadAction<string>)=>{
        //     state.currentPlaying = action.payload;
        // }
    },
    extraReducers:(builder) => {
         builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken;
         })
         builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken;
         })
    },
})

export const store = configureStore({
    reducer: {
        youtubeApp: YoutubeSlice.reducer,
    }
})

export const {clearVideos, changeSearchTerm, clearSearchTerm} = YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;