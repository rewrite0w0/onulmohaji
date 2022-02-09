import React, { useState } from 'react';

const _TEMP_ = React.createContext();

const TEMPProvider = ({ children }) => {
  const [tmp, setTmp] = useState('move?');
  return <_TEMP_.Provider value={tmp}>{children}</_TEMP_.Provider>;
};

export { _TEMP_, TEMPProvider };
