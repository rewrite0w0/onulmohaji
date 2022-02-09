import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  createContext,
} from 'react';

const _TEMP = React.createContext();

export function useTemp() {
  const context = React.useContext(_TEMP);
  if (context === undefined) {
    0;
  } else {
    0;
  }
  return context;
}

export default function GlobalHooks({ children }) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);

  const todoID = useRef(1);

  const [temp, setTemp] = useState('move!');

  // const store = {
  //   _todo: [todo, setTodo],
  //   _temp: [temp, setTemp],
  //   _todoID: todoID,
  // };

  const _temp = useContext(temp);

  return <_TEMP value={temp}>{children}</_TEMP>;
}

export const TEMP_Provier = ({ children }) => {
  const [temp, setTemp] = useState('move!');
  return <_TEMP value={temp}>{children}</_TEMP>;
};
