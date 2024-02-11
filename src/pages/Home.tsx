import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);


  useEffect(()=>{
      dispatch(getHomePageVideos(false));
      // console.log(videos);
  }, [dispatch])
  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{height: "8vh"}}>
        <Navbar />
    </div>
    <div className="flex" style = {{height: "92vh"}}>
      <Sidebar />
      {videos.length? (
      <InfiniteScroll
       dataLength={videos.length}
       next={() => dispatch(getHomePageVideos(true))}
       hasMore={videos.length <500} 
       loader = {<Spinner />}
       height={60}>
        <div className='grid gap-y-12 gap-x-8 grid-cols-4 p-8'>
          {videos.map((item: HomePageVideos) => {
            return <Card data={item} key={item.videoId}/>

          })}

        </div>

      </InfiniteScroll>): <Spinner /> }
      <Spinner />
    </div>
      </div>
    
  )
}
