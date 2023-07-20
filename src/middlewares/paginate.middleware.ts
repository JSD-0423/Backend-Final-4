import { NextFunction, Request, RequestHandler, Response } from 'express';
import { PaginationQuery } from '../interfaces';

const paginate = (data: any) => {
  const totalPages = Math.ceil(data.count / data.perPage);
  const totalPerPage = data.perPage;
  const currentPage = data.page;
  const prevPage = currentPage === 1 ? null : currentPage - 1;
  const nextPage = currentPage >= totalPages ? null : currentPage + 1;

  return {
    data: data.data,
    pagination: {
      totalRecords: data.count,
      totalPerPage: totalPerPage > data.count ? data.count : totalPerPage,
      totalPages,
      currentPage,
      nextPage,
      prevPage
    }
  };
};

export const paginateMiddleware: RequestHandler<
  object,
  object,
  object,
  PaginationQuery
> = (
  req: Request<object, object, object, PaginationQuery>,
  res: Response,
  next: NextFunction
) => {
  if (req.method !== 'GET') return next();
  let oldSend = res.send;
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const perPage = req.query.perPage ? parseInt(req.query.perPage) : 1;

  res.send = function (data) {
    let parsedData = JSON.parse(data);

    const result = paginate({
      data: parsedData.rows,
      count: parsedData.count,
      page,
      perPage
    });

    res.send = oldSend;
    return res.send(result);
  };

  next();
};
