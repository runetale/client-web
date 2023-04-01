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

export interface Group {
  name: string;
  machines: Machine[];
}

export interface CreateGroupResponse {
  groups: Group | undefined;
}

export interface DeleteGroupResponse {
  group: Group | undefined;
}

export interface GetGroupResponse {
  groups: Group[];
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
    if (message.isConnect === true) {
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
          if (tag != 10) {
            break;
          }

          message.domain = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.cidr = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.host = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.os = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isConnect = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<Machine>, I>>(base?: I): Machine {
    return Machine.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.machines.push(Machine.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMachinesResponse {
    return { machines: Array.isArray(object?.machines) ? object.machines.map((e: any) => Machine.fromJSON(e)) : [] };
  },

  toJSON(message: GetMachinesResponse): unknown {
    const obj: any = {};
    if (message.machines) {
      obj.machines = message.machines.map((e) => e ? Machine.toJSON(e) : undefined);
    } else {
      obj.machines = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMachinesResponse>, I>>(base?: I): GetMachinesResponse {
    return GetMachinesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMachinesResponse>, I>>(object: I): GetMachinesResponse {
    const message = createBaseGetMachinesResponse();
    message.machines = object.machines?.map((e) => Machine.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetMeResponse(): GetMeResponse {
  return { username: "", email: "" };
}

export const GetMeResponse = {
  encode(message: GetMeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
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
          if (tag != 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<GetMeResponse>, I>>(base?: I): GetMeResponse {
    return GetMeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMeResponse>, I>>(object: I): GetMeResponse {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.joined = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.lastSeen = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.picture = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsersResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUsersResponse>, I>>(base?: I): GetUsersResponse {
    return GetUsersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUsersResponse>, I>>(object: I): GetUsersResponse {
    const message = createBaseGetUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroup(): Group {
  return { name: "", machines: [] };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.machines) {
      Machine.encode(v!, writer.uint32(18).fork()).ldelim();
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
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.machines.push(Machine.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Group {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      machines: Array.isArray(object?.machines) ? object.machines.map((e: any) => Machine.fromJSON(e)) : [],
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.machines) {
      obj.machines = message.machines.map((e) => e ? Machine.toJSON(e) : undefined);
    } else {
      obj.machines = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.name = object.name ?? "";
    message.machines = object.machines?.map((e) => Machine.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateGroupResponse(): CreateGroupResponse {
  return { groups: undefined };
}

export const CreateGroupResponse = {
  encode(message: CreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groups !== undefined) {
      Group.encode(message.groups, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groups = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupResponse {
    return { groups: isSet(object.groups) ? Group.fromJSON(object.groups) : undefined };
  },

  toJSON(message: CreateGroupResponse): unknown {
    const obj: any = {};
    message.groups !== undefined && (obj.groups = message.groups ? Group.toJSON(message.groups) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupResponse>, I>>(base?: I): CreateGroupResponse {
    return CreateGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateGroupResponse>, I>>(object: I): CreateGroupResponse {
    const message = createBaseCreateGroupResponse();
    message.groups = (object.groups !== undefined && object.groups !== null)
      ? Group.fromPartial(object.groups)
      : undefined;
    return message;
  },
};

function createBaseDeleteGroupResponse(): DeleteGroupResponse {
  return { group: undefined };
}

export const DeleteGroupResponse = {
  encode(message: DeleteGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupResponse {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: DeleteGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupResponse>, I>>(base?: I): DeleteGroupResponse {
    return DeleteGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGroupResponse>, I>>(object: I): DeleteGroupResponse {
    const message = createBaseDeleteGroupResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseGetGroupResponse(): GetGroupResponse {
  return { groups: [] };
}

export const GetGroupResponse = {
  encode(message: GetGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupResponse {
    return { groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [] };
  },

  toJSON(message: GetGroupResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupResponse>, I>>(base?: I): GetGroupResponse {
    return GetGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupResponse>, I>>(object: I): GetGroupResponse {
    const message = createBaseGetGroupResponse();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

/**
 * memo(shinta): will remove it.
 * make these rpcs a restfull api
 */
export interface AdminService {
  GetMachines(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMachinesResponse>;
  GetMe(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMeResponse>;
  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetUsersResponse>;
  CreateGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<CreateGroupResponse>;
  DeleteGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse>;
  GetGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupResponse>;
}

export class AdminServiceClientImpl implements AdminService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMachines = this.GetMachines.bind(this);
    this.GetMe = this.GetMe.bind(this);
    this.GetUsers = this.GetUsers.bind(this);
    this.CreateGroup = this.CreateGroup.bind(this);
    this.DeleteGroup = this.DeleteGroup.bind(this);
    this.GetGroup = this.GetGroup.bind(this);
  }

  GetMachines(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMachinesResponse> {
    return this.rpc.unary(AdminServiceGetMachinesDesc, Empty.fromPartial(request), metadata);
  }

  GetMe(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetMeResponse> {
    return this.rpc.unary(AdminServiceGetMeDesc, Empty.fromPartial(request), metadata);
  }

  GetUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetUsersResponse> {
    return this.rpc.unary(AdminServiceGetUsersDesc, Empty.fromPartial(request), metadata);
  }

  CreateGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<CreateGroupResponse> {
    return this.rpc.unary(AdminServiceCreateGroupDesc, Empty.fromPartial(request), metadata);
  }

  DeleteGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse> {
    return this.rpc.unary(AdminServiceDeleteGroupDesc, Empty.fromPartial(request), metadata);
  }

  GetGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupResponse> {
    return this.rpc.unary(AdminServiceGetGroupDesc, Empty.fromPartial(request), metadata);
  }
}

export const AdminServiceDesc = { serviceName: "protos.AdminService" };

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

export const AdminServiceCreateGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroup",
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
      const value = CreateGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminServiceDeleteGroupDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteGroup",
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
      const value = DeleteGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminServiceGetGroupDesc: UnaryMethodDefinitionish = {
  methodName: "GetGroup",
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
      const value = GetGroupResponse.decode(data);
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
