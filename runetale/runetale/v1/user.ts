/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { User } from "./common";

export const protobufPackage = "protos";

export interface GetMeResponse {
  username: string;
  email: string;
  picture: string;
  isOwner: boolean;
}

export interface GetUserRequest {
  id: number;
}

export interface Users {
  users: User[];
}

export interface AddNewDstsForUserRequest {
  /** user id */
  id: number;
  resourceIds: number[];
  fleetIds: number[];
}

export interface AddGroupsRequest {
  /** group id */
  id: number;
  userIds: number[];
}

function createBaseGetMeResponse(): GetMeResponse {
  return { username: "", email: "", picture: "", isOwner: false };
}

export const GetMeResponse = {
  encode(message: GetMeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.picture !== "") {
      writer.uint32(26).string(message.picture);
    }
    if (message.isOwner !== false) {
      writer.uint32(32).bool(message.isOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.picture = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isOwner = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMeResponse {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      picture: isSet(object.picture) ? globalThis.String(object.picture) : "",
      isOwner: isSet(object.isOwner) ? globalThis.Boolean(object.isOwner) : false,
    };
  },

  toJSON(message: GetMeResponse): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.picture !== "") {
      obj.picture = message.picture;
    }
    if (message.isOwner !== false) {
      obj.isOwner = message.isOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMeResponse>, I>>(base?: I): GetMeResponse {
    return GetMeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMeResponse>, I>>(object: I): GetMeResponse {
    const message = createBaseGetMeResponse();
    message.username = object.username ?? "";
    message.email = object.email ?? "";
    message.picture = object.picture ?? "";
    message.isOwner = object.isOwner ?? false;
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { id: 0 };
}

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
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

  fromJSON(object: any): GetUserRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserRequest>, I>>(base?: I): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(object: I): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseUsers(): Users {
  return { users: [] };
}

export const Users = {
  encode(message: Users, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Users {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Users {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: Users): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Users>, I>>(base?: I): Users {
    return Users.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Users>, I>>(object: I): Users {
    const message = createBaseUsers();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddNewDstsForUserRequest(): AddNewDstsForUserRequest {
  return { id: 0, resourceIds: [], fleetIds: [] };
}

export const AddNewDstsForUserRequest = {
  encode(message: AddNewDstsForUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNewDstsForUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNewDstsForUserRequest();
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

  fromJSON(object: any): AddNewDstsForUserRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.Number(e))
        : [],
      fleetIds: globalThis.Array.isArray(object?.fleetIds) ? object.fleetIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddNewDstsForUserRequest): unknown {
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

  create<I extends Exact<DeepPartial<AddNewDstsForUserRequest>, I>>(base?: I): AddNewDstsForUserRequest {
    return AddNewDstsForUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNewDstsForUserRequest>, I>>(object: I): AddNewDstsForUserRequest {
    const message = createBaseAddNewDstsForUserRequest();
    message.id = object.id ?? 0;
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.fleetIds = object.fleetIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseAddGroupsRequest(): AddGroupsRequest {
  return { id: 0, userIds: [] };
}

export const AddGroupsRequest = {
  encode(message: AddGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(26).fork();
    for (const v of message.userIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): AddGroupsRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddGroupsRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userIds?.length) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddGroupsRequest>, I>>(base?: I): AddGroupsRequest {
    return AddGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddGroupsRequest>, I>>(object: I): AddGroupsRequest {
    const message = createBaseAddGroupsRequest();
    message.id = object.id ?? 0;
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

export interface UserService {
  GetMe(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMeResponse>;
  GetUser(request: DeepPartial<GetUserRequest>, metadata?: grpc.Metadata): Promise<User>;
  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Users>;
}

export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMe = this.GetMe.bind(this);
    this.GetUser = this.GetUser.bind(this);
    this.GetUsers = this.GetUsers.bind(this);
  }

  GetMe(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMeResponse> {
    return this.rpc.unary(UserServiceGetMeDesc, Empty.fromPartial(request), metadata);
  }

  GetUser(request: DeepPartial<GetUserRequest>, metadata?: grpc.Metadata): Promise<User> {
    return this.rpc.unary(UserServiceGetUserDesc, GetUserRequest.fromPartial(request), metadata);
  }

  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Users> {
    return this.rpc.unary(UserServiceGetUsersDesc, Empty.fromPartial(request), metadata);
  }
}

export const UserServiceDesc = { serviceName: "protos.UserService" };

export const UserServiceGetMeDesc: UnaryMethodDefinitionish = {
  methodName: "GetMe",
  service: UserServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetMeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const UserServiceGetUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetUser",
  service: UserServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = User.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const UserServiceGetUsersDesc: UnaryMethodDefinitionish = {
  methodName: "GetUsers",
  service: UserServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Users.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface UserDetailService {
  AddNewDstsForUser(request: DeepPartial<AddNewDstsForUserRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  AddGroups(request: DeepPartial<AddGroupsRequest>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class UserDetailServiceClientImpl implements UserDetailService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddNewDstsForUser = this.AddNewDstsForUser.bind(this);
    this.AddGroups = this.AddGroups.bind(this);
  }

  AddNewDstsForUser(request: DeepPartial<AddNewDstsForUserRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(
      UserDetailServiceAddNewDstsForUserDesc,
      AddNewDstsForUserRequest.fromPartial(request),
      metadata,
    );
  }

  AddGroups(request: DeepPartial<AddGroupsRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(UserDetailServiceAddGroupsDesc, AddGroupsRequest.fromPartial(request), metadata);
  }
}

export const UserDetailServiceDesc = { serviceName: "protos.UserDetailService" };

export const UserDetailServiceAddNewDstsForUserDesc: UnaryMethodDefinitionish = {
  methodName: "AddNewDstsForUser",
  service: UserDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddNewDstsForUserRequest.encode(this).finish();
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

export const UserDetailServiceAddGroupsDesc: UnaryMethodDefinitionish = {
  methodName: "AddGroups",
  service: UserDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddGroupsRequest.encode(this).finish();
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
