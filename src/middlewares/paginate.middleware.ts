import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Product } from '../models';

const paginate = (data: any) => {
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

export const paginateMiddleware: RequestHandler<
  object,
  object,
  object,
  { page: number; perPage: number }
> = (
  req: Request<object, object, object, { page: number; perPage: number }>,
  res: Response,
  next: NextFunction
) => {
  let oldSend = res.send;
  const page = req.query.page ?? 1;
  const perPage = req.query.perPage ?? 1;

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
