/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface CreateFleetRequest {
  name: string;
  desc: string;
  /** resource ids */
  src: number[];
  /** both options are available */
  dstFleetID: number;
  /** both options are available */
  dstResourceIDs: number[];
  proto: string;
  port: string;
}

export interface PatchFleetRequest {
  /** fleet id */
  id: number;
  name: string;
  desc: string;
  /** resource ids */
  src: number[];
  /** resource ids or fleet id or both? */
  dstFleetID: number;
  /** resource ids or fleet id or both? */
  dstResourceIDs: number[];
  proto: string;
  port: string;
}

export interface GetFleetRequest {
  id: number;
}

export interface GetFleetsResponse {
  fleets: FleetResponse[];
}

export interface FleetResponse {
  id: number;
  name: string;
  desc: string;
  /** resource ids */
  src: number[];
  /** resource ids or fleet id or both? */
  dstFleetID: number;
  /** resource ids or fleet id or both? */
  dstResourceIDs: number[];
  proto: string;
  port: string;
  age: string;
}

function createBaseCreateFleetRequest(): CreateFleetRequest {
  return { name: "", desc: "", src: [], dstFleetID: 0, dstResourceIDs: [], proto: "", port: "" };
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
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.dstFleetID !== 0) {
      writer.uint32(32).uint64(message.dstFleetID);
    }
    writer.uint32(42).fork();
    for (const v of message.dstResourceIDs) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(50).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(58).string(message.port);
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
            message.src.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.src.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dstFleetID = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag === 40) {
            message.dstResourceIDs.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dstResourceIDs.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): CreateFleetRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      desc: isSet(object.desc) ? globalThis.String(object.desc) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dstFleetID: isSet(object.dstFleetID) ? globalThis.Number(object.dstFleetID) : 0,
      dstResourceIDs: globalThis.Array.isArray(object?.dstResourceIDs)
        ? object.dstResourceIDs.map((e: any) => globalThis.Number(e))
        : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
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
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dstFleetID !== 0) {
      obj.dstFleetID = Math.round(message.dstFleetID);
    }
    if (message.dstResourceIDs?.length) {
      obj.dstResourceIDs = message.dstResourceIDs.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
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
    message.src = object.src?.map((e) => e) || [];
    message.dstFleetID = object.dstFleetID ?? 0;
    message.dstResourceIDs = object.dstResourceIDs?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBasePatchFleetRequest(): PatchFleetRequest {
  return { id: 0, name: "", desc: "", src: [], dstFleetID: 0, dstResourceIDs: [], proto: "", port: "" };
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
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.dstFleetID !== 0) {
      writer.uint32(40).uint64(message.dstFleetID);
    }
    writer.uint32(50).fork();
    for (const v of message.dstResourceIDs) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(58).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(66).string(message.port);
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
            message.src.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.src.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dstFleetID = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag === 48) {
            message.dstResourceIDs.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dstResourceIDs.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
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
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dstFleetID: isSet(object.dstFleetID) ? globalThis.Number(object.dstFleetID) : 0,
      dstResourceIDs: globalThis.Array.isArray(object?.dstResourceIDs)
        ? object.dstResourceIDs.map((e: any) => globalThis.Number(e))
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
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dstFleetID !== 0) {
      obj.dstFleetID = Math.round(message.dstFleetID);
    }
    if (message.dstResourceIDs?.length) {
      obj.dstResourceIDs = message.dstResourceIDs.map((e) => Math.round(e));
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
    message.src = object.src?.map((e) => e) || [];
    message.dstFleetID = object.dstFleetID ?? 0;
    message.dstResourceIDs = object.dstResourceIDs?.map((e) => e) || [];
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

function createBaseGetFleetsResponse(): GetFleetsResponse {
  return { fleets: [] };
}

export const GetFleetsResponse = {
  encode(message: GetFleetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fleets) {
      FleetResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFleetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFleetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fleets.push(FleetResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFleetsResponse {
    return {
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => FleetResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetFleetsResponse): unknown {
    const obj: any = {};
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => FleetResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFleetsResponse>, I>>(base?: I): GetFleetsResponse {
    return GetFleetsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFleetsResponse>, I>>(object: I): GetFleetsResponse {
    const message = createBaseGetFleetsResponse();
    message.fleets = object.fleets?.map((e) => FleetResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFleetResponse(): FleetResponse {
  return { id: 0, name: "", desc: "", src: [], dstFleetID: 0, dstResourceIDs: [], proto: "", port: "", age: "" };
}

export const FleetResponse = {
  encode(message: FleetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.dstFleetID !== 0) {
      writer.uint32(40).uint64(message.dstFleetID);
    }
    writer.uint32(50).fork();
    for (const v of message.dstResourceIDs) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(58).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(66).string(message.port);
    }
    if (message.age !== "") {
      writer.uint32(74).string(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FleetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFleetResponse();
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
            message.src.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.src.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dstFleetID = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag === 48) {
            message.dstResourceIDs.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dstResourceIDs.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.port = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.age = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FleetResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      desc: isSet(object.desc) ? globalThis.String(object.desc) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dstFleetID: isSet(object.dstFleetID) ? globalThis.Number(object.dstFleetID) : 0,
      dstResourceIDs: globalThis.Array.isArray(object?.dstResourceIDs)
        ? object.dstResourceIDs.map((e: any) => globalThis.Number(e))
        : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
      age: isSet(object.age) ? globalThis.String(object.age) : "",
    };
  },

  toJSON(message: FleetResponse): unknown {
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
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dstFleetID !== 0) {
      obj.dstFleetID = Math.round(message.dstFleetID);
    }
    if (message.dstResourceIDs?.length) {
      obj.dstResourceIDs = message.dstResourceIDs.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.age !== "") {
      obj.age = message.age;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FleetResponse>, I>>(base?: I): FleetResponse {
    return FleetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FleetResponse>, I>>(object: I): FleetResponse {
    const message = createBaseFleetResponse();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dstFleetID = object.dstFleetID ?? 0;
    message.dstResourceIDs = object.dstResourceIDs?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    message.age = object.age ?? "";
    return message;
  },
};

export interface FleetService {
  CreateFleet(request: DeepPartial<CreateFleetRequest>, metadata?: grpc.Metadata): Promise<FleetResponse>;
  PatchFleet(request: DeepPartial<PatchFleetRequest>, metadata?: grpc.Metadata): Promise<FleetResponse>;
  GetFleet(request: DeepPartial<GetFleetRequest>, metadata?: grpc.Metadata): Promise<FleetResponse>;
  GetFleets(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetFleetsResponse>;
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

  CreateFleet(request: DeepPartial<CreateFleetRequest>, metadata?: grpc.Metadata): Promise<FleetResponse> {
    return this.rpc.unary(FleetServiceCreateFleetDesc, CreateFleetRequest.fromPartial(request), metadata);
  }

  PatchFleet(request: DeepPartial<PatchFleetRequest>, metadata?: grpc.Metadata): Promise<FleetResponse> {
    return this.rpc.unary(FleetServicePatchFleetDesc, PatchFleetRequest.fromPartial(request), metadata);
  }

  GetFleet(request: DeepPartial<GetFleetRequest>, metadata?: grpc.Metadata): Promise<FleetResponse> {
    return this.rpc.unary(FleetServiceGetFleetDesc, GetFleetRequest.fromPartial(request), metadata);
  }

  GetFleets(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetFleetsResponse> {
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
      const value = FleetResponse.decode(data);
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
      const value = FleetResponse.decode(data);
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
      const value = FleetResponse.decode(data);
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
      const value = GetFleetsResponse.decode(data);
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
