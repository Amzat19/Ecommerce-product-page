import styled from "styled-components";

const Main = styled.main`
max-width: 100vw;
@media (max-width: 1023px) {
.desktop-slider {
  display: none;

}
}

@media (min-width: 1024px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
  margin-bottom: 3rem;
  .productImages {
    display: none;
}

.desktop-slider, .active-modal {
  .img-thumbnail {
    .active {
      border: 2px solid var(--Orange);
      opacity: 0.5;
    }
  }
}

.inactive-modal {
  top: -100%;
  transition: 250ms;
  .content {
    display: none;
  }
}

.active-modal {
  background-color: var(--Black);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: 850ms;

  .content {
    display: grid;
    justify-content: center;
    align-self: center;
    margin-top: 50px;
  }

  .close {
    cursor: pointer;
    justify-self: end;
    margin-bottom: 20px;
    path {
      fill: var(--White);
    }
  }

  .close:hover {
    cursor: pointer;
    path {
      fill: var(--Orange);
    }
  }

  .large-image-div {
    position: relative;

    .next {
      background-color: var(--White);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      right: -5%;
      top: 50%; 
      
      .next-icon {
        margin-top: 10px;
        margin-left: 12px;
      }
    }

    .next:hover {
      cursor: pointer;

      .next-icon {
        path {
          stroke: var(--Orange);
        }
      }
    }

    .prev {
      background-color: var(--White);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      left: -5%;
      top: 50%;

      .prev-icon {
        margin-top: 10px;
        margin-left: 12px;
      }
    }

    .prev:hover {
      cursor: pointer;

      .prev-icon {
        path {
          stroke: var(--Orange);
        }
      }
    }
  }

  .img-thumbnail > img:hover{ 
    cursor: pointer;
    opacity: 0.5;
  }
}


.cartStyles {
    max-width: 50vw;
    align-self: center;

    h2 {
      width: 400px;
      font-size: 40px;
      margin-bottom: 2rem;
    }
    .desc {
      width: 450px;
    }

    .price {
      grid-template-columns: 1fr;
      grid-gap: 10px;


      .initial-price {
        justify-self: start;
      }
    }

    .addToCart {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      grid-gap: 1rem;

      .amount {
        width: 20vw;
      }
      .button {
        width: 20vw;
        padding-bottom: 5px;
        margin-bottom: -5px;
      }
    }

  }
}
`;

export default Main;