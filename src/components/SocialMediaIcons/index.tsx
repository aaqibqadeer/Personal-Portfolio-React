export const SocialMediaIcons = ({ social }) => {
  return social ? (
    <div className="social">
      <ul>
        {social?.map((social, i) => (
          <li key={i}>
            <a href={social.url} target="_blank" rel="noreferrer">
              <i className={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
