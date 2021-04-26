export type TMongooseModel<T> = T & {
  _id: string;
  __v?: number;
};
