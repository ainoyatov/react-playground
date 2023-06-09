/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import useNavBarResponsiveSize from './useNavBarResponsiveSize';

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = {
  ScreenDesktop: 'ScreenDesktop',
  ScreenMobile: 'ScreenMobile',
};

const useNavBar = () => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions['ScreenDesktop']
  );

  const breakpointsVariant = useNavBarResponsiveSize();
  

  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpointsVariant]);

  const data = { currentVariant };

  const fns = { setCurrentVariant };
  return { data, fns };
};

export default useNavBar;
