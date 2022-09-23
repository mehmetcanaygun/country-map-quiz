import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IQuizState, unlockCountry, end } from '../../redux/quizSlice';
import Map from '../map/Map';
import { FIFTEEN_MINUTES } from '../../constants';
import { formatTime } from '../../utils';

const Quiz = () => {
  const [countryInput, setCountryInput] = useState('');
  const [time, setTime] = useState(FIFTEEN_MINUTES);

  const quizState = useSelector((state: { quiz: IQuizState }) => state.quiz);

  const dispatch = useDispatch();

  const onCountryInputChange = (val: string) => {
    setCountryInput(val);
  };

  const controlCountry = () => {
    const found = quizState.countries.find(
      (country) =>
        country.name.toLowerCase() === countryInput.trim().toLowerCase() &&
        !quizState.unlockedCountries.includes(country.id)
    );

    if (found) {
      dispatch(unlockCountry(found));
      setCountryInput('');
    }
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          dispatch(end());
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    controlCountry();
  }, [countryInput]);

  return (
    <div className="quiz">
      <div className="input-wrapper">
        <div className="time">{formatTime(time)}</div>

        <input
          type="text"
          className="country-input"
          value={countryInput}
          onChange={(e) => onCountryInputChange(e.target.value)}
        />

        <div className="score">
          <span>{quizState.unlockedCountries.length}</span>/
          {quizState.countries.length}
        </div>
      </div>

      <div className="map-wrapper">
        <Map />
      </div>
    </div>
  );
};

export default Quiz;
