const Paginate = (followers) => {
  const itemPerPage = 10;
  const numberOfPage = Math.ceil(followers.length / itemPerPage);

  const newFollowers = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage);
  });

  return newFollowers;
};

export default Paginate;
