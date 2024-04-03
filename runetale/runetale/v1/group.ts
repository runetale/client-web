/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { Group } from "./common";

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

export interface Groups {
  groups: Group[];
}

export interface UserWithPicture {
  /** user id */
  id: string;
  /** user name */
  name: string;
  /** picture url */
  picture: string;
}

export interface AddNewDstForGroupRequest {
  /** group id */
  id: number;
  resourceIds: number[];
  fleetIds: number[];
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

function createBaseGroups(): Groups {
  return { groups: [] };
}

export const Groups = {
  encode(message: Groups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Groups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Groups {
    return { groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [] };
  },

  toJSON(message: Groups): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Groups>, I>>(base?: I): Groups {
    return Groups.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Groups>, I>>(object: I): Groups {
    const message = createBaseGroups();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserWithPicture(): UserWithPicture {
  return { id: "", name: "", picture: "" };
}

export const UserWithPicture = {
  encode(message: UserWithPicture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.picture !== "") {
      writer.uint32(26).string(message.picture);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserWithPicture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserWithPicture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.picture = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserWithPicture {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      picture: isSet(object.picture) ? globalThis.String(object.picture) : "",
    };
  },

  toJSON(message: UserWithPicture): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.picture !== "") {
      obj.picture = message.picture;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserWithPicture>, I>>(base?: I): UserWithPicture {
    return UserWithPicture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserWithPicture>, I>>(object: I): UserWithPicture {
    const message = createBaseUserWithPicture();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.picture = object.picture ?? "";
    return message;
  },
};

function createBaseAddNewDstForGroupRequest(): AddNewDstForGroupRequest {
  return { id: 0, resourceIds: [], fleetIds: [] };
}

export const AddNewDstForGroupRequest = {
  encode(message: AddNewDstForGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.resourceIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.fleetIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNewDstForGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNewDstForGroupRequest();
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
            message.resourceIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resourceIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag === 24) {
            message.fleetIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fleetIds.push(longToNumber(reader.uint64() as Long));
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

  fromJSON(object: any): AddNewDstForGroupRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.Number(e))
        : [],
      fleetIds: globalThis.Array.isArray(object?.fleetIds) ? object.fleetIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddNewDstForGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.resourceIds?.length) {
      obj.resourceIds = message.resourceIds.map((e) => Math.round(e));
    }
    if (message.fleetIds?.length) {
      obj.fleetIds = message.fleetIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNewDstForGroupRequest>, I>>(base?: I): AddNewDstForGroupRequest {
    return AddNewDstForGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNewDstForGroupRequest>, I>>(object: I): AddNewDstForGroupRequest {
    const message = createBaseAddNewDstForGroupRequest();
    message.id = object.id ?? 0;
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.fleetIds = object.fleetIds?.map((e) => e) || [];
    return message;
  },
};

export interface GroupService {
  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<Group>;
  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<Group>;
  GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<Group>;
  GetGroups(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Groups>;
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

  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<Group> {
    return this.rpc.unary(GroupServiceCreateGroupDesc, CreateGroupRequest.fromPartial(request), metadata);
  }

  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<Group> {
    return this.rpc.unary(GroupServicePatchGroupDesc, PatchGroupRequest.fromPartial(request), metadata);
  }

  GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<Group> {
    return this.rpc.unary(GroupServiceGetGroupDesc, GetGroupRequest.fromPartial(request), metadata);
  }

  GetGroups(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Groups> {
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
      const value = Group.decode(data);
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
      const value = Group.decode(data);
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
      const value = Group.decode(data);
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
      const value = Groups.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface GroupDetailService {
  AddNewDstForGroup(request: DeepPartial<AddNewDstForGroupRequest>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class GroupDetailServiceClientImpl implements GroupDetailService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddNewDstForGroup = this.AddNewDstForGroup.bind(this);
  }

  AddNewDstForGroup(request: DeepPartial<AddNewDstForGroupRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(
      GroupDetailServiceAddNewDstForGroupDesc,
      AddNewDstForGroupRequest.fromPartial(request),
      metadata,
    );
  }
}

export const GroupDetailServiceDesc = { serviceName: "protos.GroupDetailService" };

export const GroupDetailServiceAddNewDstForGroupDesc: UnaryMethodDefinitionish = {
  methodName: "AddNewDstForGroup",
  service: GroupDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddNewDstForGroupRequest.encode(this).finish();
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
