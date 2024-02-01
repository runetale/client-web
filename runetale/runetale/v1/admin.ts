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

export interface Group {
  name: string;
  users: User[];
}

export interface Acl {
  name: string;
  src: Route | undefined;
  srcGroups: string[];
  dst: Route | undefined;
  dstGroups: string[];
}

export interface Route {
  userIds: string[];
  groupIds: string[];
}

export interface CreateAclRequest {
  aclName: string;
  src: Route | undefined;
  dst: Route | undefined;
}

export interface DeleteAclRequest {
  aclId: string;
}

export interface PatchAclRequest {
  aclId: string;
  src: Route | undefined;
  dst: Route | undefined;
}

export interface AclResponse {
  acl: Acl | undefined;
}

export interface AclsResponse {
  acls: Acl[];
}

export interface CreateGroupRequest {
  groupName: string;
  users: User[];
}

export interface DeleteGroupRequest {
  groupId: string;
}

export interface PatchGroupRequest {
  groupId: string;
  users: User[];
}

export interface GroupResponse {
  group: Group | undefined;
}

export interface GroupsResponse {
  groups: Group[];
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
    if (message.isConnect === true) {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMeResponse>, I>>(base?: I): GetMeResponse {
    return GetMeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMeResponse>, I>>(object: I): GetMeResponse {
    const message = createBaseGetMeResponse();
    message.username = object.username ?? "";
    message.email = object.email ?? "";
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

function createBaseAcl(): Acl {
  return { name: "", src: undefined, srcGroups: [], dst: undefined, dstGroups: [] };
}

export const Acl = {
  encode(message: Acl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.src !== undefined) {
      Route.encode(message.src, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.srcGroups) {
      writer.uint32(26).string(v!);
    }
    if (message.dst !== undefined) {
      Route.encode(message.dst, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.dstGroups) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Acl {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcl();
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

          message.src = Route.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.srcGroups.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dst = Route.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dstGroups.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Acl {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: isSet(object.src) ? Route.fromJSON(object.src) : undefined,
      srcGroups: globalThis.Array.isArray(object?.srcGroups)
        ? object.srcGroups.map((e: any) => globalThis.String(e))
        : [],
      dst: isSet(object.dst) ? Route.fromJSON(object.dst) : undefined,
      dstGroups: globalThis.Array.isArray(object?.dstGroups)
        ? object.dstGroups.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Acl): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src !== undefined) {
      obj.src = Route.toJSON(message.src);
    }
    if (message.srcGroups?.length) {
      obj.srcGroups = message.srcGroups;
    }
    if (message.dst !== undefined) {
      obj.dst = Route.toJSON(message.dst);
    }
    if (message.dstGroups?.length) {
      obj.dstGroups = message.dstGroups;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Acl>, I>>(base?: I): Acl {
    return Acl.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Acl>, I>>(object: I): Acl {
    const message = createBaseAcl();
    message.name = object.name ?? "";
    message.src = (object.src !== undefined && object.src !== null) ? Route.fromPartial(object.src) : undefined;
    message.srcGroups = object.srcGroups?.map((e) => e) || [];
    message.dst = (object.dst !== undefined && object.dst !== null) ? Route.fromPartial(object.dst) : undefined;
    message.dstGroups = object.dstGroups?.map((e) => e) || [];
    return message;
  },
};

function createBaseRoute(): Route {
  return { userIds: [], groupIds: [] };
}

export const Route = {
  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.groupIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userIds.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groupIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Route {
    return {
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.String(e)) : [],
      groupIds: globalThis.Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Route): unknown {
    const obj: any = {};
    if (message.userIds?.length) {
      obj.userIds = message.userIds;
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Route>, I>>(base?: I): Route {
    return Route.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Route>, I>>(object: I): Route {
    const message = createBaseRoute();
    message.userIds = object.userIds?.map((e) => e) || [];
    message.groupIds = object.groupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateAclRequest(): CreateAclRequest {
  return { aclName: "", src: undefined, dst: undefined };
}

export const CreateAclRequest = {
  encode(message: CreateAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aclName !== "") {
      writer.uint32(10).string(message.aclName);
    }
    if (message.src !== undefined) {
      Route.encode(message.src, writer.uint32(18).fork()).ldelim();
    }
    if (message.dst !== undefined) {
      Route.encode(message.dst, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAclRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAclRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aclName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.src = Route.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dst = Route.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAclRequest {
    return {
      aclName: isSet(object.aclName) ? globalThis.String(object.aclName) : "",
      src: isSet(object.src) ? Route.fromJSON(object.src) : undefined,
      dst: isSet(object.dst) ? Route.fromJSON(object.dst) : undefined,
    };
  },

  toJSON(message: CreateAclRequest): unknown {
    const obj: any = {};
    if (message.aclName !== "") {
      obj.aclName = message.aclName;
    }
    if (message.src !== undefined) {
      obj.src = Route.toJSON(message.src);
    }
    if (message.dst !== undefined) {
      obj.dst = Route.toJSON(message.dst);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAclRequest>, I>>(base?: I): CreateAclRequest {
    return CreateAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAclRequest>, I>>(object: I): CreateAclRequest {
    const message = createBaseCreateAclRequest();
    message.aclName = object.aclName ?? "";
    message.src = (object.src !== undefined && object.src !== null) ? Route.fromPartial(object.src) : undefined;
    message.dst = (object.dst !== undefined && object.dst !== null) ? Route.fromPartial(object.dst) : undefined;
    return message;
  },
};

function createBaseDeleteAclRequest(): DeleteAclRequest {
  return { aclId: "" };
}

export const DeleteAclRequest = {
  encode(message: DeleteAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aclId !== "") {
      writer.uint32(10).string(message.aclId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAclRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAclRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aclId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAclRequest {
    return { aclId: isSet(object.aclId) ? globalThis.String(object.aclId) : "" };
  },

  toJSON(message: DeleteAclRequest): unknown {
    const obj: any = {};
    if (message.aclId !== "") {
      obj.aclId = message.aclId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAclRequest>, I>>(base?: I): DeleteAclRequest {
    return DeleteAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAclRequest>, I>>(object: I): DeleteAclRequest {
    const message = createBaseDeleteAclRequest();
    message.aclId = object.aclId ?? "";
    return message;
  },
};

function createBasePatchAclRequest(): PatchAclRequest {
  return { aclId: "", src: undefined, dst: undefined };
}

export const PatchAclRequest = {
  encode(message: PatchAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aclId !== "") {
      writer.uint32(10).string(message.aclId);
    }
    if (message.src !== undefined) {
      Route.encode(message.src, writer.uint32(18).fork()).ldelim();
    }
    if (message.dst !== undefined) {
      Route.encode(message.dst, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchAclRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchAclRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aclId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.src = Route.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dst = Route.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchAclRequest {
    return {
      aclId: isSet(object.aclId) ? globalThis.String(object.aclId) : "",
      src: isSet(object.src) ? Route.fromJSON(object.src) : undefined,
      dst: isSet(object.dst) ? Route.fromJSON(object.dst) : undefined,
    };
  },

  toJSON(message: PatchAclRequest): unknown {
    const obj: any = {};
    if (message.aclId !== "") {
      obj.aclId = message.aclId;
    }
    if (message.src !== undefined) {
      obj.src = Route.toJSON(message.src);
    }
    if (message.dst !== undefined) {
      obj.dst = Route.toJSON(message.dst);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchAclRequest>, I>>(base?: I): PatchAclRequest {
    return PatchAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchAclRequest>, I>>(object: I): PatchAclRequest {
    const message = createBasePatchAclRequest();
    message.aclId = object.aclId ?? "";
    message.src = (object.src !== undefined && object.src !== null) ? Route.fromPartial(object.src) : undefined;
    message.dst = (object.dst !== undefined && object.dst !== null) ? Route.fromPartial(object.dst) : undefined;
    return message;
  },
};

function createBaseAclResponse(): AclResponse {
  return { acl: undefined };
}

export const AclResponse = {
  encode(message: AclResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acl !== undefined) {
      Acl.encode(message.acl, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AclResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAclResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acl = Acl.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AclResponse {
    return { acl: isSet(object.acl) ? Acl.fromJSON(object.acl) : undefined };
  },

  toJSON(message: AclResponse): unknown {
    const obj: any = {};
    if (message.acl !== undefined) {
      obj.acl = Acl.toJSON(message.acl);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AclResponse>, I>>(base?: I): AclResponse {
    return AclResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AclResponse>, I>>(object: I): AclResponse {
    const message = createBaseAclResponse();
    message.acl = (object.acl !== undefined && object.acl !== null) ? Acl.fromPartial(object.acl) : undefined;
    return message;
  },
};

function createBaseAclsResponse(): AclsResponse {
  return { acls: [] };
}

export const AclsResponse = {
  encode(message: AclsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acls) {
      Acl.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AclsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAclsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acls.push(Acl.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AclsResponse {
    return { acls: globalThis.Array.isArray(object?.acls) ? object.acls.map((e: any) => Acl.fromJSON(e)) : [] };
  },

  toJSON(message: AclsResponse): unknown {
    const obj: any = {};
    if (message.acls?.length) {
      obj.acls = message.acls.map((e) => Acl.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AclsResponse>, I>>(base?: I): AclsResponse {
    return AclsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AclsResponse>, I>>(object: I): AclsResponse {
    const message = createBaseAclsResponse();
    message.acls = object.acls?.map((e) => Acl.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateGroupRequest(): CreateGroupRequest {
  return { groupName: "", users: [] };
}

export const CreateGroupRequest = {
  encode(message: CreateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupName !== "") {
      writer.uint32(10).string(message.groupName);
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
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

          message.groupName = reader.string();
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

  fromJSON(object: any): CreateGroupRequest {
    return {
      groupName: isSet(object.groupName) ? globalThis.String(object.groupName) : "",
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreateGroupRequest): unknown {
    const obj: any = {};
    if (message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(base?: I): CreateGroupRequest {
    return CreateGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(object: I): CreateGroupRequest {
    const message = createBaseCreateGroupRequest();
    message.groupName = object.groupName ?? "";
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteGroupRequest(): DeleteGroupRequest {
  return { groupId: "" };
}

export const DeleteGroupRequest = {
  encode(message: DeleteGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupRequest {
    return { groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "" };
  },

  toJSON(message: DeleteGroupRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(base?: I): DeleteGroupRequest {
    return DeleteGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(object: I): DeleteGroupRequest {
    const message = createBaseDeleteGroupRequest();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

function createBasePatchGroupRequest(): PatchGroupRequest {
  return { groupId: "", users: [] };
}

export const PatchGroupRequest = {
  encode(message: PatchGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
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
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
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

  fromJSON(object: any): PatchGroupRequest {
    return {
      groupId: isSet(object.groupId) ? globalThis.String(object.groupId) : "",
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: PatchGroupRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchGroupRequest>, I>>(base?: I): PatchGroupRequest {
    return PatchGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchGroupRequest>, I>>(object: I): PatchGroupRequest {
    const message = createBasePatchGroupRequest();
    message.groupId = object.groupId ?? "";
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroupResponse(): GroupResponse {
  return { group: undefined };
}

export const GroupResponse = {
  encode(message: GroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
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
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: GroupResponse): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupResponse>, I>>(base?: I): GroupResponse {
    return GroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupResponse>, I>>(object: I): GroupResponse {
    const message = createBaseGroupResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseGroupsResponse(): GroupsResponse {
  return { groups: [], users: [] };
}

export const GroupsResponse = {
  encode(message: GroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GroupsResponse {
    return {
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: GroupsResponse): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsResponse>, I>>(base?: I): GroupsResponse {
    return GroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupsResponse>, I>>(object: I): GroupsResponse {
    const message = createBaseGroupsResponse();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
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
  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  DeleteAcl(request: DeepPartial<DeleteAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  GetAcl(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<AclsResponse>;
  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse>;
  DeleteGroup(request: DeepPartial<DeleteGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse>;
  GetGroupAndUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GroupsResponse>;
  GetGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GroupsResponse>;
  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse>;
}

export class AdminServiceClientImpl implements AdminService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMachines = this.GetMachines.bind(this);
    this.GetMe = this.GetMe.bind(this);
    this.GetUsers = this.GetUsers.bind(this);
    this.CreateAcl = this.CreateAcl.bind(this);
    this.DeleteAcl = this.DeleteAcl.bind(this);
    this.GetAcl = this.GetAcl.bind(this);
    this.PatchAcl = this.PatchAcl.bind(this);
    this.CreateGroup = this.CreateGroup.bind(this);
    this.DeleteGroup = this.DeleteGroup.bind(this);
    this.GetGroupAndUsers = this.GetGroupAndUsers.bind(this);
    this.GetGroup = this.GetGroup.bind(this);
    this.PatchGroup = this.PatchGroup.bind(this);
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

  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AdminServiceCreateAclDesc, CreateAclRequest.fromPartial(request), metadata);
  }

  DeleteAcl(request: DeepPartial<DeleteAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AdminServiceDeleteAclDesc, DeleteAclRequest.fromPartial(request), metadata);
  }

  GetAcl(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<AclsResponse> {
    return this.rpc.unary(AdminServiceGetAclDesc, Empty.fromPartial(request), metadata);
  }

  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AdminServicePatchAclDesc, PatchAclRequest.fromPartial(request), metadata);
  }

  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse> {
    return this.rpc.unary(AdminServiceCreateGroupDesc, CreateGroupRequest.fromPartial(request), metadata);
  }

  DeleteGroup(request: DeepPartial<DeleteGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse> {
    return this.rpc.unary(AdminServiceDeleteGroupDesc, DeleteGroupRequest.fromPartial(request), metadata);
  }

  GetGroupAndUsers(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GroupsResponse> {
    return this.rpc.unary(AdminServiceGetGroupAndUsersDesc, Empty.fromPartial(request), metadata);
  }

  GetGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GroupsResponse> {
    return this.rpc.unary(AdminServiceGetGroupDesc, Empty.fromPartial(request), metadata);
  }

  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<GroupResponse> {
    return this.rpc.unary(AdminServicePatchGroupDesc, PatchGroupRequest.fromPartial(request), metadata);
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

export const AdminServiceCreateAclDesc: UnaryMethodDefinitionish = {
  methodName: "CreateAcl",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateAclRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AclResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminServiceDeleteAclDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteAcl",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteAclRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AclResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminServiceGetAclDesc: UnaryMethodDefinitionish = {
  methodName: "GetAcl",
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
      const value = AclsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminServicePatchAclDesc: UnaryMethodDefinitionish = {
  methodName: "PatchAcl",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchAclRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AclResponse.decode(data);
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

export const AdminServiceDeleteGroupDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteGroup",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteGroupRequest.encode(this).finish();
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

export const AdminServiceGetGroupAndUsersDesc: UnaryMethodDefinitionish = {
  methodName: "GetGroupAndUsers",
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
      const value = GroupsResponse.decode(data);
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
      const value = GroupsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminServicePatchGroupDesc: UnaryMethodDefinitionish = {
  methodName: "PatchGroup",
  service: AdminServiceDesc,
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
