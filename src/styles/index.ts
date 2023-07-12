import light from './light';
import dark from './dark';
import defaultStyled from './default';

export default {
  light: {
    ...light,
    ...defaultStyled,
  },
  dark : {
    ...dark,
    ...defaultStyled,
  },
};
