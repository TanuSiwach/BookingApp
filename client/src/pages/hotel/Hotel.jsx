import React, { useState } from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
const Hotel = () => {
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const photos = [
    {
      src: "https://media.designcafe.com/wp-content/uploads/2021/09/27095756/bedroom-design-with-window-bay-seating.jpg"
    },
    {
      src: "https://media.designcafe.com/wp-content/uploads/2021/09/27095756/bedroom-design-with-window-bay-seating.jpg"
    },
    {
      src: "https://media.designcafe.com/wp-content/uploads/2021/09/27095756/bedroom-design-with-window-bay-seating.jpg"
    },
   
    {
      src:"https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
    }
  ];

  const handleOpen =(i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==='l')
    newSlideNumber=slideNumber===0?5:slideNumber-1;
    else
    newSlideNumber=slideNumber===5?0:slideNumber+1;
 setSlideNumber(newSlideNumber);
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='hotelContainer'>
       { open && <div className='slider'>
       <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
       <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")}/>
       
       <div className='sliderWrapper'>
          <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
       </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
       </div>}
        <div className='hotelWrapper'>
        <button className='bookNow'> Reserve or Book Now !</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span> Elton St 125 New york</span>
          </div> 
          <span className='hotelDistance'>
            Excellent location - 500m from centre
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map( (photo,i)=>(
              <div className='hotelImgWrapper'>
              <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of Delhi</h1>
              <p className='hotelDesc'>
              The Standard Room comprises of 1 Double Bed or 2 Twin Beds, 2 Bedside Tables, a Desk & Chair. The room is furnished with wall to wall carpeting, trendy furnishings and a balcony. Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving and make up mirror as well as all the amenities you could possible need during your stay.
A Complimentary Bottle of Wine, Fresh Fruit and Mineral Water, are provided on arrival. Electric current: 220 Volts. Smoking rooms & inter-connecting rooms are also available.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1> Perfect of a 9-night stay</h1>
              <span>
                Located in the real heart of Delhi , 
                this property has andexcellent location score of 9.8.
              </span>
              <h2>
                <b> &#8377;5000</b>(9 nights)
              </h2>
              <button> Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel