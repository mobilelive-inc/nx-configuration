import { colors } from '../properties/colors';

export const stepper = {
  primary: {
    borderColor: colors.primary,
    color: colors.primary,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.primary
    }
  },
  secondary: {
    borderColor: colors.secondary,
    color: colors.secondary,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.secondary
    }
  },
  success: {
    borderColor: colors.success,
    color: colors.success,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.success
    }
  },
  danger: {
    borderColor: colors.danger,
    color: colors.danger,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.danger
    }
  }
};

export const visitedStep = {
  primary: {
    backgroundColor: colors.primary,
    '&:hover': {
      color: colors.white
    }
  },
  secondary: {
    backgroundColor: colors.secondary,
    '&:hover': {
      color: colors.white
    }
  },
  success: {
    backgroundColor: colors.success,
    '&:hover': {
      color: colors.white
    }
  },
  danger: {
    backgroundColor: colors.danger,
    '&:hover': {
      color: colors.white
    }
  }
};

export const stepperWrapper = {
  primary: {
    opacity: 1,
    backgroundColor: `${colors.primary}1A`
  },
  secondary: {
    opacity: 1,
    backgroundColor: `${colors.secondary}1A`
  },
  light: {
    opacity: 1,
    backgroundColor: `${colors.light}1A`
  },
  dark: {
    opacity: 1,
    backgroundColor: colors.light
  }
};