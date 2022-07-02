/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { share } from "rxjs/operators";
import Long from "long";
import { Observable } from "rxjs";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface PeerLoginSessionResponse {
  /** host ip */
  ip: string;
  /** host wireguard cidr */
  cidr: string;
  /** host name */
  host: string;
  /** host os */
  os: string;
  signalServerHost: string;
  signalServerPort: number;
}

function createBasePeerLoginSessionResponse(): PeerLoginSessionResponse {
  return {
    ip: "",
    cidr: "",
    host: "",
    os: "",
    signalServerHost: "",
    signalServerPort: 0,
  };
}

export const PeerLoginSessionResponse = {
  encode(
    message: PeerLoginSessionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(18).string(message.cidr);
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    if (message.os !== "") {
      writer.uint32(34).string(message.os);
    }
    if (message.signalServerHost !== "") {
      writer.uint32(42).string(message.signalServerHost);
    }
    if (message.signalServerPort !== 0) {
      writer.uint32(48).uint64(message.signalServerPort);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PeerLoginSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerLoginSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.cidr = reader.string();
          break;
        case 3:
          message.host = reader.string();
          break;
        case 4:
          message.os = reader.string();
          break;
        case 5:
          message.signalServerHost = reader.string();
          break;
        case 6:
          message.signalServerPort = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeerLoginSessionResponse {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      cidr: isSet(object.cidr) ? String(object.cidr) : "",
      host: isSet(object.host) ? String(object.host) : "",
      os: isSet(object.os) ? String(object.os) : "",
      signalServerHost: isSet(object.signalServerHost)
        ? String(object.signalServerHost)
        : "",
      signalServerPort: isSet(object.signalServerPort)
        ? Number(object.signalServerPort)
        : 0,
    };
  },

  toJSON(message: PeerLoginSessionResponse): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.cidr !== undefined && (obj.cidr = message.cidr);
    message.host !== undefined && (obj.host = message.host);
    message.os !== undefined && (obj.os = message.os);
    message.signalServerHost !== undefined &&
      (obj.signalServerHost = message.signalServerHost);
    message.signalServerPort !== undefined &&
      (obj.signalServerPort = Math.round(message.signalServerPort));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerLoginSessionResponse>, I>>(
    object: I
  ): PeerLoginSessionResponse {
    const message = createBasePeerLoginSessionResponse();
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.host = object.host ?? "";
    message.os = object.os ?? "";
    message.signalServerHost = object.signalServerHost ?? "";
    message.signalServerPort = object.signalServerPort ?? 0;
    return message;
  },
};

export interface LoginSessionService {
  StreamPeerLoginSession(
    request: Observable<DeepPartial<Empty>>,
    metadata?: grpc.Metadata
  ): Observable<PeerLoginSessionResponse>;
}

export class LoginSessionServiceClientImpl implements LoginSessionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.StreamPeerLoginSession = this.StreamPeerLoginSession.bind(this);
  }

  StreamPeerLoginSession(
    request: Observable<DeepPartial<Empty>>,
    metadata?: grpc.Metadata
  ): Observable<PeerLoginSessionResponse> {
    throw new Error("ts-proto does not yet support client streaming!");
  }
}

export const LoginSessionServiceDesc = {
  serviceName: "protos.LoginSessionService",
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any> {
    // Status Response Codes (https://developers.google.com/maps-booking/reference/grpc-api/status_codes)
    const upStreamCodes = [2, 4, 8, 9, 10, 13, 14, 15];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          transport: this.options.streamingTransport || this.options.transport,
          metadata: maybeCombinedMetadata,
          debug: this.options.debug,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              observer.error(new Error(`Error ${code} ${message}`));
            }
          },
        });
        observer.add(() => client.close());
      };
      upStream();
    }).pipe(share());
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
