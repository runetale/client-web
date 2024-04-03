/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { DeviceResponse } from "./device";
import { FleetResponse } from "./fleet";
import { GroupResponse } from "./group";
import { ResourceResponse } from "./resource";

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

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  joined: string;
  lastSeen: string;
  fleets: FleetResponse[];
  resources: ResourceResponse[];
  devices: DeviceResponse[];
  groups: GroupResponse[];
}

export interface GetUsersResponse {
  users: User[];
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

function createBaseUser(): User {
  return {
    id: 0,
    name: "",
    email: "",
    role: "",
    joined: "",
    lastSeen: "",
    fleets: [],
    resources: [],
    devices: [],
    groups: [],
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    if (message.joined !== "") {
      writer.uint32(42).string(message.joined);
    }
    if (message.lastSeen !== "") {
      writer.uint32(50).string(message.lastSeen);
    }
    for (const v of message.fleets) {
      FleetResponse.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.resources) {
      ResourceResponse.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.devices) {
      DeviceResponse.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupResponse.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.role = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.joined = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lastSeen = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fleets.push(FleetResponse.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resources.push(ResourceResponse.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.devices.push(DeviceResponse.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
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

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      role: isSet(object.role) ? globalThis.String(object.role) : "",
      joined: isSet(object.joined) ? globalThis.String(object.joined) : "",
      lastSeen: isSet(object.lastSeen) ? globalThis.String(object.lastSeen) : "",
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => FleetResponse.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => ResourceResponse.fromJSON(e))
        : [],
      devices: globalThis.Array.isArray(object?.devices)
        ? object.devices.map((e: any) => DeviceResponse.fromJSON(e))
        : [],
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: User): unknown {
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
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.joined !== "") {
      obj.joined = message.joined;
    }
    if (message.lastSeen !== "") {
      obj.lastSeen = message.lastSeen;
    }
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => FleetResponse.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => ResourceResponse.toJSON(e));
    }
    if (message.devices?.length) {
      obj.devices = message.devices.map((e) => DeviceResponse.toJSON(e));
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => GroupResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.role = object.role ?? "";
    message.joined = object.joined ?? "";
    message.lastSeen = object.lastSeen ?? "";
    message.fleets = object.fleets?.map((e) => FleetResponse.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => ResourceResponse.fromPartial(e)) || [];
    message.devices = object.devices?.map((e) => DeviceResponse.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => GroupResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUsersResponse(): GetUsersResponse {
  return { users: [] };
}

export const GetUsersResponse = {
  encode(message: GetUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersResponse();
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

  fromJSON(object: any): GetUsersResponse {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUsersResponse>, I>>(base?: I): GetUsersResponse {
    return GetUsersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUsersResponse>, I>>(object: I): GetUsersResponse {
    const message = createBaseGetUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

export interface UserService {
  GetMe(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMeResponse>;
  GetUser(request: DeepPartial<GetUserRequest>, metadata?: grpc.Metadata): Promise<User>;
  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetUsersResponse>;
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

  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetUsersResponse> {
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
      const value = GetUsersResponse.decode(data);
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
