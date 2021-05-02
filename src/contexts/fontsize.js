import { createContext, useState } from "react";
import { fontSize } from '../consts';

const defaultValue = {
  fontSize: fontSize.MEDIUM, 
  setFontSize: () => {}
};

const FontSizeContext = createContext(defaultValue);
FontSizeContext.displayName = 'FontSizeContext';

export default FontSizeContext;

export function useFontSizeContext() {
  const [fontSize, setFontSize] = useState(defaultValue.fontSize);

  return { fontSize, setFontSize };
}