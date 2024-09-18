import React, { useState } from "react";
import {
  FormContainer,
  CloseModal,
  FormDataContainer,
  SingleData,
  FlexRow,
  InputField,
  SelectComp,
  OptinsComp,
  InputFile,
} from "../styled/styled";
import { useSelector } from "react-redux";

import axios from "axios";
export const tracksUrl = "http://localhost:5000/tracks";
export const albumsUrl = "http://localhost:5000/albums";

const Form = ({ close, reload }) => {
  const { selectedCard } = useSelector((state) => state.selected);
  const { formType } = useSelector((state) => state.form);
  const { albumItems } = useSelector((state) => state.album);

  const [data, setData] = useState(
    formType === "create"
      ? {
          its: "track",
          title: "",
          artistName: "",
          genere: "",
          releseDate: "",
          type: "",
          albumId: "",
        }
      : { ...selectedCard, releseDate: selectedCard.releseDate.slice(0, 10) },
  );
  const [coverImg, setCoverImg] = useState(null);
  const submitFormData = async () => {
    if (formType === "create") {
      const formData = new FormData();

      formData.append("cover", coverImg);
      if (!data.title) {
        alert("Please enter a title!");
        return;
      }
      formData.append("title", data.title);
      if (!data.artistName) {
        alert("Please enter an artist's name!");
        return;
      }
      formData.append("artistName", data.artistName);
      if (!data.genere) {
        alert("Please enter a genere!");
        return;
      }
      formData.append("genere", data.genere);
      if (!data.releseDate) {
        alert("Please select a valid date!");
        return;
      }
      formData.append("releseDate", data.releseDate);
      if (data.its === "track") {
        if (!data.type) {
          alert("Please select a type!");
          return;
        }
        formData.append("type", data.type);
      }
      if (data.type === "album") {
        if (!data.albumId) {
          alert("Please select a valid album!");
          return;
        }
        formData.append("albumId", data.albumId);
      }
      let resp;
      if (data.its === "track") {
        resp = await axios.post(tracksUrl, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        resp = await axios.post(albumsUrl, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
    } else if (formType === "update") {
      if (data.type === "" || data.type === null) {
        setData((prev) => ({ ...prev, its: "album" }));
      } else {
        setData((prev) => ({ ...prev, its: "track" }));
      }
      const formData = new FormData();
      coverImg && formData.append("cover", coverImg);
      data.title && formData.append("title", data.title);
      data.artistName && formData.append("artistName", data.artistName);
      data.genere && formData.append("genere", data.genere);
      data.releseDate && formData.append("releseDate", data.releseDate);
      data.its === "track" && data.type && formData.append("type", data.type);
      data.type === "album" &&
        data.albumId &&
        formData.append("albumId", data.albumId);
      if (data.its === "track") {
        resp = await axios.patch(`${tracksUrl}/${data._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        resp = await axios.post(`${tracksUrl}/${data._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
    }
    alert(`${formType}ed successsfully!`);
    close();
    reload();
  };
  return (
    <FormContainer>
      <div>
        <div>
          <CloseModal type="button" onClick={close}>
            <svg
              width={10}
              padding={10}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span>Close</span>
          </CloseModal>
          <FormDataContainer>
            <FlexRow>
              <h3>{formType}</h3>
              {formType === "create" && (
                <button
                  onClick={() =>
                    data.its === "track"
                      ? setData({ its: "album" })
                      : setData({ its: "track" })
                  }
                >
                  {data.its}
                </button>
              )}
            </FlexRow>

            <SingleData>
              <label htmlFor="title">title</label>
              <InputField
                type="text"
                id="title"
                name="title"
                value={data.title || ""}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </SingleData>
            <SingleData>
              <label htmlFor="artistName">Artist Name</label>
              <InputField
                type="text"
                id="artistName"
                name="artistName"
                value={data.artistName}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, artistName: e.target.value }))
                }
              />
            </SingleData>
            <SingleData>
              <label htmlFor="genere">genere</label>
              <InputField
                type="text"
                id="genere"
                name="genere"
                value={data.genere}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, genere: e.target.value }))
                }
              />
            </SingleData>
            <FlexRow>
              <label htmlFor="releseDate">Relese Date</label>
              <InputField
                type="Date"
                id="releseDate"
                name="releseDate"
                value={data.releseDate}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, releseDate: e.target.value }))
                }
              />
            </FlexRow>
            {data.its === "track" && (
              <FlexRow>
                <label htmlFor="type">Type</label>
                <SelectComp
                  name="type"
                  id="type"
                  value={data.type}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, type: e.target.value }))
                  }
                >
                  <OptinsComp value="single">Single</OptinsComp>
                  <OptinsComp value="album">Album</OptinsComp>
                </SelectComp>
              </FlexRow>
            )}

            {data.type === "album" && (
              <SingleData>
                <label htmlFor="albumId">select album</label>
                <SelectComp
                  name="albumId"
                  id="albumId"
                  value={data.albumId}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, albumId: e.target.value }))
                  }
                >
                  <OptinsComp value="">Select an album...</OptinsComp>
                  {albumItems[0] ? (
                    albumItems.map((item) => (
                      <OptinsComp value={item._id}>{item.title}</OptinsComp>
                    ))
                  ) : (
                    <OptinsComp value="">no album!</OptinsComp>
                  )}
                </SelectComp>
              </SingleData>
            )}
            <SingleData>
              <label htmlFor="cover">cover img</label>
              <InputFile
                id="cover"
                name="cover"
                type="file"
                onChange={(e) => setCoverImg(e.target.files[0])}
              />
            </SingleData>
            <div>
              <button onClick={submitFormData}>{formType}</button>
            </div>
          </FormDataContainer>
        </div>
      </div>
    </FormContainer>
  );
};

export default Form;
