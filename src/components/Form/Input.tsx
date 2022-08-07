import { Input as InputLb, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <InputLb
      size="lg"
      borderRadius={10}
      borderWidth={2}
      _focus={{ borderColor: 'sun.100', bgColor: 'muted.100' }}
      {...rest}
    />
  );
}
