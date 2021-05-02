import React, { useContext, useState } from 'react';
import { fontSize as fontSizesConstants } from '../consts';
import FontSizeContext from '../contexts/fontsize';

function FontSizeSwitcher(props) {
  // Tamaños de fuentes
  const [sizes] = useState(
    Object.entries(fontSizesConstants).map(pair => {
      return {
        key: pair[0],
        value: pair[1]
      };
    })
  );

  // Subcripción a FontSizeContext
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const handleChange = (e) => {
    setFontSize(Number.parseInt(e.target.value));
  }

  return (
    <select name="font_size_switcher" defaultValue={ fontSize } 
      onChange={ handleChange } { ...props } >
      {
        sizes.map(size => (
          <option key={ size.key } 
            value={ size.value } >

            { size.key }

          </option>
        ))
      }
    </select>
  );
}

export default FontSizeSwitcher;