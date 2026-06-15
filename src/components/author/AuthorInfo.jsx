function AuthorInfo({ author, date }) {
  if (!author) return null;

  const avatarLetter = author.username?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <div className="author-info">
      {author.photo ? (
        <img
          className="author-info__photo"
          src={author.photo}
          alt={author.username}
          width={40}
          height={40}
        />
      ) : (
        <span className="author-info__photo author-info__photo--placeholder">
          {avatarLetter}
        </span>
      )}

      <div className="author-info__content">
        <span className="author-info__name">{author.username}</span>
        {date && <time className="author-info__date">{date}</time>}
      </div>
    </div>
  );
}

export default AuthorInfo;
