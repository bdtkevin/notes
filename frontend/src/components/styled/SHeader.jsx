import styled from 'styled-components';

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  background-color: ${(props) => (props.darkmode ? '#212121' : '#fff')};
  padding: 0 1rem;

  .button-logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    border-radius: 4px;
    background-color: transparent;

    a {
      svg {
        .txt-logo {
          fill: ${(props) => (props.darkmode ? '#e5e7eb' : '#212121')};
        }
      }
    }
  }

  nav {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ul {
      list-style-type: none;

      li {
        display: inline;
        margin: 0 10px;

        a {
          text-decoration: none;
          color: #494436;
          color: ${(props) => (props.darkmode ? '#e5e7eb' : '#494436')};
          font-weight: 400;
          font-size: 1.2rem;

          &:hover {
            color: #fec72d;
          }

          &.selected {
            color: #fec72d;
            border-bottom: 2px solid #fec72d;
          }
        }
      }
    }
  }

  .button-darkmode {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      svg {
        fill: #fec72d;
      }
    }
  }
`;

export default SHeader;
