/* eslint-disable @typescript-eslint/no-namespace */

import * as express from "express";
import * as core from "express-serve-static-core";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Request<
  T = any,
  U = core.ParamsDictionary,
  V = core.Query
> = express.Request<U, any, T, V>;
