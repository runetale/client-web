/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protos";

export enum DeploymentMethod {
  DOCKER = 0,
  CLI = 1,
  LINUX = 2,
  GCP = 3,
  MANUAL = 4,
  UNRECOGNIZED = -1,
}

export function deploymentMethodFromJSON(object: any): DeploymentMethod {
  switch (object) {
    case 0:
    case "DOCKER":
      return DeploymentMethod.DOCKER;
    case 1:
    case "CLI":
      return DeploymentMethod.CLI;
    case 2:
    case "LINUX":
      return DeploymentMethod.LINUX;
    case 3:
    case "GCP":
      return DeploymentMethod.GCP;
    case 4:
    case "MANUAL":
      return DeploymentMethod.MANUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeploymentMethod.UNRECOGNIZED;
  }
}

export function deploymentMethodToJSON(object: DeploymentMethod): string {
  switch (object) {
    case DeploymentMethod.DOCKER:
      return "DOCKER";
    case DeploymentMethod.CLI:
      return "CLI";
    case DeploymentMethod.LINUX:
      return "LINUX";
    case DeploymentMethod.GCP:
      return "GCP";
    case DeploymentMethod.MANUAL:
      return "MANUAL";
    case DeploymentMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Fleet {
  id: number;
  name: string;
  desc: string;
  proto: string;
  port: string;
  /** created by domain */
  domain: string;
  age: string;
  resources: Resource[];
  users: User[];
  groups: Group[];
}

export interface Resource {
  id: number;
  name: string;
  ip: string;
  os: string;
  status: boolean;
  /** if made with token, managedBy is returned. */
  createdBy: string;
  fleets: Fleet[];
  users: User[];
  groups: Group[];
}

export interface Group {
  id: number;
  name: string;
  /** 参照できるようにする */
  users: User[];
  fleets: Fleet[];
  resources: Resource[];
  age: string;
}

export interface User {
  id: number;
  name: string;
  picture: string;
  email: string;
  role: string;
  joined: string;
  lastSeen: string;
  fleets: Fleet[];
  resources: Resource[];
  devices: Device[];
  groups: Group[];
}

export interface Device {
  id: number;
  name: string;
  email: string;
  ip: string;
  os: string;
  status: boolean;
  /** only when status false */
  lastSeen: string;
  createdBy: string;
  version: string;
  nodeKey: string;
  createdAt: string;
  keyExpiry: string;
  fleets: Fleet[];
  resources: Resource[];
  groups: Group[];
}

function createBaseFleet(): Fleet {
  return { id: 0, name: "", desc: "", proto: "", port: "", domain: "", age: "", resources: [], users: [], groups: [] };
}

export const Fleet = {
  encode(message: Fleet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(42).string(message.port);
    }
    if (message.domain !== "") {
      writer.uint32(50).string(message.domain);
    }
    if (message.age !== "") {
      writer.uint32(58).string(message.age);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fleet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFleet();
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
          if (tag !== 50) {
            break;
          }

          message.domain = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.age = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
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

  fromJSON(object: any): Fleet {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      desc: isSet(object.desc) ? globalThis.String(object.desc) : "",
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
      domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
      age: isSet(object.age) ? globalThis.String(object.age) : "",
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
    };
  },

  toJSON(message: Fleet): unknown {
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
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    if (message.age !== "") {
      obj.age = message.age;
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Fleet>, I>>(base?: I): Fleet {
    return Fleet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Fleet>, I>>(object: I): Fleet {
    const message = createBaseFleet();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    message.domain = object.domain ?? "";
    message.age = object.age ?? "";
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResource(): Resource {
  return { id: 0, name: "", ip: "", os: "", status: false, createdBy: "", fleets: [], users: [], groups: [] };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.os !== "") {
      writer.uint32(34).string(message.os);
    }
    if (message.status !== false) {
      writer.uint32(40).bool(message.status);
    }
    if (message.createdBy !== "") {
      writer.uint32(50).string(message.createdBy);
    }
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
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

          message.ip = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.os = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fleets.push(Fleet.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): Resource {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => Fleet.fromJSON(e)) : [],
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.status !== false) {
      obj.status = message.status;
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => Fleet.toJSON(e));
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resource>, I>>(base?: I): Resource {
    return Resource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.ip = object.ip ?? "";
    message.os = object.os ?? "";
    message.status = object.status ?? false;
    message.createdBy = object.createdBy ?? "";
    message.fleets = object.fleets?.map((e) => Fleet.fromPartial(e)) || [];
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroup(): Group {
  return { id: 0, name: "", users: [], fleets: [], resources: [], age: "" };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.age !== "") {
      writer.uint32(50).string(message.age);
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

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fleets.push(Fleet.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Group {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => Fleet.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      age: isSet(object.age) ? globalThis.String(object.age) : "",
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => Fleet.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.age !== "") {
      obj.age = message.age;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.fleets = object.fleets?.map((e) => Fleet.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.age = object.age ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return {
    id: 0,
    name: "",
    picture: "",
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
    if (message.picture !== "") {
      writer.uint32(26).string(message.picture);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.role !== "") {
      writer.uint32(42).string(message.role);
    }
    if (message.joined !== "") {
      writer.uint32(50).string(message.joined);
    }
    if (message.lastSeen !== "") {
      writer.uint32(58).string(message.lastSeen);
    }
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.devices) {
      Device.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(90).fork()).ldelim();
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

          message.picture = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.role = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.joined = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastSeen = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.fleets.push(Fleet.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.devices.push(Device.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      picture: isSet(object.picture) ? globalThis.String(object.picture) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      role: isSet(object.role) ? globalThis.String(object.role) : "",
      joined: isSet(object.joined) ? globalThis.String(object.joined) : "",
      lastSeen: isSet(object.lastSeen) ? globalThis.String(object.lastSeen) : "",
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => Fleet.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      devices: globalThis.Array.isArray(object?.devices) ? object.devices.map((e: any) => Device.fromJSON(e)) : [],
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
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
    if (message.picture !== "") {
      obj.picture = message.picture;
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
      obj.fleets = message.fleets.map((e) => Fleet.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.devices?.length) {
      obj.devices = message.devices.map((e) => Device.toJSON(e));
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
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
    message.picture = object.picture ?? "";
    message.email = object.email ?? "";
    message.role = object.role ?? "";
    message.joined = object.joined ?? "";
    message.lastSeen = object.lastSeen ?? "";
    message.fleets = object.fleets?.map((e) => Fleet.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.devices = object.devices?.map((e) => Device.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDevice(): Device {
  return {
    id: 0,
    name: "",
    email: "",
    ip: "",
    os: "",
    status: false,
    lastSeen: "",
    createdBy: "",
    version: "",
    nodeKey: "",
    createdAt: "",
    keyExpiry: "",
    fleets: [],
    resources: [],
    groups: [],
  };
}

export const Device = {
  encode(message: Device, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    if (message.os !== "") {
      writer.uint32(42).string(message.os);
    }
    if (message.status !== false) {
      writer.uint32(48).bool(message.status);
    }
    if (message.lastSeen !== "") {
      writer.uint32(58).string(message.lastSeen);
    }
    if (message.createdBy !== "") {
      writer.uint32(66).string(message.createdBy);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    if (message.nodeKey !== "") {
      writer.uint32(82).string(message.nodeKey);
    }
    if (message.createdAt !== "") {
      writer.uint32(90).string(message.createdAt);
    }
    if (message.keyExpiry !== "") {
      writer.uint32(98).string(message.keyExpiry);
    }
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Device {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevice();
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

          message.ip = reader.string();
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

          message.status = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastSeen = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.version = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.nodeKey = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.keyExpiry = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.fleets.push(Fleet.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
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

  fromJSON(object: any): Device {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      lastSeen: isSet(object.lastSeen) ? globalThis.String(object.lastSeen) : "",
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      nodeKey: isSet(object.nodeKey) ? globalThis.String(object.nodeKey) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      keyExpiry: isSet(object.keyExpiry) ? globalThis.String(object.keyExpiry) : "",
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => Fleet.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
    };
  },

  toJSON(message: Device): unknown {
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
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.status !== false) {
      obj.status = message.status;
    }
    if (message.lastSeen !== "") {
      obj.lastSeen = message.lastSeen;
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.nodeKey !== "") {
      obj.nodeKey = message.nodeKey;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.keyExpiry !== "") {
      obj.keyExpiry = message.keyExpiry;
    }
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => Fleet.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Device>, I>>(base?: I): Device {
    return Device.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Device>, I>>(object: I): Device {
    const message = createBaseDevice();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.ip = object.ip ?? "";
    message.os = object.os ?? "";
    message.status = object.status ?? false;
    message.lastSeen = object.lastSeen ?? "";
    message.createdBy = object.createdBy ?? "";
    message.version = object.version ?? "";
    message.nodeKey = object.nodeKey ?? "";
    message.createdAt = object.createdAt ?? "";
    message.keyExpiry = object.keyExpiry ?? "";
    message.fleets = object.fleets?.map((e) => Fleet.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

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
