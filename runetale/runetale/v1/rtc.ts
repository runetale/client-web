/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface StunHost {
  url: string;
  username: string;
  password: string;
}

export interface TurnHost {
  url: string;
  username: string;
  password: string;
}

export interface RtcConfig {
  turnHost: TurnHost | undefined;
  stunHost: StunHost | undefined;
}

export interface GetStunTurnConfigResponse {
  rtcConfig: RtcConfig | undefined;
}

function createBaseStunHost(): StunHost {
  return { url: "", username: "", password: "" };
}

export const StunHost = {
  encode(message: StunHost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StunHost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStunHost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StunHost {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: StunHost): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StunHost>, I>>(base?: I): StunHost {
    return StunHost.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StunHost>, I>>(object: I): StunHost {
    const message = createBaseStunHost();
    message.url = object.url ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseTurnHost(): TurnHost {
  return { url: "", username: "", password: "" };
}

export const TurnHost = {
  encode(message: TurnHost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TurnHost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTurnHost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TurnHost {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: TurnHost): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurnHost>, I>>(base?: I): TurnHost {
    return TurnHost.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurnHost>, I>>(object: I): TurnHost {
    const message = createBaseTurnHost();
    message.url = object.url ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseRtcConfig(): RtcConfig {
  return { turnHost: undefined, stunHost: undefined };
}

export const RtcConfig = {
  encode(message: RtcConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.turnHost !== undefined) {
      TurnHost.encode(message.turnHost, writer.uint32(10).fork()).ldelim();
    }
    if (message.stunHost !== undefined) {
      StunHost.encode(message.stunHost, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RtcConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRtcConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.turnHost = TurnHost.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stunHost = StunHost.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RtcConfig {
    return {
      turnHost: isSet(object.turnHost) ? TurnHost.fromJSON(object.turnHost) : undefined,
      stunHost: isSet(object.stunHost) ? StunHost.fromJSON(object.stunHost) : undefined,
    };
  },

  toJSON(message: RtcConfig): unknown {
    const obj: any = {};
    if (message.turnHost !== undefined) {
      obj.turnHost = TurnHost.toJSON(message.turnHost);
    }
    if (message.stunHost !== undefined) {
      obj.stunHost = StunHost.toJSON(message.stunHost);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RtcConfig>, I>>(base?: I): RtcConfig {
    return RtcConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RtcConfig>, I>>(object: I): RtcConfig {
    const message = createBaseRtcConfig();
    message.turnHost = (object.turnHost !== undefined && object.turnHost !== null)
      ? TurnHost.fromPartial(object.turnHost)
      : undefined;
    message.stunHost = (object.stunHost !== undefined && object.stunHost !== null)
      ? StunHost.fromPartial(object.stunHost)
      : undefined;
    return message;
  },
};

function createBaseGetStunTurnConfigResponse(): GetStunTurnConfigResponse {
  return { rtcConfig: undefined };
}

export const GetStunTurnConfigResponse = {
  encode(message: GetStunTurnConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rtcConfig !== undefined) {
      RtcConfig.encode(message.rtcConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStunTurnConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStunTurnConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rtcConfig = RtcConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStunTurnConfigResponse {
    return { rtcConfig: isSet(object.rtcConfig) ? RtcConfig.fromJSON(object.rtcConfig) : undefined };
  },

  toJSON(message: GetStunTurnConfigResponse): unknown {
    const obj: any = {};
    if (message.rtcConfig !== undefined) {
      obj.rtcConfig = RtcConfig.toJSON(message.rtcConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStunTurnConfigResponse>, I>>(base?: I): GetStunTurnConfigResponse {
    return GetStunTurnConfigResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStunTurnConfigResponse>, I>>(object: I): GetStunTurnConfigResponse {
    const message = createBaseGetStunTurnConfigResponse();
    message.rtcConfig = (object.rtcConfig !== undefined && object.rtcConfig !== null)
      ? RtcConfig.fromPartial(object.rtcConfig)
      : undefined;
    return message;
  },
};

export interface RtcService {
  GetStunTurnConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetStunTurnConfigResponse>;
}

export class RtcServiceClientImpl implements RtcService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetStunTurnConfig = this.GetStunTurnConfig.bind(this);
  }

  GetStunTurnConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetStunTurnConfigResponse> {
    return this.rpc.unary(RtcServiceGetStunTurnConfigDesc, Empty.fromPartial(request), metadata);
  }
}

export const RtcServiceDesc = { serviceName: "protos.RtcService" };

export const RtcServiceGetStunTurnConfigDesc: UnaryMethodDefinitionish = {
  methodName: "GetStunTurnConfig",
  service: RtcServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetStunTurnConfigResponse.decode(data);
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
