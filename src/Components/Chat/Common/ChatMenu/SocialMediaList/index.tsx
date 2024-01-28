const SocialMediaList = () => {
  return (
    <div className="social-list">
      <ul className="simple-list flex-row">
        <li>
          <a href="https://www.facebook.com/">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.google.com/">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://dashboard.rss.com/auth/sign-in/">
            <i className="fa fa-rss"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaList;
