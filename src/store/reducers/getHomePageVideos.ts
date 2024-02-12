import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseData } from "../../utils";
import { HomePageVideos } from "../../Types";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk("youtubeApp/homePageVideos", 
async(isNext: boolean, {getState}) => {
    const {
        youtubeApp:{nextPageToken : nextPageTokenFromState, videos},//videos -> video array. and other one for infinite scroll
    } = getState() as RootState;
    const{data: {items, nextPageToken}} = await axios.get(`${YOUTUBE_API_URL}/search?maxResults=20&q="react project"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}`:""}`);
    const parsedData: HomePageVideos[] = await parseData(items);
    return {parsedData:[...videos, ...parsedData], nextPageToken};
}
)