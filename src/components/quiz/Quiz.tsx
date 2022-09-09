import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IQuizState, unlockCountry } from '../../redux/quizSlice';

const Quiz = () => {
  const [countryInput, setCountryInput] = useState('');

  const quizState = useSelector((state: { quiz: IQuizState }) => state.quiz);

  const dispatch = useDispatch();

  const onCountryInputChange = (val: string) => {
    setCountryInput(val);
  };

  const controlCountry = () => {
    const found = quizState.countries.find(
      (country) =>
        country.name.toLowerCase() === countryInput.toLowerCase() &&
        !quizState.unlockedCountries.includes(country.id)
    );

    if (found) {
      dispatch(unlockCountry(found));
      setCountryInput('');
    }
  };

  useEffect(() => {
    controlCountry();
  }, [countryInput]);

  return (
    <div className="quiz">
      <input
        type="text"
        value={countryInput}
        onChange={(e) => onCountryInputChange(e.target.value)}
      />
    </div>
  );
};

export default Quiz;
