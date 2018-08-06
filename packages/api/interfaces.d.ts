/**
 * Server
 */

import { ServerResponse } from "microrouter";
import { IncomingMessage } from "http";

interface IRequest extends IncomingMessage {
  params: any;
}

interface IResponse extends ServerResponse {}

interface IRequestJson {
  _id: string;
}
