import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewTrackItems } from '../features/track/trackSlice';
import { viewAlbumItems } from '../features/album/albumSlice';
import { selectCard, handleTrackOrAlbum } from '../features/basic/selectedCard';
import { CardContainer, TrackCardImgsDiv } from '../styled/styled';

const TrackCard = ({ item: cardItem }) => { 
    
  const dispatch = useDispatch();
  const { albumItems, albumIsLoading } = useSelector((state) => state.album);
  const { trackIsLoading } = useSelector((state) => state.track); 
  const { activeItem } = useSelector((state) => state.active);

  useEffect(() => {
    if (!albumIsLoading) dispatch(viewAlbumItems());
    if (!trackIsLoading) dispatch(viewTrackItems());
  }, [dispatch]); 

  const findAlbumInfo = (id) => {
    return albumItems.find((item) => item._id === id) || {};
  };

  if (albumIsLoading || trackIsLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const cardClicked = () =>{
    dispatch(selectCard(cardItem))
    dispatch(handleTrackOrAlbum(activeItem))
  }
  return (
    <CardContainer onClick={cardClicked}>
      {cardItem?.title ? (
        <>
          <h3>{cardItem.title}</h3>
          <p>
            {`${cardItem.artistName} - ${
              findAlbumInfo(cardItem.albumId).title || 'Unknown Album'
            }`}
          </p>
          <p>{cardItem.releseDate.slice(0,10) || 'Unknown Release Date'}</p>
          <TrackCardImgsDiv> 
            <img src='/icons/icons8-next-100.png' alt='play' width={22}/>
            <img src='/icons/icons8-play-100.png' alt='play' width={42}/>
            <img src='/icons/icons8-next-100.png' alt='play' width={22}/>
          </TrackCardImgsDiv>
        </>
      ) : (
        <p>No tracks available.</p>
      )}
    </CardContainer>
  );
};

export default TrackCard;
