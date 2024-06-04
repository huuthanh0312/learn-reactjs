import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./compoments/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: "1",
      name: "Cô Gái Trong Bão",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/3/d/b/d3dbe3ee4f48e8b3566d36485617f02d.jpg",
    },
    {
      id: "2",
      name: "LOVE EPISODE (EP)",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/d/4/a/dd4a4c66e8af300a053446a259aae089.jpg",
    },
    {
      id: "3",
      name: "Cam Tâm Tình",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/3/7/5/4375ac8efc8c0c2f7fb27809b3204370.jpg",
    },
    {
      id: "4",
      name: "Mình Anh Thôi",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/0/0/2/3002bcd8f274644656b5da9364c345d8.jpg",
    },
  ];
  return (
    <div>
      <h2>Có Thể Bạn Sẽ Thích Đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
