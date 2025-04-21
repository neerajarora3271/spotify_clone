import React from 'react';
import { useState, useEffect, } from 'react';
import "../css_files/style.css"
import library_icon from "../assets/library_icon.png";
import pluss from "../assets/pluss.png";
import rightarrow from "../assets/rightarrow.png";
import backward_icon from "../assets/backward_icon.png";
import forward_icon from "../assets/forward_icon.png";
import user from "../assets/user.png";
import download from "../assets/download.png";
import card1img from "../assets/card1img.jpeg";
import card2img from "../assets/card2img.jpeg";
import card3img from "../assets/card3img.jpeg";
import card4img from "../assets/card4img.jpeg";
import card5img from "../assets/card5img.jpeg";
import card6img from "../assets/card6img.jpeg";
import card7img from "../assets/card7img.png";
import card8img from "../assets/card8img.png";
import card9img from "../assets/card9img.png";
import card10img from "../assets/card10img.png";
import card11img from "../assets/card11img.png";
import card12img from "../assets/card12img.png";
import card13img from "../assets/card13img.png";
import card14img from "../assets/card14img.png";
import shubh from "../assets/shubh.jpg";
import prem from "../assets/prem.jpg";
import parmish from "../assets/parmish.jpg";
import arjan from "../assets/arjan.jpg";
import karan from "../assets/karan.jpg";
import volume from "../assets/volume.png";
import deviceicon from "../assets/deviceicon.png";
import heart from "../assets/heart.png";
import greenheart from "../assets/greenheart.png";
import play from "../assets/play.png";
import player_icon1 from "../assets/player_icon1.png";
import player_icon2 from "../assets/player_icon2.png";
import screen from "../assets/screen.png";
import player_icon3 from "../assets/player_icon3.png";
import player_icon4 from "../assets/player_icon4.png";
import player_icon5 from "../assets/player_icon5.png";
import greenplay from "../assets/greenplay.png";
import bar from "../assets/bar.png";
import mic from "../assets/mic.png";

import home from "../assets/home.png";
import search from "../assets/search.png";


