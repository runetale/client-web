/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface GetDevicesRequest {
  id: number;
}

export interface GetDevicesResponse {
  devices: DeviceResponse[];
}

export interface DeviceResponse {
  id: number;
  name: string;
  ip: string;
  os: string;
  status: boolean;
  /** only when false */
  lastSeen: string;
}

function createBaseGetDevicesRequest(): GetDevicesRequest {
  return { id: 0 };
}

export const GetDevicesRequest = {
  encode(message: GetDevicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDevicesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDevicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDevicesRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetDevicesRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDevicesRequest>, I>>(base?: I): GetDevicesRequest {
    return GetDevicesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDevicesRequest>, I>>(object: I): GetDevicesRequest {
    const message = createBaseGetDevicesRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetDevicesResponse(): GetDevicesResponse {
  return { devices: [] };
}

export const GetDevicesResponse = {
  encode(message: GetDevicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      DeviceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDevicesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDevicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.devices.push(DeviceResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDevicesResponse {
    return {
      devices: globalThis.Array.isArray(object?.devices)
        ? object.devices.map((e: any) => DeviceResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetDevicesResponse): unknown {
    const obj: any = {};
    if (message.devices?.length) {
      obj.devices = message.devices.map((e) => DeviceResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDevicesResponse>, I>>(base?: I): GetDevicesResponse {
    return GetDevicesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDevicesResponse>, I>>(object: I): GetDevicesResponse {
    const message = createBaseGetDevicesResponse();
    message.devices = object.devices?.map((e) => DeviceResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeviceResponse(): DeviceResponse {
  return { id: 0, name: "", ip: "", os: "", status: false, lastSeen: "" };
}

export const DeviceResponse = {
  encode(message: DeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.os !== "") {
      writer.uint32(34).string(message.os);
    }
    if (message.status !== false) {
      writer.uint32(40).bool(message.status);
    }
    if (message.lastSeen !== "") {
      writer.uint32(50).string(message.lastSeen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
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

          message.os = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lastSeen = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeviceResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      lastSeen: isSet(object.lastSeen) ? globalThis.String(object.lastSeen) : "",
    };
  },

  toJSON(message: DeviceResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.status !== false) {
      obj.status = message.status;
    }
    if (message.lastSeen !== "") {
      obj.lastSeen = message.lastSeen;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeviceResponse>, I>>(base?: I): DeviceResponse {
    return DeviceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeviceResponse>, I>>(object: I): DeviceResponse {
    const message = createBaseDeviceResponse();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.ip = object.ip ?? "";
    message.os = object.os ?? "";
    message.status = object.status ?? false;
    message.lastSeen = object.lastSeen ?? "";
    return message;
  },
};

export interface DeviceService {
  GetDevice(request: DeepPartial<GetDevicesRequest>, metadata?: grpc.Metadata): Promise<DeviceResponse>;
  GetDevices(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetDevicesResponse>;
}

export class DeviceServiceClientImpl implements DeviceService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetDevice = this.GetDevice.bind(this);
    this.GetDevices = this.GetDevices.bind(this);
  }

  GetDevice(request: DeepPartial<GetDevicesRequest>, metadata?: grpc.Metadata): Promise<DeviceResponse> {
    return this.rpc.unary(DeviceServiceGetDeviceDesc, GetDevicesRequest.fromPartial(request), metadata);
  }

  GetDevices(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetDevicesResponse> {
    return this.rpc.unary(DeviceServiceGetDevicesDesc, Empty.fromPartial(request), metadata);
  }
}

export const DeviceServiceDesc = { serviceName: "protos.DeviceService" };

export const DeviceServiceGetDeviceDesc: UnaryMethodDefinitionish = {
  methodName: "GetDevice",
  service: DeviceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetDevicesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeviceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const DeviceServiceGetDevicesDesc: UnaryMethodDefinitionish = {
  methodName: "GetDevices",
  service: DeviceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetDevicesResponse.decode(data);
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
