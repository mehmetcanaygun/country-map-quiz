import { useSelector } from 'react-redux';
import { IQuizState } from '../../redux/quizSlice';
import StartModal from '../modals/startModal/StartModal';
import Quiz from '../quiz/Quiz';

const QuizWrapper = () => {
  const isStarted = useSelector(
    (state: { quiz: IQuizState }) => state.quiz.isStarted
  );

  return (
    <div className="quiz-board">{isStarted ? <Quiz /> : <StartModal />}</div>
  );
};

export default QuizWrapper;
