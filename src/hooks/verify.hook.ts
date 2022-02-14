import { useCallback, useState } from 'react';


const access = process.env.REACT_APP_NUMVERIFY_V1;
const urlNumVerify = 'http://apilayer.net/api/validate?access_key=' + access + '&number=';

export const useNumverify = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validate = useCallback(async (phone) => {

    setLoading(true)

    try {

      const response = await fetch(urlNumVerify + phone.join(''));
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ooops. Something going wrong...!');
      }

      setLoading(false);

      return data.valid;

    } catch(e : any) {
      setLoading(false);
      setError(e.message);
      throw e
    }

  }, [])
  const clearError = useCallback(() => setError(null), []);

  return { loading, validate, error, clearError };

}