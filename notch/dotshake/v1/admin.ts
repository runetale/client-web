/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { Empty } from "../../../google/protobuf/empty";
import { BrowserHeaders } from "browser-headers";
import * as _m0 from "protobufjs/minimal";

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
}

export interface User {
  username: string;
  email: string;
  joined: string;
  lastSeen: string;
  picture: string;
}

export interface GetUsersResponse {
  users: User[];
}

function createBaseMachine(): Machine {
  return { domain: "", ip: "", cidr: "", host: "", os: "", isConnect: false };
}

export const Machine = {
  encode(
    message: Machine,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (message.isConnect === true) {
      writer.uint32(48).bool(message.isConnect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Machine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMachine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.cidr = reader.string();
          break;
        case 4:
          message.host = reader.string();
          break;
        case 5:
          message.os = reader.string();
          break;
        case 6:
          message.isConnect = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Machine {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      cidr: isSet(object.cidr) ? String(object.cidr) : "",
      host: isSet(object.host) ? String(object.host) : "",
      os: isSet(object.os) ? String(object.os) : "",
      isConnect: isSet(object.isConnect) ? Boolean(object.isConnect) : false,
    };
  },

  toJSON(message: Machine): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.ip !== undefined && (obj.ip = message.ip);
    message.cidr !== undefined && (obj.cidr = message.cidr);
    message.host !== undefined && (obj.host = message.host);
    message.os !== undefined && (obj.os = message.os);
    message.isConnect !== undefined && (obj.isConnect = message.isConnect);
    return obj;
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
  encode(
    message: GetMachinesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.machines) {
      Machine.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMachinesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMachinesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machines.push(Machine.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMachinesResponse {
    return {
      machines: Array.isArray(object?.machines)
        ? object.machines.map((e: any) => Machine.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMachinesResponse): unknown {
    const obj: any = {};
    if (message.machines) {
      obj.machines = message.machines.map((e) =>
        e ? Machine.toJSON(e) : undefined
      );
    } else {
      obj.machines = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMachinesResponse>, I>>(
    object: I
  ): GetMachinesResponse {
    const message = createBaseGetMachinesResponse();
    message.machines =
      object.machines?.map((e) => Machine.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetMeResponse(): GetMeResponse {
  return { username: "", email: "" };
}

export const GetMeResponse = {
  encode(
    message: GetMeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMeResponse {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: GetMeResponse): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMeResponse>, I>>(
    object: I
  ): GetMeResponse {
    const message = createBaseGetMeResponse();
    message.username = object.username ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { username: "", email: "", joined: "", lastSeen: "", picture: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.joined !== "") {
      writer.uint32(26).string(message.joined);
    }
    if (message.lastSeen !== "") {
      writer.uint32(34).string(message.lastSeen);
    }
    if (message.picture !== "") {
      writer.uint32(42).string(message.picture);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.joined = reader.string();
          break;
        case 4:
          message.lastSeen = reader.string();
          break;
        case 5:
          message.picture = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      email: isSet(object.email) ? String(object.email) : "",
      joined: isSet(object.joined) ? String(object.joined) : "",
      lastSeen: isSet(object.lastSeen) ? String(object.lastSeen) : "",
      picture: isSet(object.picture) ? String(object.picture) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.email !== undefined && (obj.email = message.email);
    message.joined !== undefined && (obj.joined = message.joined);
    message.lastSeen !== undefined && (obj.lastSeen = message.lastSeen);
    message.picture !== undefined && (obj.picture = message.picture);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
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
  encode(
    message: GetUsersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersResponse {
    return {
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => User.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersResponse>, I>>(
    object: I
  ): GetUsersResponse {
    const message = createBaseGetUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

export interface AdminService {
  GetMachines(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachinesResponse>;
  GetMe(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMeResponse>;
  GetUsers(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetUsersResponse>;
}

export class AdminServiceClientImpl implements AdminService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMachines = this.GetMachines.bind(this);
    this.GetMe = this.GetMe.bind(this);
    this.GetUsers = this.GetUsers.bind(this);
  }

  GetMachines(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachinesResponse> {
    return this.rpc.unary(
      AdminServiceGetMachinesDesc,
      Empty.fromPartial(request),
      metadata
    );
  }

  GetMe(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMeResponse> {
    return this.rpc.unary(
      AdminServiceGetMeDesc,
      Empty.fromPartial(request),
      metadata
    );
  }

  GetUsers(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetUsersResponse> {
    return this.rpc.unary(
      AdminServiceGetUsersDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const AdminServiceDesc = {
  serviceName: "protos.AdminService",
};

export const AdminServiceGetMachinesDesc: UnaryMethodDefinitionish = {
  methodName: "GetMachines",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetMachinesResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AdminServiceGetMeDesc: UnaryMethodDefinitionish = {
  methodName: "GetMe",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetMeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AdminServiceGetUsersDesc: UnaryMethodDefinitionish = {
  methodName: "GetUsers",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetUsersResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
