import React from 'react';

import * as S from './styles';

export default function IconImage(props) {
const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
  return (
    <S.Image src={icon} alt={props.city}/>
  );
}
