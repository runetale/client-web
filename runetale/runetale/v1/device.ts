/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { FleetResponse } from "./fleet";
import { GroupResponse } from "./group";
import { ResourceResponse } from "./resource";

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
  email: string;
  ip: string;
  os: string;
  status: boolean;
  /** only when status false */
  lastSeen: string;
  createdBy: string;
  version: string;
  nodeKey: string;
  createdAt: string;
  keyExpiry: string;
  fleets: FleetResponse[];
  resources: ResourceResponse[];
  groups: GroupResponse[];
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
  return {
    id: 0,
    name: "",
    email: "",
    ip: "",
    os: "",
    status: false,
    lastSeen: "",
    createdBy: "",
    version: "",
    nodeKey: "",
    createdAt: "",
    keyExpiry: "",
    fleets: [],
    resources: [],
    groups: [],
  };
}

export const DeviceResponse = {
  encode(message: DeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    if (message.os !== "") {
      writer.uint32(42).string(message.os);
    }
    if (message.status !== false) {
      writer.uint32(48).bool(message.status);
    }
    if (message.lastSeen !== "") {
      writer.uint32(58).string(message.lastSeen);
    }
    if (message.createdBy !== "") {
      writer.uint32(66).string(message.createdBy);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    if (message.nodeKey !== "") {
      writer.uint32(82).string(message.nodeKey);
    }
    if (message.createdAt !== "") {
      writer.uint32(90).string(message.createdAt);
    }
    if (message.keyExpiry !== "") {
      writer.uint32(98).string(message.keyExpiry);
    }
    for (const v of message.fleets) {
      FleetResponse.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.resources) {
      ResourceResponse.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupResponse.encode(v!, writer.uint32(122).fork()).ldelim();
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

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.os = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastSeen = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.version = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.nodeKey = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.keyExpiry = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.fleets.push(FleetResponse.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.resources.push(ResourceResponse.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.groups.push(GroupResponse.decode(reader, reader.uint32()));
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
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      lastSeen: isSet(object.lastSeen) ? globalThis.String(object.lastSeen) : "",
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      nodeKey: isSet(object.nodeKey) ? globalThis.String(object.nodeKey) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      keyExpiry: isSet(object.keyExpiry) ? globalThis.String(object.keyExpiry) : "",
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => FleetResponse.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => ResourceResponse.fromJSON(e))
        : [],
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupResponse.fromJSON(e)) : [],
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
    if (message.email !== "") {
      obj.email = message.email;
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
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.nodeKey !== "") {
      obj.nodeKey = message.nodeKey;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.keyExpiry !== "") {
      obj.keyExpiry = message.keyExpiry;
    }
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => FleetResponse.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => ResourceResponse.toJSON(e));
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => GroupResponse.toJSON(e));
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
    message.email = object.email ?? "";
    message.ip = object.ip ?? "";
    message.os = object.os ?? "";
    message.status = object.status ?? false;
    message.lastSeen = object.lastSeen ?? "";
    message.createdBy = object.createdBy ?? "";
    message.version = object.version ?? "";
    message.nodeKey = object.nodeKey ?? "";
    message.createdAt = object.createdAt ?? "";
    message.keyExpiry = object.keyExpiry ?? "";
    message.fleets = object.fleets?.map((e) => FleetResponse.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => ResourceResponse.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => GroupResponse.fromPartial(e)) || [];
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
