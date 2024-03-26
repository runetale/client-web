/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface Machine {
  domain: string;
  ip: string;
  cidr: string;
  host: string;
  os: string;
  isConnect: boolean;
}

export interface GetMachinesResponse {
  machines: Machine[];
}

export interface GetMeResponse {
  username: string;
  email: string;
  picture: string;
}

export interface User {
  userId: string;
  username: string;
  email: string;
  joined: string;
  lastSeen: string;
  picture: string;
}

export interface GetUsersResponse {
  users: User[];
}

export interface GetGroupsResponse {
  users: User[];
}

export interface Group {
  name: string;
  users: User[];
}

function createBaseMachine(): Machine {
  return { domain: "", ip: "", cidr: "", host: "", os: "", isConnect: false };
}

export const Machine = {
  encode(message: Machine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(26).string(message.cidr);
    }
    if (message.host !== "") {
      writer.uint32(34).string(message.host);
    }
    if (message.os !== "") {
      writer.uint32(42).string(message.os);
    }
    if (message.isConnect !== false) {
      writer.uint32(48).bool(message.isConnect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Machine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMachine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domain = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cidr = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.host = reader.string();
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

          message.isConnect = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Machine {
    return {
      domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      cidr: isSet(object.cidr) ? globalThis.String(object.cidr) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      isConnect: isSet(object.isConnect) ? globalThis.Boolean(object.isConnect) : false,
    };
  },

  toJSON(message: Machine): unknown {
    const obj: any = {};
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.cidr !== "") {
      obj.cidr = message.cidr;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.isConnect !== false) {
      obj.isConnect = message.isConnect;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Machine>, I>>(base?: I): Machine {
    return Machine.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Machine>, I>>(object: I): Machine {
    const message = createBaseMachine();
    message.domain = object.domain ?? "";
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.host = object.host ?? "";
    message.os = object.os ?? "";
    message.isConnect = object.isConnect ?? false;
    return message;
  },
};

function createBaseGetMachinesResponse(): GetMachinesResponse {
  return { machines: [] };
}

export const GetMachinesResponse = {
  encode(message: GetMachinesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.machines) {
      Machine.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMachinesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMachinesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.machines.push(Machine.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMachinesResponse {
    return {
      machines: globalThis.Array.isArray(object?.machines) ? object.machines.map((e: any) => Machine.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetMachinesResponse): unknown {
    const obj: any = {};
    if (message.machines?.length) {
      obj.machines = message.machines.map((e) => Machine.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMachinesResponse>, I>>(base?: I): GetMachinesResponse {
    return GetMachinesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMachinesResponse>, I>>(object: I): GetMachinesResponse {
    const message = createBaseGetMachinesResponse();
    message.machines = object.machines?.map((e) => Machine.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetMeResponse(): GetMeResponse {
  return { username: "", email: "", picture: "" };
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
    return message;
  },
};

function createBaseUser(): User {
  return { userId: "", username: "", email: "", joined: "", lastSeen: "", picture: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.joined !== "") {
      writer.uint32(34).string(message.joined);
    }
    if (message.lastSeen !== "") {
      writer.uint32(42).string(message.lastSeen);
    }
    if (message.picture !== "") {
      writer.uint32(50).string(message.picture);
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
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
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

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.joined = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastSeen = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): User {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      joined: isSet(object.joined) ? globalThis.String(object.joined) : "",
      lastSeen: isSet(object.lastSeen) ? globalThis.String(object.lastSeen) : "",
      picture: isSet(object.picture) ? globalThis.String(object.picture) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.joined !== "") {
      obj.joined = message.joined;
    }
    if (message.lastSeen !== "") {
      obj.lastSeen = message.lastSeen;
    }
    if (message.picture !== "") {
      obj.picture = message.picture;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.userId = object.userId ?? "";
    message.username = object.username ?? "";
    message.email = object.email ?? "";
    message.joined = object.joined ?? "";
    message.lastSeen = object.lastSeen ?? "";
    message.picture = object.picture ?? "";
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

function createBaseGetGroupsResponse(): GetGroupsResponse {
  return { users: [] };
}

export const GetGroupsResponse = {
  encode(message: GetGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): GetGroupsResponse {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: GetGroupsResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupsResponse>, I>>(base?: I): GetGroupsResponse {
    return GetGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupsResponse>, I>>(object: I): GetGroupsResponse {
    const message = createBaseGetGroupsResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroup(): Group {
  return { name: "", users: [] };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
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

  fromJSON(object: any): Group {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.name = object.name ?? "";
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

export interface UserService {
  GetMachines(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMachinesResponse>;
  GetMe(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMeResponse>;
  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetUsersResponse>;
  GetGroups(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupsResponse>;
}

export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMachines = this.GetMachines.bind(this);
    this.GetMe = this.GetMe.bind(this);
    this.GetUsers = this.GetUsers.bind(this);
    this.GetGroups = this.GetGroups.bind(this);
  }

  GetMachines(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMachinesResponse> {
    return this.rpc.unary(UserServiceGetMachinesDesc, Empty.fromPartial(request), metadata);
  }

  GetMe(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMeResponse> {
    return this.rpc.unary(UserServiceGetMeDesc, Empty.fromPartial(request), metadata);
  }

  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetUsersResponse> {
    return this.rpc.unary(UserServiceGetUsersDesc, Empty.fromPartial(request), metadata);
  }

  GetGroups(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupsResponse> {
    return this.rpc.unary(UserServiceGetGroupsDesc, Empty.fromPartial(request), metadata);
  }
}

export const UserServiceDesc = { serviceName: "protos.UserService" };

export const UserServiceGetMachinesDesc: UnaryMethodDefinitionish = {
  methodName: "GetMachines",
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
      const value = GetMachinesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

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

export const UserServiceGetGroupsDesc: UnaryMethodDefinitionish = {
  methodName: "GetGroups",
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
