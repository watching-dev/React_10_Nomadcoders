function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {/* 또 배열 값이기 때문에 map 사용 / map은 key를 등록해야 함  */}
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
