import React from "react";
import { Side, CusList } from "../styled/styled";
import { changeActiveItem } from "../features/basic/activeItemSlice";
import { useDispatch } from "react-redux";
import { ListItem } from "../styled/styled";
const SideView = ({ reload }) => {
  const dispatch = useDispatch();
  const listClicked = (data) => {
    dispatch(changeActiveItem(data));
    reload();
  };
  return (
    <Side>
      <CusList>
        <ListItem>Discover</ListItem>
        <ListItem onClick={() => listClicked("album")}>Album</ListItem>
        <ListItem onClick={() => listClicked("track")}>Track</ListItem>
        <ListItem>Rock</ListItem>
        <ListItem>Hip Hop</ListItem>
        <ListItem>Pop</ListItem>
        <ListItem>EDM</ListItem>
      </CusList>
    </Side>
  );
};

export default SideView;