const Home = () => {

  const [showSearch, setShowSearch] = useState(false);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  const [volumeLevel, setVolumeLevel] = useState(100); // Initial volume: 100%

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolumeLevel(newVolume);

    // Optional: link this to an audio element
    // if (audioRef.current) {
    //   audioRef.current.volume = newVolume / 100;
    // }
  };

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  const handleSliderChange = (event) => {
    console.log("before any operation on slider the value is", event.target.value);
    const newProgress = parseInt(event.target.value, 10);
    //     event.target.value → gets the current value of the slider (a string, e.g., "45").
    // parseInt(..., 10) → converts that string to a number (in base 10)
    // So "45" becomes 45.
    setProgress(newProgress);
  };

  const duration = 213; // total seconds (3:33)

  // Jab bhi isPlaying ya progress ki value change hoti hai, yeh effect dobara chalega
  useEffect(() => {
    let interval;

    if (isPlaying && progress < duration) {
      interval = setInterval(() => {


        // prev stands for previous value of the progress state.
        // after slider move suppose 45 comes at oldprogress inbuilt
        //  Here, 'oldProgress' is the previous state value,which is now 45
        setProgress((oldProgress) => {

          if (oldProgress >= duration) {
            clearInterval(interval);
            setProgress(0);
            return 0;

          }
          console.log("after silder move", oldProgress)
          // it will print 45
          return oldProgress + 1;
          // it will print 46 47 48... 
          // then this 48 is passed to progress
          // frr yeh 48 formatTime(progress )mai call hoga frr minutes or second m convert hoga

        });
      }, 1000); // 1 second step
    }

    return () => clearInterval(interval);
  }, [isPlaying, progress, duration]);

  // Jab bhi isPlaying ya progress ka value change hoga, tab hi yeh useEffect dobara chalega
  // isPlaying ko true karte ho → ek interval lag gaya.
  // Thodi der baad progress update hota hai → useEffect firse chalega.
  // Pehle purana interval band hoga (clearInterval), fir naya set hoga.

  const handlePlayClick = () => {

    setIsPlaying(!isPlaying);

  };



  return (
    <>

      <title>Spotify - Web Player: Music for everyone</title>
      <div className='main'>

        <div className='sidebar'>

          <div className='nav'>
            <div className='nav-option' style={{ opacity: 1 }}>
              <img src={home} alt='home' />
              <a href='#' >Home</a>
            </div>
            <div className='nav-option'>
              <img src={search} alt='search' id='search' onClick={() => setShowSearch(!showSearch)} />
              <a href='#' onClick={() => setShowSearch(!showSearch)}>Search </a>
            </div>

          </div>

          <div className='library'>
            <div className='options'>

              <div className='lib-options'>
                <img src={library_icon} alt='lib_icon' />
                <a href='#'>Library</a>
              </div>

              <div className='icons'>
                <img src={pluss} alt='icon' id='libimg' />
                <img src={rightarrow} alt='icon' id='libimg' />
              </div>

            </div>

            <div className='boxes'>

              <div className='box1'>
                <p>Create Your First Playlist</p>
                <p id='box1-p2'>it's easy, we'll help you</p>
                <button>Create Playlist</button>
              </div>

              <div className='box2'>
                <p>Let's Find Some Podcast To Follow</p>
                <div id='box2-p2'>We Will Keep You Updated On New Episodes</div>
                <button>Browse Podcast</button>
              </div>
            </div>

          </div>
        </div>

        <div className='main_content'>

          <div className='sticky_nav'>
            <div className='sticky-icons'>
              <img src={backward_icon} alt='icon' />
              <img src={forward_icon} alt='icon' className='hide' />
            </div>

            {showSearch && (
              <div className='search_bar'>
                <input
                  type='text'
                  placeholder='What do you want to play?'
                  id='text_search'
                />
                <img src={search} alt='search' id='search_img' />
              </div>
            )}

            <div className='sticky-nav-options'>
              <button id='btn'
                className='hide'>Explore Premium</button>
              <button className='btn_sticky'>
                <img src={download} alt='download' style={{ marginRight: "10px" }} />
                Install App
              </button>
              <img src={user} alt='icon' id='icon' />
            </div>


          </div>

          <div className='cards'>
            <div className='title_bar'>
              <h2> Recently Played</h2>
            </div>
            <div className='cardcontainer'>
              <div className='card'>
                <img src={card1img} alt='card1' />
                <p className='card_title'>Top 50-Global</p>
                <p className='card_info'>Your Daily Updates Of Most Update Tracks</p>
              </div>
            </div>
          </div>

          <div className='cards_line2'>
            <div className='title_bar'>
              <h2>Trending Now Near You</h2>
            </div>
            <div className='cardcontainer'>
              <div className='card'>
                <img src={card2img} alt='card2' />
                <p className='card_title'>Mahiye jinna sohna</p>
                <p className='card_info'>Feel the love with soulful melodies

                </p>
              </div>
              <div className='card'>
                <img src={card3img} alt='card3' />
                <p className='card_title'>Mere Paas Tum Ho</p>
                <p className='card_info'>Relax with soft and soothing beats</p>
              </div>
              <div className='card'>
                <img src={card4img} alt='card4' />
                <p className='card_title'>Alter Ego-Naa Ready</p>
                <p className='card_info'>Get hyped with the latest hits</p>
              </div>
              <div className='card'>
                <img src={card14img} alt='card4' />
                <p className='card_title'>Top 50-Global</p>
                <p className='card_info'>Most streamed tracks around the world</p>
              </div>
            </div>

          </div>

          <div className='cards_line3'>
            <div className='title_bar'>
              <h2>Featured Charts</h2>
            </div>
            <div className='cardcontainer'>
              <div className='card'>
                <img src={card5img} alt='card2' />
                <p className='card_title'>Top Songs-Global</p>
                <p className='card_info'>Weekly Chartbusters from Around the World</p>
              </div>
              <div className='card'>
                <img src={card6img} alt='card3' />
                <p className='card_title'>Top Songs-India</p>
                <p className='card_info'>Hottest Tracks Rocking the Nation</p>
              </div>
              <div className='card'>
                <img src={card12img} alt='card4' />
                <p className='card_title'>Top 50-Global</p>
                <p className='card_info'>Trending Tracks Taking Over Socials</p>
              </div>
              <div className='card'>
                <img src={card13img} alt='card4' />
                <p className='card_title'>Top 50-Global</p>
                <p className='card_info'>Most Streamed Global Hits</p>
              </div>
            </div>

          </div>

          <div className='cards_line4'>
            <div className='title_bar'>
              <h2>Popular Albums</h2>
            </div>
            <div className='cardcontainer'>
              <div className='card'>
                <img src={card8img} alt='card2' />
                <p className='card_title'>Aashiqi 2</p>
                <p className='card_info'>Evergreen Melodies for the Soul</p>
              </div>
              <div className='card'>
                <img src={card9img} alt='card3' />
                <p className='card_title'>Sanam Teri Kasam</p>
                <p className='card_info'>Heartfelt Love Songs to Revisit</p>
              </div>
              <div className='card'>
                <img src={card10img} alt='card4' />
                <p className='card_title'>Raanjhan (Do Patti)</p>
                <p className='card_info'>New Age Bollywood Romance</p>
              </div>
              <div className='card'>
                <img src={card11img} alt='card4' />
                <p className='card_title'>Yo Yo Glory</p>
                <p className='card_info'>Swag & Style with Yo Yo Honey Singh</p>
              </div>
              <div className='card'>
                <img src={card7img} alt='card4' />
                <p className='card_title'>Yeh Jawaani Hai Deewani	</p>
                <p className='card_info'>Ultimate Youthful Bollywood Anthems</p>
              </div>
            </div>

          </div>

          <div className='cards_line5'>
            <div className='title_bar'>
              <h2>Popular Artist</h2>
            </div>
            <div className='cardcontainer'>
              <div className='card_artist'>
                <img src={parmish} alt='card2' id='artist_img' />
                {/* <p className='card_title'>Top Songs-Global</p> */}
                <h5>Parmish Verma</h5>
                <p>Artist</p>
              </div>

              <div className='card_artist'>
                <img src={arjan} alt='card3' id='artist_img' />
                {/* <p className='card_title'>Top Songs-India</p> */}
                <h5>Arjan Dhillon</h5>
                <p>Artist</p>
              </div>
              <div className='card_artist'>
                <img src={prem} alt='card4' id='artist_img' />
                {/* <p className='card_title'>Top 50-Global</p> */}
                <h5>Prem Dhillon</h5>
                <p>Artist</p>
              </div>
              <div className='card_artist'>
                <img src={shubh} alt='card4' id='artist_img' />
                {/* <p className='card_title'>Top 50-Global</p> */}
                <h4>Shubh</h4>
                <p>Artist</p>

              </div>

              <div className='card_artist'>
                <img src={karan} alt='card4' id='artist_img' />
                {/* <p className='card_title'>Top 50-Global</p> */}
                <h4>Karan Aujla</h4>
                <p>Artist</p>
              </div>

            </div>

            <div className='footer'>
              <div className='line'></div>
            </div>
          </div>
        </div>


        <div className='music_player'>

          <div className='first_part'>
            <img src={card14img} alt='img' />
            <div className='text_footer'>
              <h4>Backlash</h4>
              <p>Prem Dhillon</p>
            </div>
            <div className='footer_icons1'>
              <img src={liked ? greenheart : heart} onClick={() => setLiked(!liked)} alt='icon' id='icon' />
              <img src={screen} alt='icon' id='icon' />
            </div>
          </div>


          <div className='second_part'>
            <div className='second_inner_part'>
              <div className='player_control'>
                <img src={player_icon1} alt='icon' className='player_footer_icon' />
                <img src={player_icon2} alt='icon' className='player_footer_icon' />
                <img src={isPlaying ? greenplay : player_icon3} alt='icon' id='plus_icon' className='player_footer_icon' onClick={handlePlayClick} />
                <img src={player_icon4} alt='icon' className='player_footer_icon' />
                <img src={player_icon5} alt='icon' className='player_footer_icon' />
              </div>
              <div className='playback_bar'>
                <span className='curr_time'>{formatTime(progress)}</span>
                <input type='range' min='0' max={duration} value={progress} className='progress' onChange={handleSliderChange}
                  style={{ '--progress': `${(progress / duration) * 100}%` }} />

                {/* This is a CSS custom property (variable) named --progress. It will be used in your CSS to control something
                — in this case, how much of the range track should be green. */}
                {/* progress / duration) * 100}%` */}
                {/* This calculates the percentage of the track that should be green:
                progress is your current time (e.g. 40 seconds). */}
                <span className='total_time'>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <div className='third_part'>
            <div className='player_control_third'>
              <img src={play} alt='icon' className='player_footer_icon' />
              <img src={mic} alt='icon' className='player_footer_icon' />
              <img src={bar} alt='icon' className='player_footer_icon' onClick={handlePlayClick} />
              <img src={deviceicon} alt='icon' className='player_footer_icon' />
              <img src={volume} alt="volume" className="player_footer_icon" />
              <div className="volume_container">
                <div className="volume_slider_wrapper">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volumeLevel}
                    onChange={handleVolumeChange}
                    className="volume_slider"
                    style={{ '--progress': `${volumeLevel}%` }}

                  />
                  
                </div>
                
              </div>
              {/* <span>{volumeLevel}</span> */}
            </div>

          </div>
        </div>

      </div>
    </>

  );
};

export default Home;