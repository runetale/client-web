/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { DeploymentMethod, deploymentMethodFromJSON, deploymentMethodToJSON, Fleet } from "./common";

export const protobufPackage = "protos";

export interface CreateFleetRequest {
  name: string;
  desc: string;
  resourceIds: number[];
  proto: string;
  port: string;
  type: DeploymentMethod;
}

export interface PatchFleetRequest {
  /** fleet id */
  id: number;
  name: string;
  desc: string;
  resourceIds: number[];
  proto: string;
  port: string;
}

export interface GetFleetRequest {
  id: number;
}

export interface Fleets {
  fleets: Fleet[];
}

export interface AddNewSrcsForFleetRequest {
  /** fleet id */
  id: number;
  userIds: number[];
  groupIds: number[];
}

function createBaseCreateFleetRequest(): CreateFleetRequest {
  return { name: "", desc: "", resourceIds: [], proto: "", port: "", type: 0 };
}

export const CreateFleetRequest = {
  encode(message: CreateFleetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(18).string(message.desc);
    }
    writer.uint32(26).fork();
    for (const v of message.resourceIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(42).string(message.port);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateFleetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFleetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.desc = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.resourceIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resourceIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.port = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateFleetRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      desc: isSet(object.desc) ? globalThis.String(object.desc) : "",
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.Number(e))
        : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
      type: isSet(object.type) ? deploymentMethodFromJSON(object.type) : 0,
    };
  },

  toJSON(message: CreateFleetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.desc !== "") {
      obj.desc = message.desc;
    }
    if (message.resourceIds?.length) {
      obj.resourceIds = message.resourceIds.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.type !== 0) {
      obj.type = deploymentMethodToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateFleetRequest>, I>>(base?: I): CreateFleetRequest {
    return CreateFleetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateFleetRequest>, I>>(object: I): CreateFleetRequest {
    const message = createBaseCreateFleetRequest();
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBasePatchFleetRequest(): PatchFleetRequest {
  return { id: 0, name: "", desc: "", resourceIds: [], proto: "", port: "" };
}

export const PatchFleetRequest = {
  encode(message: PatchFleetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    writer.uint32(34).fork();
    for (const v of message.resourceIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(50).string(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchFleetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchFleetRequest();
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

          message.desc = reader.string();
          continue;
        case 4:
          if (tag === 32) {
            message.resourceIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resourceIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.port = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchFleetRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      desc: isSet(object.desc) ? globalThis.String(object.desc) : "",
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.Number(e))
        : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: PatchFleetRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.desc !== "") {
      obj.desc = message.desc;
    }
    if (message.resourceIds?.length) {
      obj.resourceIds = message.resourceIds.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchFleetRequest>, I>>(base?: I): PatchFleetRequest {
    return PatchFleetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchFleetRequest>, I>>(object: I): PatchFleetRequest {
    const message = createBasePatchFleetRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBaseGetFleetRequest(): GetFleetRequest {
  return { id: 0 };
}

export const GetFleetRequest = {
  encode(message: GetFleetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFleetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFleetRequest();
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

  fromJSON(object: any): GetFleetRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetFleetRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFleetRequest>, I>>(base?: I): GetFleetRequest {
    return GetFleetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFleetRequest>, I>>(object: I): GetFleetRequest {
    const message = createBaseGetFleetRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseFleets(): Fleets {
  return { fleets: [] };
}

export const Fleets = {
  encode(message: Fleets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fleets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFleets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fleets.push(Fleet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fleets {
    return { fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => Fleet.fromJSON(e)) : [] };
  },

  toJSON(message: Fleets): unknown {
    const obj: any = {};
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => Fleet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Fleets>, I>>(base?: I): Fleets {
    return Fleets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Fleets>, I>>(object: I): Fleets {
    const message = createBaseFleets();
    message.fleets = object.fleets?.map((e) => Fleet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddNewSrcsForFleetRequest(): AddNewSrcsForFleetRequest {
  return { id: 0, userIds: [], groupIds: [] };
}

export const AddNewSrcsForFleetRequest = {
  encode(message: AddNewSrcsForFleetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.userIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.groupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNewSrcsForFleetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNewSrcsForFleetRequest();
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
          if (tag === 16) {
            message.userIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.userIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag === 24) {
            message.groupIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddNewSrcsForFleetRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.Number(e)) : [],
      groupIds: globalThis.Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddNewSrcsForFleetRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userIds?.length) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNewSrcsForFleetRequest>, I>>(base?: I): AddNewSrcsForFleetRequest {
    return AddNewSrcsForFleetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNewSrcsForFleetRequest>, I>>(object: I): AddNewSrcsForFleetRequest {
    const message = createBaseAddNewSrcsForFleetRequest();
    message.id = object.id ?? 0;
    message.userIds = object.userIds?.map((e) => e) || [];
    message.groupIds = object.groupIds?.map((e) => e) || [];
    return message;
  },
};

export interface FleetService {
  CreateFleet(request: DeepPartial<CreateFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet>;
  PatchFleet(request: DeepPartial<PatchFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet>;
  GetFleet(request: DeepPartial<GetFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet>;
  GetFleets(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Fleets>;
}

export class FleetServiceClientImpl implements FleetService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateFleet = this.CreateFleet.bind(this);
    this.PatchFleet = this.PatchFleet.bind(this);
    this.GetFleet = this.GetFleet.bind(this);
    this.GetFleets = this.GetFleets.bind(this);
  }

  CreateFleet(request: DeepPartial<CreateFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet> {
    return this.rpc.unary(FleetServiceCreateFleetDesc, CreateFleetRequest.fromPartial(request), metadata);
  }

  PatchFleet(request: DeepPartial<PatchFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet> {
    return this.rpc.unary(FleetServicePatchFleetDesc, PatchFleetRequest.fromPartial(request), metadata);
  }

  GetFleet(request: DeepPartial<GetFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet> {
    return this.rpc.unary(FleetServiceGetFleetDesc, GetFleetRequest.fromPartial(request), metadata);
  }

  GetFleets(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Fleets> {
    return this.rpc.unary(FleetServiceGetFleetsDesc, Empty.fromPartial(request), metadata);
  }
}

export const FleetServiceDesc = { serviceName: "protos.FleetService" };

export const FleetServiceCreateFleetDesc: UnaryMethodDefinitionish = {
  methodName: "CreateFleet",
  service: FleetServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateFleetRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Fleet.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FleetServicePatchFleetDesc: UnaryMethodDefinitionish = {
  methodName: "PatchFleet",
  service: FleetServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchFleetRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Fleet.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FleetServiceGetFleetDesc: UnaryMethodDefinitionish = {
  methodName: "GetFleet",
  service: FleetServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetFleetRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Fleet.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const FleetServiceGetFleetsDesc: UnaryMethodDefinitionish = {
  methodName: "GetFleets",
  service: FleetServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Fleets.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface FleetDetailService {
  AddNewSrcsForFleet(request: DeepPartial<AddNewSrcsForFleetRequest>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class FleetDetailServiceClientImpl implements FleetDetailService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddNewSrcsForFleet = this.AddNewSrcsForFleet.bind(this);
  }

  AddNewSrcsForFleet(request: DeepPartial<AddNewSrcsForFleetRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(
      FleetDetailServiceAddNewSrcsForFleetDesc,
      AddNewSrcsForFleetRequest.fromPartial(request),
      metadata,
    );
  }
}

export const FleetDetailServiceDesc = { serviceName: "protos.FleetDetailService" };

export const FleetDetailServiceAddNewSrcsForFleetDesc: UnaryMethodDefinitionish = {
  methodName: "AddNewSrcsForFleet",
  service: FleetDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddNewSrcsForFleetRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Empty.decode(data);
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
