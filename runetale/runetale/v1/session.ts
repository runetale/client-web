/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protos";

export interface VerifyPeerLoginSessionRequest {
  /** jwt session id for etcd */
  sessionID: string;
}

export interface VerifyPeerLoginSessionResponse {
  /** host ip */
  ip: string;
  /** host name */
  host: string;
  /** host os */
  os: string;
}

function createBaseVerifyPeerLoginSessionRequest(): VerifyPeerLoginSessionRequest {
  return { sessionID: "" };
}

export const VerifyPeerLoginSessionRequest = {
  encode(message: VerifyPeerLoginSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionID !== "") {
      writer.uint32(10).string(message.sessionID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPeerLoginSessionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPeerLoginSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPeerLoginSessionRequest {
    return { sessionID: isSet(object.sessionID) ? globalThis.String(object.sessionID) : "" };
  },

  toJSON(message: VerifyPeerLoginSessionRequest): unknown {
    const obj: any = {};
    if (message.sessionID !== "") {
      obj.sessionID = message.sessionID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyPeerLoginSessionRequest>, I>>(base?: I): VerifyPeerLoginSessionRequest {
    return VerifyPeerLoginSessionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerifyPeerLoginSessionRequest>, I>>(
    object: I,
  ): VerifyPeerLoginSessionRequest {
    const message = createBaseVerifyPeerLoginSessionRequest();
    message.sessionID = object.sessionID ?? "";
    return message;
  },
};

function createBaseVerifyPeerLoginSessionResponse(): VerifyPeerLoginSessionResponse {
  return { ip: "", host: "", os: "" };
}

export const VerifyPeerLoginSessionResponse = {
  encode(message: VerifyPeerLoginSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.host !== "") {
      writer.uint32(18).string(message.host);
    }
    if (message.os !== "") {
      writer.uint32(26).string(message.os);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPeerLoginSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPeerLoginSessionResponse();
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

          message.host = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.os = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPeerLoginSessionResponse {
    return {
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
    };
  },

  toJSON(message: VerifyPeerLoginSessionResponse): unknown {
    const obj: any = {};
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyPeerLoginSessionResponse>, I>>(base?: I): VerifyPeerLoginSessionResponse {
    return VerifyPeerLoginSessionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerifyPeerLoginSessionResponse>, I>>(
    object: I,
  ): VerifyPeerLoginSessionResponse {
    const message = createBaseVerifyPeerLoginSessionResponse();
    message.ip = object.ip ?? "";
    message.host = object.host ?? "";
    message.os = object.os ?? "";
    return message;
  },
};

export interface SessionService {
  VerifyPeerLoginSession(
    request: DeepPartial<VerifyPeerLoginSessionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<VerifyPeerLoginSessionResponse>;
}

export class SessionServiceClientImpl implements SessionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.VerifyPeerLoginSession = this.VerifyPeerLoginSession.bind(this);
  }

  VerifyPeerLoginSession(
    request: DeepPartial<VerifyPeerLoginSessionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<VerifyPeerLoginSessionResponse> {
    return this.rpc.unary(
      SessionServiceVerifyPeerLoginSessionDesc,
      VerifyPeerLoginSessionRequest.fromPartial(request),
      metadata,
    );
  }
}

export const SessionServiceDesc = { serviceName: "protos.SessionService" };

export const SessionServiceVerifyPeerLoginSessionDesc: UnaryMethodDefinitionish = {
  methodName: "VerifyPeerLoginSession",
  service: SessionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return VerifyPeerLoginSessionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = VerifyPeerLoginSessionResponse.decode(data);
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
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
