import { Request } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core";

export type TPostRequest<T> = Request<ParamsDictionary, any, Partial<T>, Query>;
export type TGetRequest<T> = Request<ParamsDictionary, any, any, Partial<T>>;
