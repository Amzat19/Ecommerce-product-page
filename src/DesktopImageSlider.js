import productImage1 from './images/image-product-1.jpg';
import productImage2 from './images/image-product-2.jpg';
import productImage3 from './images/image-product-3.jpg';
import productImage4 from './images/image-product-4.jpg';
import productImageThumbnail1 from './images/image-product-1-thumbnail.jpg';
import productImageThumbnail2 from './images/image-product-2-thumbnail.jpg';
import productImageThumbnail3 from './images/image-product-3-thumbnail.jpg';
import productImageThumbnail4 from './images/image-product-4-thumbnail.jpg';
import styled from 'styled-components';
import { useState } from 'react';
import {ReactComponent as Next} from "./images/icon-next.svg";
import {ReactComponent as Prev} from "./images/icon-previous.svg";
import {ReactComponent as Close} from "./images/icon-close.svg";


const Section = styled.section`
max-width: 50vw;
justify-self: end;

.large-image {
    max-width: 30vw;
    border-radius: 10px;
}
.img-thumbnail {
    display: grid;
    grid-template-columns: 7vw 7vw 7vw 7vw;
    grid-gap: 1vw;
    max-width: 30vw;
    img {
        width: 7vw;
        border-radius: 10px;
    }
    img:hover {
        cursor: pointer;
        opacity: 0.5;
    }
}
`;
const Images = [
{
    image: productImage1
},
{
    image: productImage2
},
{
    image: productImage3
},
{
    image: productImage4
}
];

const ImageThumbnail = [
{
    imageThumbnail: productImageThumbnail1
},
{
    imageThumbnail: productImageThumbnail2
},
{
    imageThumbnail: productImageThumbnail3
},
{
    imageThumbnail: productImageThumbnail4
}
];

const DesktopImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const [showDesktopModal, setShowDesktopModal] = useState(false);
    const length = Images.length;
    const handleToggle = () => {
        setShowDesktopModal(!showDesktopModal);
    }
    const nextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevImg = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    return (
        <Section className='desktop-slider'>
            <div className="large-image-div" onClick={handleToggle}>
                <img className="large-image" src={Images[current].image} alt="product"/>
            </div>
            <div className="img-thumbnail">
                {
                    ImageThumbnail.map((thumbnail, index) => {
                      return <img  className={index === current ? 'active' : ''} key={index} src={thumbnail.imageThumbnail} alt="product-thumbnail" onClick={() => {
                          setCurrent(index)
                      }}/>
                    })
                }
            </div>
            <div className={showDesktopModal ? "active-modal" : 'inactive-modal'}>
                <div className='content'>
                    <Close className='close' onClick={handleToggle}/>
                 <div className="large-image-div" onClick={nextImg}>
                     <div className='next'>
                         <Next className='next-icon'/>
                     </div>
                     <div className='prev' onClick={prevImg}>
                         <Prev className='prev-icon'/>
                     </div>
                     
                     <img className="large-image" src={Images[current].image} alt="product"/>
            </div>
            <div className="img-thumbnail">
            {
                    ImageThumbnail.map((thumbnail, index) => {
                      return <img  className={index === current ? 'active' : ''} key={index} src={thumbnail.imageThumbnail} alt="product-thumbnail" onClick={() => {
                          setCurrent(index)
                      }}/>
                    })
                }
            </div>
            </div>   
                </div>
        </Section>
    );
}

export default DesktopImageSlider