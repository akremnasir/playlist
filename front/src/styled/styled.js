import styled, { ThemeProvider } from "styled-components";

export const CardContainer = styled.div`
  width: 150px;
  background-image: linear-gradient(to right, #a01300, #bc4400);
  padding: 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
`;
export const TrackCardSet = styled.div`
  display: flex;
  gap: 10px;
`;
export const TrackCardImgsDiv = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const AppContainer = styled.div`
  display: grid;
  width: 90%;
  min-width: 600px; /* Maximum width for larger screens */
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 100%;
  column-gap: 14px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 95%;
  }
`;
export const Head = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
  padding: 10px 50px;
  max-width: 1220px;
`;
export const Side = styled.div`
  color: #fd3c4f;
  display: flex;
  align-items: center;
  margin-top: -150px;
  /* justify-content: right;   */
`;
export const CusList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CenterDiv = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const RightButtomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const FlexRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const AlignRight = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
export const RightContainer = styled.div``;
export const RightUpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  height: 310px;
  color: white;
`;
export const Search = styled.input`
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: transparent;
  background-image: url("/icons/icons8-search-100.png");
  background-size: 18px;
  background-position: calc(100% - 20px) center;
  color: white;
  background-repeat: no-repeat;
  padding: 6px 12px;
  width: 100%;
  max-width: 300px;
  outline: none;
  @media (max-width: 500px) {
    padding: 6px 8px;
    background-position: calc(100% - 20px) center;
  }
`;
export const ActiveCard = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ActiveCardFlex = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #151515;
  color: white;
  opacity: 0.9;
  z-index: 9;
`;
export const CloseModal = styled.button`
  position: absolute;
  right: 40px;
  top: 40px;
`;
export const FormDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const SingleData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const InputField = styled.input`
  background: transparent;
  border: 1.5px solid #0c8aeb;
  border-radius: 4px;
  padding: 8px 3px;
  color: white;
`;
export const SelectComp = styled.select`
  background: transparent;
  border: 1.5px solid #0c8aeb;
  border-radius: 4px;
  padding: 8px 3px;
  color: white;
`;
export const OptinsComp = styled.option`
  color: black;
`;
export const InputFile = styled.input`
  background: transparent;
  border: 1.5px solid #0c8aeb;
  border-radius: 4px;
  color: white;
`;
export const ListItem = styled.li`
  cursor: pointer;
`;
