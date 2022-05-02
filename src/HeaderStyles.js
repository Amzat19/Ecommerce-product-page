import styled from 'styled-components';

const HeaderStyles = styled.header`
display: grid;
grid-template-columns: 2fr 1fr;
width: 85%;
margin: 0 auto;
overflow: visible;

.header-left {
  align-self: center;
  padding-left: 15px;

  .menu {
    margin-right: 10px;
  }

  .menu-items {
    left: -100%;
    .nav-bar {
      display: none;
    }
  }

  .active {
    background-color: var(--Black);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: 850ms;
    z-index: 100;

    .nav-bar {
      width: 250px;
      height: 100vh;
      background-color: var(--White);

      .close {
        margin-left: 35px;
        margin-top: 20px;
        margin-bottom: 40px;
      }
      ul {
        list-style: none;
        font-family: 'Kumbh Sans', sans-serif;
        font-weight: 700;
        li {
          margin-bottom: 20px;
        }
        li:hover {
          cursor: pointer;
          border-bottom: 2px solid var(--Orange);
          width: 50px;
          padding-bottom: 8px;
        }
      }
    }
  }
}


.header-right {
  display: flex;
  justify-self: end;

  .countAndLogo {
    padding-top: 10px;
    position: relative;
  }

.cartLogo {
  margin-bottom: 5px;
  margin-right: 15px;
}

.cartLogo:hover {
  cursor: pointer;
}

img:hover {
  cursor: pointer;
  border: 2px solid var(--Orange);
  border-radius: 20px;
}

.inactiveCart {
  top: -100%;
  transition: 250ms;
}

.CartCount {
  visibility: hidden;
}
}

@media (max-width: 1023px) {
  .header-desktop-left{
    display: none;
  }
}

@media (min-width: 1024px) {
  margin-top: 1rem;
  margin-bottom: 2rem;
  .header-left {
    display: none;
  }
.header-desktop-left {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;

  nav {
    align-items: stretch;
    a {
      font-family: 'Kumbh Sans', sans-serif;
      font-weight: 300;
      color: var(--Dark-grayish-blue);
      padding-right: 20px;
      text-decoration: none;
    }
    a:hover {
      cursor: pointer;
      border-bottom: 2px solid var(--Orange);
      padding-bottom: 38px;
    }
  }
}
.header-right {
  .cartLogo {
    margin-right: 30px;
  }
  
}
}
`;

export default HeaderStyles;