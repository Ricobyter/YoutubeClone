import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
// import Card from '../components/Card';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';

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
        <div className='py-8 pl-8 flex flex-col gap-5 w-full'>

      <InfiniteScroll
       dataLength={videos.length}
       next={() => dispatch(getSearchPageVideos(true))}
       hasMore={videos.length < 500} 
       loader = {<Spinner />}
       height={650}>
          {videos.map((item: HomePageVideos) => {
            return(
              <div className='my-5'>

              <SearchCard data={item} key={item.videoId}/>
              </div>
              ) 
          })}


          
      </InfiniteScroll>
      </div>
      ): <Spinner /> }
    </div>
      </div>
    
  )
}
