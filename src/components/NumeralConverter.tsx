import { Button, Form, NumberField } from '@adobe/react-spectrum';
import './NumeralConverter.css'
import { useState } from 'react';
import { MAX_NUMBER, MIN_NUMBER } from '../utils/constants';

/**
 * Roman Numeral Converter component
 * Takes in a number (from 1 to 3999) and converts it to a roman numeral
 * @returns 
 */
const NumeralConverer = () => {
  const [input, setInput] = useState<number>();
  const [output, setOutput] = useState<string>();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setOutput(output + 'V');
  }

  return (
    <div className='converter-wrapper'>
      <Form onSubmit={submit} action=''>
        <h3>Roman numeral converter</h3>
        <NumberField
          hideStepper
          isRequired
          maxValue={MAX_NUMBER}
          minValue={MIN_NUMBER}
          onChange={setInput}
          value={input}
          label="Enter a number"
        />
        <Button type="submit" variant="primary">Convert to roman numeral</Button>
        <h4>Roman numeral: {output}</h4>
      </Form>
    </div>
  )
}

export default NumeralConverer;
