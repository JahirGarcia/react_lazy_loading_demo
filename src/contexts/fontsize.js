import { createContext, useEffect, useState } from "react";
import { fontSize } from '../consts';

const defaultValue = {
  fontSize: fontSize.MEDIUM, 
  setFontSize: () => {}
};

const FontSizeContext = createContext(defaultValue);
FontSizeContext.displayName = 'FontSizeContext';

export default FontSizeContext;

function parseFontSize(size) {
  if(isNaN(size)) return defaultValue.fontSize;

  size = Number.parseInt(size);
  const sizeIndex = Object.values(fontSize).indexOf(size);
  if(sizeIndex === -1) return defaultValue.fontSize;

  return size;
}

export function FontSizeContextProvider(props) {
  const setFontSize = (size) => {
    size = parseFontSize(size);
    setState({ ...state, fontSize: size });
  }

  // Estado inicial del contexto
  const storedSize = localStorage.getItem('fontSize');
  const [state, setState] = useState({
    fontSize: parseFontSize(storedSize),
    setFontSize
  });

  useEffect(() => {
    localStorage.setItem('fontSize', state.fontSize);
  }, [state]);

  return (
    <FontSizeContext.Provider value={ state } >
      {
        props.children
      }
    </FontSizeContext.Provider>
  );
}