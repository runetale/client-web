/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { Device } from "./common";

export const protobufPackage = "protos";

export interface GetDevicesRequest {
  id: number;
}

export interface Devices {
  devices: Device[];
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

function createBaseDevices(): Devices {
  return { devices: [] };
}

export const Devices = {
  encode(message: Devices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Devices {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.devices.push(Device.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Devices {
    return {
      devices: globalThis.Array.isArray(object?.devices) ? object.devices.map((e: any) => Device.fromJSON(e)) : [],
    };
  },

  toJSON(message: Devices): unknown {
    const obj: any = {};
    if (message.devices?.length) {
      obj.devices = message.devices.map((e) => Device.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Devices>, I>>(base?: I): Devices {
    return Devices.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Devices>, I>>(object: I): Devices {
    const message = createBaseDevices();
    message.devices = object.devices?.map((e) => Device.fromPartial(e)) || [];
    return message;
  },
};

export interface DeviceService {
  GetDevice(request: DeepPartial<GetDevicesRequest>, metadata?: grpc.Metadata): Promise<Device>;
  GetDevices(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Devices>;
}

export class DeviceServiceClientImpl implements DeviceService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetDevice = this.GetDevice.bind(this);
    this.GetDevices = this.GetDevices.bind(this);
  }

  GetDevice(request: DeepPartial<GetDevicesRequest>, metadata?: grpc.Metadata): Promise<Device> {
    return this.rpc.unary(DeviceServiceGetDeviceDesc, GetDevicesRequest.fromPartial(request), metadata);
  }

  GetDevices(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Devices> {
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
      const value = Device.decode(data);
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
      const value = Devices.decode(data);
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
