import React, { useContext, useState } from 'react';
import { fontSize as fontSizesConstants } from '../consts';
import FontSizeContext from '../contexts/fontsize';

function FontSizeSwitcher({ onChange, ...rest }) {
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
    // Se actualiza el contexto
    setFontSize(e.target.value);

    // Se llama a onChange si se sobreescribió en props
    if(onChange) onChange(e);
  }

  return (
    <select name="font_size_switcher" defaultValue={ fontSize } 
      onChange={ handleChange } { ...rest } >
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