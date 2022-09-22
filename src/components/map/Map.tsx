import { useDispatch, useSelector } from 'react-redux';
import { countryList } from '../../constants';
import { IQuizState } from '../../redux/quizSlice';

const Map = () => {
  const dispatch = useDispatch();
  const quizState = useSelector((state: { quiz: IQuizState }) => state.quiz);

  return (
    <svg
      className="map-svg"
      baseProfile="tiny"
      fill="#ececec"
      strokeWidth=".2"
      version="1.2"
      viewBox="0 0 2000 857"
    >
      {countryList.map((country) =>
        country.paths.map((path, index) => (
          <path
            key={country.id + index}
            d={path}
            className={
              quizState.unlockedCountries.includes(country.id)
                ? 'unlocked'
                : 'disabled'
            }
          ></path>
        ))
      )}
    </svg>
  );
};

export default Map;
