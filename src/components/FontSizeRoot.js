import React, { useContext, useEffect, useState } from 'react';
import { fontSize as fontSizeConstants } from '../consts';
import FontSizeContext from '../contexts/fontsize';

function FontSizeRoot({ className, ...rest }) {
  const { fontSize } = useContext(FontSizeContext);
  const [fontSizeClassName, setFontSizeClassName] = useState('');

  useEffect(() => {
    switch(fontSize) {
      case fontSizeConstants.SMALL:
        setFontSizeClassName('font-size-sm');
        break;

      case fontSizeConstants.MEDIUM:
        setFontSizeClassName('font-size-md');
        break;

      case fontSizeConstants.LARGE:
        setFontSizeClassName('font-size-lg');
        break;

      default:
        setFontSizeClassName('font-size-md');
        break;
    }
  }, [fontSize]);

  return (
    <div className={ `${ fontSizeClassName } ${ className }` } { ...rest } >
      {
        rest.children
      }
    </div>
  );
}

export default FontSizeRoot;