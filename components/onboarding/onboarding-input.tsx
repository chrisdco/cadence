import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { spacing, type } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** Large, unfilled answer field for a single onboarding question. */
export function OnboardingInput({ style, ...props }: TextInputProps) {
  const { colors } = useTheme();

  return (
    <TextInput
      placeholderTextColor={colors.tertiary}
      selectionColor={colors.accent}
      {...props}
      style={[
        styles.input,
        { color: colors.foreground },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    ...type.largeTitle,
    textAlign: 'center',
    width: '100%',
    paddingVertical: spacing.xxl,
  },
});
