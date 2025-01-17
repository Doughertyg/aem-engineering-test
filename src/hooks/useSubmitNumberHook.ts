import { useState } from 'react';

const useSubmitNumberHook = () => {
  const [errors, setErrors] = useState<string | null>();
  const [data, setData] = useState();

  const submit = () => {
    // call axios
    // in success callback/promimse set the data
    // if there's an error, set it in state
  }

  return {
    data,
    errors,
    submit
  }
}

export default useSubmitNumberHook;
