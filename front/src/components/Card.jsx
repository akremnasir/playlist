import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewTrackItems } from "../features/track/trackSlice";
import { viewAlbumItems } from "../features/album/albumSlice";
import { toogleActiveItem } from "../features/basic/activeItemSlice";
import {
  TrackCardSet,
  RightContainer,
  RightButtomContainer,
  RightUpperContainer,
  FlexRow,
  AlignRight,
  ActiveCard,
  ActiveCardFlex,
} from "../styled/styled";
import TrackCard from "./TrackCard";
import { albumsUrl, tracksUrl } from "./Form";
import { handleViewMyForm } from "../features/basic/viewForm";
import Form from "./Form";
import axios from "axios";
import { selectCard } from "../features/basic/selectedCard";
const Card = ({ reload }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewAlbumItems());
    dispatch(viewTrackItems());
  }, [dispatch]);

  const { albumItems } = useSelector((state) => state.album);
  const { trackItems } = useSelector((state) => state.track);
  const { activeItem } = useSelector((state) => state.active);
  const { selectedCard, trackOrAlbum } = useSelector((state) => state.selected);
  const { viewMyForm } = useSelector((state) => state.form);

  const changeTogleActiveItem = () => {
    dispatch(toogleActiveItem());
  };

  const imgLinkReplacer = (link) => {
    try {
      const updatedLoc = link.replaceAll("\\", "/").split("/").pop();
      return `http://localhost:5000/uploads/${updatedLoc}`;
    } catch (error) {
      console.log(error);
      return "";
    }
  };
  const findAlbumInfo = (id) => {
    return albumItems.find((item) => item._id === id) || {};
  };
  const onCreateButtonClicked = () => {
    dispatch(handleViewMyForm("create"));
  };
  const closeform = () => {
    dispatch(handleViewMyForm(""));
  };
  const updateIconClicked = () => {
    dispatch(handleViewMyForm("update"));
  };
  const deleteIconClicked = async () => {
    let resp;
    if (trackOrAlbum === "track") {
      resp = await axios.delete(`${tracksUrl}/${selectedCard._id}`, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      resp = await axios.delete(`${albumsUrl}/${selectedCard._id}`, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    resp
      ? () => alert(`${selectedCard.title} deleted successfully`)
      : alert(`sorry something went wrong`);
    reload();
  };
  useEffect(() => {
    if (trackItems.length > 0 && !selectedCard.title) {
      dispatch(selectCard(trackItems[0])); // Assuming you want to select the first track
    }
  }, [trackItems, selectedCard, dispatch]);
  return (
    <RightContainer>
      {viewMyForm && <Form close={closeform} reload={reload} />}
      <RightUpperContainer>
        {selectedCard.title ? (
          <ActiveCard>
            <img src={imgLinkReplacer(selectedCard.cover)} />
            <ActiveCardFlex>
              <FlexRow>
                <p>title:</p>
                <h3>{selectedCard.title}</h3>
              </FlexRow>
              <FlexRow>
                <p>artist name:</p>
                <h3>{selectedCard.artistName}</h3>
              </FlexRow>
              <FlexRow>
                <p>genere:</p>
                <h3>{selectedCard.genere}</h3>
              </FlexRow>
              <FlexRow>
                <p>relese date:</p>
                <h3>{selectedCard.releseDate.slice(0, 10)}</h3>
              </FlexRow>
              {selectedCard.type === "album" && (
                <FlexRow>
                  <p>album:</p>
                  <h3>{` ${
                    findAlbumInfo(selectedCard.albumId).title || "Unknown Album"
                  }`}</h3>
                </FlexRow>
              )}
              <FlexRow>
                <div onClick={updateIconClicked}>
                  <img src="/icons/icons8-edit-100.png" width={20} />
                </div>
                <div onClick={deleteIconClicked}>
                  <img src="/icons/icons8-delete-100.png" width={20} />
                </div>
              </FlexRow>
            </ActiveCardFlex>
          </ActiveCard>
        ) : (
          "no card data selected"
        )}
      </RightUpperContainer>
      <RightButtomContainer>
        <FlexRow>
          <FlexRow>
            <button>Filter</button>
            <button onClick={changeTogleActiveItem}>{activeItem}</button>
          </FlexRow>
          <AlignRight>
            <button onClick={onCreateButtonClicked}>Create</button>
          </AlignRight>
        </FlexRow>
        <TrackCardSet>
          {activeItem == "track" &&
            trackItems.map((item) => <TrackCard key={item._id} item={item} />)}
          {activeItem == "album" &&
            albumItems.map((item) => <TrackCard key={item._id} item={item} />)}
        </TrackCardSet>
      </RightButtomContainer>
    </RightContainer>
  );
};

export default Card;
