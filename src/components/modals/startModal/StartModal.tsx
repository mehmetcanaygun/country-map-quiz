import { useDispatch } from 'react-redux';
import { start } from '../../../redux/quizSlice';

const StartModal = () => {
  const dispatch = useDispatch();

  const onStartClick = () => {
    dispatch(start('hehe'));
  };

  return (
    <div className="modal start-modal">
      <h1>Welcome to Country Map Quiz!</h1>
      <button onClick={onStartClick}>Start</button>
    </div>
  );
};

export default StartModal;
