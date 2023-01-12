import React, {useState} from 'react';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

import Img1 from './img/portraits1.jpg';
import Img2 from './img/portraits2.jpg';
import Img3 from './img/portraits3.jpg';
import Img4 from './img/portraits4.jpg';
import Img5 from './img/portraits5.jpg';
import Img7 from './img/portraits7.jpg';
import Img8 from './img/portraits8.jpg';
import Img9 from './img/portraits9.jpg';
import Img10 from './img/portraits10.jpg';
import Img11 from './img/portraits11.jpg';
import Img12 from './img/portraits12.jpg';
import Img13 from './img/portraits13.jpg';
import Img15 from './img/portraits15.jpg';
import Img16 from './img/portraits16.jpg';
import Img17 from './img/portraits17.jpg';
import Img18 from './img/portraits18.jpg';
import Img19 from './img/portraits19.jpg';
import Img20 from './img/portraits20.jpg';
import Img21 from './img/portraits21.jpg';
import Img22 from './img/portraits22.jpg';
import Img23 from './img/portraits23.jpg';
import Img24 from './img/portraits24.jpg';
import Img25 from './img/portraits25.jpg';
import Img26 from './img/portraits26.jpg';
import Img27 from './img/portraits27.jpg';
import Img28 from './img/portraits28.jpg';
import Img29 from './img/portraits29.jpg';
import Img30 from './img/portraits30.jpg';
import Img31 from './img/portraits31.jpg';
import Img32 from './img/portraits32.jpg';
import Img33 from './img/portraits33.jpg';
import Img34 from './img/portraits34.jpg';
import Img35 from './img/portraits35.jpg';
import Img36 from './img/portraits36.jpg';
import Img37 from './img/portraits37.jpg';
import Img38 from './img/portraits38.jpg';
import Img39 from './img/portraits39.jpg';
import Img40 from './img/portraits40.jpg';
import Img41 from './img/portraits41.jpg';
import Img42 from './img/portraits42.jpg';
import Img43 from './img/portraits43.jpg';
import Img44 from './img/portraits44.jpg';
import Img45 from './img/portraits45.jpg';
import Img46 from './img/portraits46.jpg';
import Img47 from './img/portraits47.jpg';
import Img48 from './img/portraits48.jpg';
import Img49 from './img/portraits49.jpg';
import Img50 from './img/portraits50.jpg';
import Img51 from './img/portraits51.jpg';
import Img52 from './img/portraits52.jpg';
import Img53 from './img/portraits53.jpg';
import Img54 from './img/portraits54.jpg';
import Img55 from './img/portraits55.jpg';
import Img56 from './img/portraits56.jpg';
import Img57 from './img/portraits57.jpg';
import Img58 from './img/portraits58.jpg';
import Img59 from './img/portraits59.jpg';
import Img60 from './img/portraits60.jpg';
import Img61 from './img/portraits61.jpg';
import Img62 from './img/portraits62.jpg';
import Img63 from './img/portraits63.jpg';
import Img64 from './img/portraits64.jpg';
import Img65 from './img/portraits65.jpg';
import Img66 from './img/portraits66.jpg';
import Img67 from './img/portraits67.jpg';
import Img68 from './img/portraits68.jpg';
import Img69 from './img/portraits69.jpg';
import Img70 from './img/portraits70.jpg';
import Img71 from './img/portraits71.jpg';

const Gallery = () => {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
    },
    {
      id: 25,
      imgSrc: Img25,
    },
    {
      id: 26,
      imgSrc: Img26,
    },
    {
      id: 27,
      imgSrc: Img27,
    },
    {
      id: 28,
      imgSrc: Img28,
    },
    {
      id: 29,
      imgSrc: Img29,
    },
    {
      id: 30,
      imgSrc: Img30,
    },
    {
      id: 31,
      imgSrc: Img31,
    },
    {
      id: 32,
      imgSrc: Img32,
    },
    {
      id: 33,
      imgSrc: Img33,
    },
    {
      id: 34,
      imgSrc: Img34,
    },
    {
      id: 35,
      imgSrc: Img35,
    },
    {
      id: 36,
      imgSrc: Img36,
    },
    {
      id: 37,
      imgSrc: Img37,
    },
    {
      id: 38,
      imgSrc: Img38,
    },
    {
      id: 39,
      imgSrc: Img39,
    },
    {
      id: 40,
      imgSrc: Img40,
    },
    {
      id: 41,
      imgSrc: Img41,
    },
    {
      id: 42,
      imgSrc: Img42,
    },
    {
      id: 43,
      imgSrc: Img43,
    },
    {
      id: 44,
      imgSrc: Img44,
    },
    {
      id: 45,
      imgSrc: Img45,
    },
    {
      id: 46,
      imgSrc: Img46,
    },
    {
      id: 47,
      imgSrc: Img47,
    },
    {
      id: 48,
      imgSrc: Img48,
    },
    {
      id: 49,
      imgSrc: Img49,
    },
    {
      id: 50,
      imgSrc: Img50,
    },
    {
      id: 51,
      imgSrc: Img51,
    },
    {
      id: 52,
      imgSrc: Img52,
    },
    {
      id: 53,
      imgSrc: Img53,
    },
    {
      id: 54,
      imgSrc: Img54,
    },
    {
      id: 55,
      imgSrc: Img55,
    },
    {
      id: 56,
      imgSrc: Img56,
    },
    {
      id: 57,
      imgSrc: Img57,
    },
    {
      id: 58,
      imgSrc: Img58,
    },
    {
      id: 59,
      imgSrc: Img59,
    },
    {
      id: 60,
      imgSrc: Img60,
    },
    {
      id: 61,
      imgSrc: Img61,
    },
    {
      id: 62,
      imgSrc: Img62,
    },
    {
      id: 63,
      imgSrc: Img63,
    },
    {
      id: 64,
      imgSrc: Img64,
    },
    {
      id: 65,
      imgSrc: Img65,
    },
    {
      id: 66,
      imgSrc: Img66,
    },
    {
      id: 67,
      imgSrc: Img67,
    },
    {
      id: 68,
      imgSrc: Img68,
    },
    {
      id: 69,
      imgSrc: Img69,
    },
    {
      id: 70,
      imgSrc: Img70,
    },
    {
      id: 71,
      imgSrc: Img71,
    }
     ]

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }


  return (
    <>

    <div className={model? "model open" : "model"}>
      <img src={tempImgSrc} alt="" />
      <CloseIcon onClick={() => setModel(false)} />
    </div>
    <div className="gallery">
      {data.map((item,index) => {
  return (
    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
      <img src={item.imgSrc} style={{width: '100%'}} />
    </div>
    )
  })}
    </div>

    </>
  );
};

export default Gallery; 