export const paginate = (data: any) => {
  const totalPages = Math.ceil(data.count / data.perPage);
  const totalPerPage = data.perPage;
  const currentPage = data.page;
  const prevPage = currentPage === 1 ? null : currentPage - 1;
  const nextPage = currentPage === totalPages ? null : currentPage + 1;

  return {
    data: data.data,
    pagination: {
      totalRecords: data.count,
      totalPerPage,
      totalPages,
      currentPage,
      nextPage,
      prevPage
    }
  };
};
