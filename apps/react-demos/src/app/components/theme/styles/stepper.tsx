import { _fontSizes } from '../properties/fontSizes';
import { _colors } from '../properties/colors';
import { _space } from '../properties/space';
import { _radii } from '../properties/radius';
import { _borderWidths } from '../properties/borderWidths';

export const fontSizes = {
  collapseHeadingTextFontSize: _fontSizes.fontSizeTiny,
  collapseHeadingIconFontSize: _fontSizes.fontSizeTiny
};

export const colors = {
  collapseHeadingTextColor: _colors.black,
  collapseHeadingIconColor: _colors.black,
  collapseBorderColor: _colors.grayLight,
  collapseHeaderBackground: _colors.primary,
  collapseHeaderBackgroundHover: _colors.primaryHover
};

export const space = {
  collapseHeadingPaddingX: _space.globalSpacer,
  collapseHeadingPaddingY: _space.spacerMid,
  collapseContentPaddingX: _space.spacerMid,
  collapseContentPaddingY: _space.globalSpacer,
  collapseHeadingIconPaddingX: _space.spacerMid,
  collapseHeadingIconPaddingY: _space.spacerMid
};

export const radii = {
  collapseBordeRadius: _radii.borderRadius
};

export const borderWidths = {
  collapseBorderWidth: _borderWidths.borderWidth
};

export default {
  fontSizes,
  colors,
  space,
  radii,
  borderWidths
};