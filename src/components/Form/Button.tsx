import { Button as ButtonLb, IButtonProps, Text } from 'native-base';

interface ButtonProps extends IButtonProps {
  name: string;
}

export function CustomButton({ name, ...rest }: ButtonProps) {
  return (
    <ButtonLb
      w="full"
      size="sm"
      borderRadius="8"
      bgColor="sun.100"
      _pressed={{ bgColor: 'sun.200' }}
      {...rest}
    >
      <Text fontSize="md" color="white" bold my="1">
        {name}
      </Text>
    </ButtonLb>
  );
}
