import { FaRegWindowClose } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-container">
      <FaRegWindowClose className='close-icon' />
      <section className="how-inner">
        <h2 className="title">How the search functionality works?</h2>
        <ul className="steps">
          <li>The website doesn't need any authentication!</li>
          <li>When you first load the website, a default set of movies will be rendered.</li>
          <li>When you search about anything, if the API has a matching data, it will return it.</li>
          <li>You can click on each title to take you to the watching page of the movie.</li>
        </ul>
      </section>
    </section>
  );
}

export default HowItWorks;
