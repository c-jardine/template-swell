import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductOption } from 'swell-js';
import { Checkbox } from '../Checkbox';

interface OptionCheckboxGroupProps {
  option: ProductOption & { attributeId: string };
}

const OptionCheckboxGroup = (props: OptionCheckboxGroupProps) => {
  const [selected, setSelected] = React.useState<string>('');

  const { register, setValue, watch } = useFormContext();

  const _handleClick = (val: string) => {
    setSelected(val);
    setValue(props.option.attributeId, val);
  };

  /**
   * Set initial value/default value.
   */
  React.useEffect(() => {
    setSelected(watch(props.option.attributeId));
  }, [props.option.attributeId, watch]);
  return (
    <>
      <input hidden {...register(props.option.attributeId)} />
      <Flex gap={2}>
        {props.option.values.map((item) => (
          <Checkbox
            key={item.name}
            isToggled={selected === item.name}
            onToggle={() => _handleClick(item.name)}
          >
            {item.name}
          </Checkbox>
        ))}
      </Flex>
    </>
  );
};

export default OptionCheckboxGroup;
