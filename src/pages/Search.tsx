import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

export default function Search() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
 
  useEffect(()=>{
      dispatch(clearVideos());
      if(searchTerm==""){
        navigate('/');
      }else{
        dispatch(getSearchPageVideos(false))
      }
      // console.log(videos);
  }, [dispatch, navigate, searchTerm])
  return (
    <div className='max-h-screen  overflow-hidden'>
      <div style={{height: "8vh"}}>
        <Navbar />
    </div>
    <div className="flex" style = {{height: "92.5vh"}}>
      <Sidebar />
      {videos.length? (
      <InfiniteScroll
       dataLength={videos.length}
       next={() => dispatch(getSearchPageVideos(true))}
       hasMore={videos.length < 500} 
       loader = {<Spinner />}
       height={650}>
        <div className='grid gap-y-14 gap-x-16 grid-cols-4 p-10'>
          {videos.map((item: HomePageVideos) => {
            return <Card data={item} key={item.videoId}/>

          })}

        </div>

      </InfiniteScroll>): <Spinner /> }
    </div>
      </div>
    
  )
}
