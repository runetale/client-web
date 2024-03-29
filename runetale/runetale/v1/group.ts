/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface CreateGroupRequest {
  name: string;
  userIds: number[];
}

export interface PatchGroupRequest {
  id: number;
  name: string;
  userIds: number[];
}

export interface GetGroupRequest {
  id: number;
}

export interface GetGroupsResponse {
  groups: GroupResponse[];
}

export interface GroupResponse {
  id: number;
  name: string;
  users: string[];
  resources: number;
  linkers: number;
  age: string;
}

function createBaseCreateGroupRequest(): CreateGroupRequest {
  return { name: "", userIds: [] };
}

export const CreateGroupRequest = {
  encode(message: CreateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(18).fork();
    for (const v of message.userIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: CreateGroupRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.userIds?.length) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(base?: I): CreateGroupRequest {
    return CreateGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(object: I): CreateGroupRequest {
    const message = createBaseCreateGroupRequest();
    message.name = object.name ?? "";
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBasePatchGroupRequest(): PatchGroupRequest {
  return { id: 0, name: "", userIds: [] };
}

export const PatchGroupRequest = {
  encode(message: PatchGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.userIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchGroupRequest();
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
          if (tag === 24) {
            message.userIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.userIds.push(longToNumber(reader.uint64() as Long));
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

  fromJSON(object: any): PatchGroupRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: PatchGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.userIds?.length) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchGroupRequest>, I>>(base?: I): PatchGroupRequest {
    return PatchGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchGroupRequest>, I>>(object: I): PatchGroupRequest {
    const message = createBasePatchGroupRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetGroupRequest(): GetGroupRequest {
  return { id: 0 };
}

export const GetGroupRequest = {
  encode(message: GetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupRequest();
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

  fromJSON(object: any): GetGroupRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupRequest>, I>>(base?: I): GetGroupRequest {
    return GetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupRequest>, I>>(object: I): GetGroupRequest {
    const message = createBaseGetGroupRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetGroupsResponse(): GetGroupsResponse {
  return { groups: [] };
}

export const GetGroupsResponse = {
  encode(message: GetGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      GroupResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): GetGroupsResponse {
    return {
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetGroupsResponse): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => GroupResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupsResponse>, I>>(base?: I): GetGroupsResponse {
    return GetGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupsResponse>, I>>(object: I): GetGroupsResponse {
    const message = createBaseGetGroupsResponse();
    message.groups = object.groups?.map((e) => GroupResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroupResponse(): GroupResponse {
  return { id: 0, name: "", users: [], resources: 0, linkers: 0, age: "" };
}

export const GroupResponse = {
  encode(message: GroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.users) {
      writer.uint32(26).string(v!);
    }
    if (message.resources !== 0) {
      writer.uint32(32).uint64(message.resources);
    }
    if (message.linkers !== 0) {
      writer.uint32(40).uint64(message.linkers);
    }
    if (message.age !== "") {
      writer.uint32(50).string(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupResponse();
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

          message.users.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.resources = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.linkers = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): GroupResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => globalThis.String(e)) : [],
      resources: isSet(object.resources) ? globalThis.Number(object.resources) : 0,
      linkers: isSet(object.linkers) ? globalThis.Number(object.linkers) : 0,
      age: isSet(object.age) ? globalThis.String(object.age) : "",
    };
  },

  toJSON(message: GroupResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.users?.length) {
      obj.users = message.users;
    }
    if (message.resources !== 0) {
      obj.resources = Math.round(message.resources);
    }
    if (message.linkers !== 0) {
      obj.linkers = Math.round(message.linkers);
    }
    if (message.age !== "") {
      obj.age = message.age;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupResponse>, I>>(base?: I): GroupResponse {
    return GroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupResponse>, I>>(object: I): GroupResponse {
    const message = createBaseGroupResponse();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.users = object.users?.map((e) => e) || [];
    message.resources = object.resources ?? 0;
    message.linkers = object.linkers ?? 0;
    message.age = object.age ?? "";
    return message;
  },
};

export interface GroupService {
  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse>;
  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse>;
  GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse>;
  GetGroups(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupsResponse>;
}

export class GroupServiceClientImpl implements GroupService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGroup = this.CreateGroup.bind(this);
    this.PatchGroup = this.PatchGroup.bind(this);
    this.GetGroup = this.GetGroup.bind(this);
    this.GetGroups = this.GetGroups.bind(this);
  }

  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse> {
    return this.rpc.unary(GroupServiceCreateGroupDesc, CreateGroupRequest.fromPartial(request), metadata);
  }

  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse> {
    return this.rpc.unary(GroupServicePatchGroupDesc, PatchGroupRequest.fromPartial(request), metadata);
  }

  GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse> {
    return this.rpc.unary(GroupServiceGetGroupDesc, GetGroupRequest.fromPartial(request), metadata);
  }

  GetGroups(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupsResponse> {
    return this.rpc.unary(GroupServiceGetGroupsDesc, Empty.fromPartial(request), metadata);
  }
}

export const GroupServiceDesc = { serviceName: "protos.GroupService" };

export const GroupServiceCreateGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroup",
  service: GroupServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const GroupServicePatchGroupDesc: UnaryMethodDefinitionish = {
  methodName: "PatchGroup",
  service: GroupServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const GroupServiceGetGroupDesc: UnaryMethodDefinitionish = {
  methodName: "GetGroup",
  service: GroupServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const GroupServiceGetGroupsDesc: UnaryMethodDefinitionish = {
  methodName: "GetGroups",
  service: GroupServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetGroupsResponse.decode(data);
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
