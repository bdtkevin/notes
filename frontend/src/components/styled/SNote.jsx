import styled from 'styled-components';

const SNote = styled.li`
  background-color: ${(props) => (props.darkmode ? '#212121' : '#bdbcb852')};

  display: flex;
  flex-direction: column;
  height: 330px;
  border-radius: 4px;
  padding: 5px;

  input,
  textarea {
    background-color: transparent;
    border: none;
    width: 100%;
    color: ${(props) => (props.darkmode ? '#e5e7eb' : '#212121')};

    &:focus {
      outline: none;
    }
  }

  input {
    width: 100%;
    font-size: 25px;
    letter-spacing: -1px;
  }

  textarea {
    resize: none;
    padding: 5px;
  }
`;

export default SNote;
