import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";

import * as React from "react";
export const Song = ({ fn, song }) => {
  const showPlayer = () => {
    fn(true, song);
  };

  return (
    <Card sx={{ display: "flex ", bgcolor: "#383d39", m: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image={song.artworkUrl100}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" color="#ffffff">
            {song?.trackName}
          </Typography>

          <Typography variant="subtitle2" color="#ecebe8" component="div">
            {song?.artistName}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 1 }}>
          <IconButton
            onClick={showPlayer}
            className="btn btn-success"
            color="#1db954"
          >
            <PlayCircleFilledIcon sx={{ color: "#1db954", fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>

      <br />
      <br />
    </Card>
  );
};
//{song.song.artistName} if song prop not destructured

//  //import { useState } from "react";
// import {} from "../pages/SearchPage";
// export const Song = ({fn,song})=>{
//     console.log(song);
//      //const [playerFlag,setPlayerFlag] = useState(false);
//     const showPlayer = ()=>{
//         fn(true,song);
//     }
// return(

//     <div className="row">
// <div className="col-4">
//     <img src ={song.artworkUrl100} alt = "artist img"/>
//     </div>
//     <div className="col-4 mt-4">
//     Artist Name: <b>{song.artistName}</b> <br />
//     Track Name: <b>{song.trackName}</b>
//     </div>
//     <div className="col-4">
//     <button onClick={showPlayer} className="mt-4 btn btn-primary">Play</button>
//     </div>
//     </div>
//     )
// }
