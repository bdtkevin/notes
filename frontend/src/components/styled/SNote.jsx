import styled from 'styled-components';

const SNote = styled.li`
  background-color: ${(props) => (props.darkmode ? '#212121' : '#bdbcb852')};
  display: flex;
  flex-direction: column;
  /* position: relative; */
  height: 330px;
  border-radius: 4px;
  overflow: hidden;

  input,
  textarea {
    background-color: transparent;
    border: none;
    width: 100%;
    color: ${(props) => (props.darkmode ? '#e5e7eb' : '#212121')};
    padding: 10px 10px 0 10px;

    &:focus {
      outline: none;
    }
  }

  input {
    width: 100%;
    height: 50px;
    font-size: 25px;
    letter-spacing: -1px;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 250px;
  }

  .button-container {
    width: 100%;
    height: 30px;
    padding-left: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .button-bottom {
      background-color: transparent;
      border: none;
      margin: 0 5px;
      width: 26px;
      height: 26px;
      cursor: pointer;

      &:hover {
        svg {
          fill: #fec72d;
        }
      }

      &.trash {
        position: relative;
        top: -1px;
      }
    }
  }
`;

export default SNote;
