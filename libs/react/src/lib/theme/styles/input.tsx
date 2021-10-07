import { _fontSizes } from '../properties/fontSizes';
import { _colors } from '../properties/colors';
import { _space } from '../properties/space';
import { _radii } from '../properties/radius';
import { _sizes } from '../properties/sizes';
import { _borderWidths } from '../properties/borderWidths';
import { _fontWeights} from '../properties/fontWeights';
import { buttons, borderCurved, borderRounded } from '../variants/buttons';


export const fontSizes = {
  inputHeadingTextFontSize: _fontSizes.fontSizeH6,
  inputHeadingIconFontSize: _fontSizes.fontSizeTiny
};

export const colors = {
 inputThemeColor: _colors.primary,
 errorMessage:_colors.error,
 priamryText:_colors.dark,
 placeholderColor:_colors.grayDark,
 disableColor:_colors.grayLight,
};

export const space = {
 inputMargin: _space.globalSpacer,
 inputAlignmentFromTop: _space.spacerSS,
 inputPadding: '1rem 1rem',
 inputLetterSpacing:'0.125em',
};

export const radii = {
 inputItemRadius: _radii.borderRadiusHalf
};

export const borderWidths = {
  inputBorderWidth: _borderWidths.borderWidth
};

export const sizes = {
 inputItemHeight: _sizes.size_2_25rem,
 inputItemWidth: _sizes.size_100pc
};
export const lineHeights={
  inputlineHeight: '28px',
}
export const fontWeights = {
  inputfontWeight:_fontWeights.fontweight_normal
}
export default {
  fontSizes,
  colors,
  space,
  radii,
  borderWidths,
  sizes,
  lineHeights,
  borderCurved, 
  borderRounded,
  buttons
};