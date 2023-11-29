import * as React from 'react';
//import { useTheme } from '@mui/material/styles';
import {Typography} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const Player=({fn, song})=>{
    console.log('song object received ', song);
    //const theme = useTheme();
   
    return(
        <div>
            <button className="btn btn-success" onClick={()=>{
                fn(false, null);
            }}> <ArrowBackIosNewIcon/></button>
          <center>
        <div class="card" id="play" style={{width: "20rem",marginTop: '20px'}}>
            

            <img class='card-img-top' src={song.artworkUrl100} height={400} width={400}  alt='img'/>
            <br/>
            
            <Typography fontFamily={'Helvetica'} fontSize={20} color={'#ffffff'} fontWeight={'bold'}>{song?.trackName} </Typography>
            
            <Typography color={'black'} fontWeight={'bold'} fontStyle={'italic'}>{song?.artistName}</Typography>
            
            </div>
        <br/>
        <br/>
        <audio controls>
                <source src={song?.previewUrl} type="audio/mp4"/>
            </audio>

                <br/>
                <br/>
               
            </center>
        
        </div>
    );
    
}

























// export const Player = ({ fn, song }) => {
//         return (
//     <div>

//         <button onClick={() => {
//             fn(false, null);
//         }} className="btn btn-outline-secondary m-10">Back </button>
//         <br />
//         <br />
//         <center>
//         <div>
//         <p className="text-center m-3">
//             <img src={song.artworkUrl100} height={400} width={400} alt="artist img" />
//             <br />
//             Artist Name: <b>{song.artistName}</b> <br />
//             Track Name: <b>{song.trackName}</b>
//         </p>
//         <div className="row text-center">
//             <div className="col-2"></div>
//             <div className="row col-8 text-center">
//                 <audio controls>
//                     <source src={song?.previewUrl} type="audio/mp4" />
//                     Your browser does not support the audio  element
//                 </audio>
//             </div>
//             <div className="col-2"></div>
//         </div>
//         </div>
//   </center>

//   </div>
// )
// }
































// export const Player = ({ fn, song }) => {
//     return (<div>

//         <button onClick={() => {
//             fn(false, null);
//         }} className="btn btn-outline-secondary m-3">Back </button>
//         <br />
//         <br />
//         <p className="text-center m-3">
//             <img src={song.artworkUrl100} height={400} width={400} alt="artist img" />
//             <br />
//             Artist Name: <b>{song.artistName}</b> <br />
//             Track Name: <b>{song.trackName}</b>
//         </p>
//         <div className="row text-center">
//             <div className="col-2"></div>
//             <div className="row col-8 text-center">
//                 <audio controls>
//                     <source src={song?.previewUrl} type="audio/mp4" />
//                     Your browser does not support the audio  element
//                 </audio>
//             </div>
//             <div className="col-2"></div>
//         </div>
//   </div>
// )
// }
