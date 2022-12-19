import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ProductOptionValue } from 'swell-js';
import { Checkbox } from '../Checkbox';

interface OptionCheckboxGroupProps {
  items: ProductOptionValue[];
}

const OptionCheckboxGroup = (props: OptionCheckboxGroupProps) => {
  const [selected, setSelected] = React.useState<string>('');

  const _handleClick = (val: string) => {
    console.log(val);
    setSelected(val);
  };
  return (
    <Flex gap={2}>
      {props.items.map((item) => (
        <Checkbox
          key={item.name}
          isToggled={selected === item.name}
          onToggle={() => _handleClick(item.name)}
        >
          {item.name}
        </Checkbox>
      ))}
    </Flex>
  );
};

export default OptionCheckboxGroup;
