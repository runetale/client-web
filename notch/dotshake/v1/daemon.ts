/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface GetConnectionStatusResponse {
  IsConnected: boolean;
}

function createBaseGetConnectionStatusResponse(): GetConnectionStatusResponse {
  return { IsConnected: false };
}

export const GetConnectionStatusResponse = {
  encode(message: GetConnectionStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.IsConnected === true) {
      writer.uint32(8).bool(message.IsConnected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectionStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConnectionStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.IsConnected = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetConnectionStatusResponse {
    return { IsConnected: isSet(object.IsConnected) ? Boolean(object.IsConnected) : false };
  },

  toJSON(message: GetConnectionStatusResponse): unknown {
    const obj: any = {};
    message.IsConnected !== undefined && (obj.IsConnected = message.IsConnected);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetConnectionStatusResponse>, I>>(base?: I): GetConnectionStatusResponse {
    return GetConnectionStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetConnectionStatusResponse>, I>>(object: I): GetConnectionStatusResponse {
    const message = createBaseGetConnectionStatusResponse();
    message.IsConnected = object.IsConnected ?? false;
    return message;
  },
};

export interface DaemonService {
  /** connections */
  Connect(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetConnectionStatusResponse>;
  Disconnect(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetConnectionStatusResponse>;
  GetConnectionStatus(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetConnectionStatusResponse>;
}

export class DaemonServiceClientImpl implements DaemonService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Connect = this.Connect.bind(this);
    this.Disconnect = this.Disconnect.bind(this);
    this.GetConnectionStatus = this.GetConnectionStatus.bind(this);
  }

  Connect(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetConnectionStatusResponse> {
    return this.rpc.unary(DaemonServiceConnectDesc, Empty.fromPartial(request), metadata);
  }

  Disconnect(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetConnectionStatusResponse> {
    return this.rpc.unary(DaemonServiceDisconnectDesc, Empty.fromPartial(request), metadata);
  }

  GetConnectionStatus(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetConnectionStatusResponse> {
    return this.rpc.unary(DaemonServiceGetConnectionStatusDesc, Empty.fromPartial(request), metadata);
  }
}

export const DaemonServiceDesc = { serviceName: "protos.DaemonService" };

export const DaemonServiceConnectDesc: UnaryMethodDefinitionish = {
  methodName: "Connect",
  service: DaemonServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetConnectionStatusResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const DaemonServiceDisconnectDesc: UnaryMethodDefinitionish = {
  methodName: "Disconnect",
  service: DaemonServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetConnectionStatusResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const DaemonServiceGetConnectionStatusDesc: UnaryMethodDefinitionish = {
  methodName: "GetConnectionStatus",
  service: DaemonServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetConnectionStatusResponse.decode(data);
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}