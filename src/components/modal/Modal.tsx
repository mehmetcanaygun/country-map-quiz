import { useDispatch, useSelector } from 'react-redux';
import { PHASES } from '../../constants';
import { IQuizState, start } from '../../redux/quizSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: { quiz: IQuizState }) => state.quiz);

  const onStartClick = () => {
    dispatch(start());
  };

  return (
    <div className="modal start-modal">
      <h1>
        {state.phase === PHASES.START
          ? 'Welcome to Country Map Quiz!'
          : `Well done! Your score is ${state.unlockedCountries.length}/${state.countries.length}.`}
      </h1>
      <button onClick={onStartClick}>
        {state.phase === PHASES.START ? 'Start' : 'Play Again'}
      </button>
    </div>
  );
};

export default Modal;
