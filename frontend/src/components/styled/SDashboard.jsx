import styled from 'styled-components';

const SDashboard = styled.div`
  margin-top: 20px;

  .new-note {
    position: fixed;
    right: 40px;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: ${(props) => (props.darkmode ? '#3d4144' : '#fff')};
    border: none;
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      svg {
        fill: #fec72d;
      }
    }

    svg {
      fill: #212121;
      fill: ${(props) => (props.darkmode ? '#e5e7eb' : '#212121')};
    }
  }

  .notes {
    display: grid;
    grid-template-columns: repeat(auto-fit, 330px);
    gap: 10px;
    padding: 10px;
    width: 100%;
    justify-content: center;
  }
`;

export default SDashboard;
