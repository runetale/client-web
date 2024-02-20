/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface JoinResponse {
  isRegistered: boolean;
  loginUrl: string;
  ip: string;
  cidr: string;
  signalHost: string;
  signalPort: number;
}

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

function createBaseJoinResponse(): JoinResponse {
  return { isRegistered: false, loginUrl: "", ip: "", cidr: "", signalHost: "", signalPort: 0 };
}

export const JoinResponse = {
  encode(message: JoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isRegistered === true) {
      writer.uint32(8).bool(message.isRegistered);
    }
    if (message.loginUrl !== "") {
      writer.uint32(18).string(message.loginUrl);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(34).string(message.cidr);
    }
    if (message.signalHost !== "") {
      writer.uint32(42).string(message.signalHost);
    }
    if (message.signalPort !== 0) {
      writer.uint32(48).uint64(message.signalPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRegistered = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.loginUrl = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cidr = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signalHost = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.signalPort = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JoinResponse {
    return {
      isRegistered: isSet(object.isRegistered) ? globalThis.Boolean(object.isRegistered) : false,
      loginUrl: isSet(object.loginUrl) ? globalThis.String(object.loginUrl) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      cidr: isSet(object.cidr) ? globalThis.String(object.cidr) : "",
      signalHost: isSet(object.signalHost) ? globalThis.String(object.signalHost) : "",
      signalPort: isSet(object.signalPort) ? globalThis.Number(object.signalPort) : 0,
    };
  },

  toJSON(message: JoinResponse): unknown {
    const obj: any = {};
    if (message.isRegistered === true) {
      obj.isRegistered = message.isRegistered;
    }
    if (message.loginUrl !== "") {
      obj.loginUrl = message.loginUrl;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.cidr !== "") {
      obj.cidr = message.cidr;
    }
    if (message.signalHost !== "") {
      obj.signalHost = message.signalHost;
    }
    if (message.signalPort !== 0) {
      obj.signalPort = Math.round(message.signalPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JoinResponse>, I>>(base?: I): JoinResponse {
    return JoinResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JoinResponse>, I>>(object: I): JoinResponse {
    const message = createBaseJoinResponse();
    message.isRegistered = object.isRegistered ?? false;
    message.loginUrl = object.loginUrl ?? "";
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.signalHost = object.signalHost ?? "";
    message.signalPort = object.signalPort ?? 0;
    return message;
  },
};

function createBasePeerLoginSessionResponse(): PeerLoginSessionResponse {
  return { ip: "", cidr: "", host: "", os: "", signalServerHost: "", signalServerPort: 0 };
}

export const PeerLoginSessionResponse = {
  encode(message: PeerLoginSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerLoginSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerLoginSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cidr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.os = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signalServerHost = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.signalServerPort = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PeerLoginSessionResponse {
    return {
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      cidr: isSet(object.cidr) ? globalThis.String(object.cidr) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      signalServerHost: isSet(object.signalServerHost) ? globalThis.String(object.signalServerHost) : "",
      signalServerPort: isSet(object.signalServerPort) ? globalThis.Number(object.signalServerPort) : 0,
    };
  },

  toJSON(message: PeerLoginSessionResponse): unknown {
    const obj: any = {};
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.cidr !== "") {
      obj.cidr = message.cidr;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.signalServerHost !== "") {
      obj.signalServerHost = message.signalServerHost;
    }
    if (message.signalServerPort !== 0) {
      obj.signalServerPort = Math.round(message.signalServerPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PeerLoginSessionResponse>, I>>(base?: I): PeerLoginSessionResponse {
    return PeerLoginSessionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PeerLoginSessionResponse>, I>>(object: I): PeerLoginSessionResponse {
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
  Join(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<JoinResponse>;
  StreamPeerLoginSession(
    request: Observable<DeepPartial<Empty>>,
    metadata?: grpc.Metadata,
  ): Observable<PeerLoginSessionResponse>;
}

export class LoginSessionServiceClientImpl implements LoginSessionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Join = this.Join.bind(this);
    this.StreamPeerLoginSession = this.StreamPeerLoginSession.bind(this);
  }

  Join(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<JoinResponse> {
    return this.rpc.unary(LoginSessionServiceJoinDesc, Empty.fromPartial(request), metadata);
  }

  StreamPeerLoginSession(
    request: Observable<DeepPartial<Empty>>,
    metadata?: grpc.Metadata,
  ): Observable<PeerLoginSessionResponse> {
    throw new Error("ts-proto does not yet support client streaming!");
  }
}

export const LoginSessionServiceDesc = { serviceName: "protos.LoginSessionService" };

export const LoginSessionServiceJoinDesc: UnaryMethodDefinitionish = {
  methodName: "Join",
  service: LoginSessionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = JoinResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => client.close());
      };
      upStream();
    }).pipe(share());
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
