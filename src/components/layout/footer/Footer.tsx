import GitHubSVG from '../../../assets/github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <a
          href="https://github.com/mehmetcanaygun"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubSVG} alt="GitHub Icon" />
          <span>mehmetcanaygun</span>
        </a>
      </div>
      <div className="reference">
        <a
          href="https://simplemaps.com/resources/svg-world"
          target="_blank"
          rel="noreferrer"
        >
          Map Data
        </a>
      </div>
    </footer>
  );
};

export default Footer;
