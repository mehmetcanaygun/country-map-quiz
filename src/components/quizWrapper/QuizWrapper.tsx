import { useSelector } from 'react-redux';
import { IQuizState } from '../../redux/quizSlice';
import Modal from '../modal/Modal';
import Quiz from '../quiz/Quiz';
import Footer from '../layout/footer/Footer';
import { PHASES } from '../../constants';

const QuizWrapper = () => {
  const phase = useSelector((state: { quiz: IQuizState }) => state.quiz.phase);

  const renderPhase = () => {
    if (phase === PHASES.START) {
      return <Modal />;
    } else if (phase === PHASES.QUIZ) {
      return <Quiz />;
    } else {
      return <Modal />;
    }
  };

  return (
    <>
      <div className="quiz-board">{renderPhase()}</div>
      <Footer />
    </>
  );
};

export default QuizWrapper;
