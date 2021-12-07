export const Films = ({ films, hello }) => {
  if (films.length <= 0) {
    return <></>;
  }

  return (
    <ul>
      {films.map(({ title, director }) => {
        return (
          <li key={title} className="p-4">
            Name: {title}. Director: {director}
          </li>
        );
      })}
    </ul>
  );
};

export default Films;
