import { useState } from "react";
import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import {ReactComponent as PrevArrow} from "./images/icon-previous.svg";
import {ReactComponent as NextArrow} from "./images/icon-next.svg";
import styled from "styled-components";

const Section = styled.section`
position: relative;
margin-top: 1rem;

.prevArrow {
    position: absolute;
    top: 50%;
    left: 2rem;
    background-color: var(--White);
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    .arrow {
        position: absolute;
        top: 30%;
        left: 12px;
    }
}
.nextArrow {
    position: absolute;
    top: 50%;
    right: 2rem;
    background-color: var(--White);
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    .arrow {
        position: absolute;
        top: 30%;
        left: 12px;
    }
}
.productImage {
    width: 100vw;
}
`;

const Images = [
    {
        image: product1
    },
    {
        image: product2
    },
    {
        image: product3
    },
    {
        image: product4
    }
];
const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = Images.length;

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    if(!Array.isArray(Images) || Images.length <= 0) {
        return null;
    }

    return (
        <Section className="productImages">
            <div className="prevArrow" onClick={prevImage}>
                <PrevArrow className="arrow"/>
            </div>
            <div className="nextArrow" onClick={nextImage}>
                <NextArrow className="arrow"/>
            </div>      
        {
            Images.map((productImage, index) => {
                return (
                    <div key={index} className='img-container'>
                        {index === current && (<img className="productImage" src={productImage.image} alt="product"/>)}
                    </div>
                ) 
            })
        }
        </Section>
        
    )
  }

  export default ImageSlider;