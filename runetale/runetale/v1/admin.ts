/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export enum DeploymentMethod {
  DOCKER = 0,
  CLI = 1,
  LINUX = 2,
  GCP = 3,
  MANUAL = 4,
  AWS = 5,
  Azure = 6,
  Onprem = 7,
  Other = 8,
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
    case 5:
    case "AWS":
      return DeploymentMethod.AWS;
    case 6:
    case "Azure":
      return DeploymentMethod.Azure;
    case 7:
    case "Onprem":
      return DeploymentMethod.Onprem;
    case 8:
    case "Other":
      return DeploymentMethod.Other;
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
    case DeploymentMethod.AWS:
      return "AWS";
    case DeploymentMethod.Azure:
      return "Azure";
    case DeploymentMethod.Onprem:
      return "Onprem";
    case DeploymentMethod.Other:
      return "Other";
    case DeploymentMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateAclRequest {
  name: string;
  /** user ids */
  src: number[];
  /** user ids */
  dst: number[];
  proto: string;
  port: string;
}

export interface PatchAclRequest {
  /** acl id */
  id: number;
  name: string;
  /** user ids */
  src: number[];
  /** user ids */
  dst: number[];
  proto: string;
  port: string;
}

export interface GetAclRequest {
  id: number;
}

export interface GetAclsResponse {
  acls: AclResponse[];
}

export interface AclResponse {
  id: number;
  name: string;
  /** user ids */
  src: number[];
  /** user ids */
  dst: number[];
  proto: string;
  port: string;
  age: string;
}

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

export interface GetDevicesRequest {
  id: number;
}

export interface Devices {
  devices: Device[];
}

export interface CreateResourceRequest {
  name: string;
}

export interface CreateResourceResponse {
  name: string;
}

export interface GenerateTokenRequest {
  deploymentMethod: DeploymentMethod;
}

export interface GenerateTokenResponse {
  token: string;
}

export interface PatchResourceRequest {
  name: string;
}

export interface GetResourceRequest {
  id: number;
}

export interface Resources {
  resources: Resource[];
}

export interface AddNewSrcsForResourceRequest {
  /** resource id */
  id: number;
  userIds: number[];
  groupIds: number[];
}

export interface AddFleetsRequest {
  /** resource id */
  id: number;
  fleetIds: number[];
}

export interface CreateFleetRequest {
  name: string;
  desc: string;
  resourceIds: number[];
  proto: string;
  port: string;
  type: DeploymentMethod;
}

export interface PatchFleetRequest {
  /** fleet id */
  id: number;
  name: string;
  desc: string;
  resourceIds: number[];
  proto: string;
  port: string;
}

export interface GetFleetRequest {
  id: number;
}

export interface Fleets {
  fleets: Fleet[];
}

export interface AddNewSrcsForFleetRequest {
  /** fleet id */
  id: number;
  userIds: number[];
  groupIds: number[];
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
  /** only when status false */
  lastSeen: string;
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
  /** only when status false */
  lastSeen: string;
  status: boolean;
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

function createBaseCreateAclRequest(): CreateAclRequest {
  return { name: "", src: [], dst: [], proto: "", port: "" };
}

export const CreateAclRequest = {
  encode(message: CreateAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(18).fork();
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.dst) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(42).string(message.port);
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

          message.name = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.src.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.src.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag === 24) {
            message.dst.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dst.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.Number(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: CreateAclRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAclRequest>, I>>(base?: I): CreateAclRequest {
    return CreateAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAclRequest>, I>>(object: I): CreateAclRequest {
    const message = createBaseCreateAclRequest();
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBasePatchAclRequest(): PatchAclRequest {
  return { id: 0, name: "", src: [], dst: [], proto: "", port: "" };
}

export const PatchAclRequest = {
  encode(message: PatchAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.dst) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(50).string(message.port);
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
          if (tag === 32) {
            message.dst.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dst.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): PatchAclRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.Number(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: PatchAclRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchAclRequest>, I>>(base?: I): PatchAclRequest {
    return PatchAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchAclRequest>, I>>(object: I): PatchAclRequest {
    const message = createBasePatchAclRequest();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBaseGetAclRequest(): GetAclRequest {
  return { id: 0 };
}

export const GetAclRequest = {
  encode(message: GetAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAclRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAclRequest();
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

  fromJSON(object: any): GetAclRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetAclRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAclRequest>, I>>(base?: I): GetAclRequest {
    return GetAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAclRequest>, I>>(object: I): GetAclRequest {
    const message = createBaseGetAclRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetAclsResponse(): GetAclsResponse {
  return { acls: [] };
}

export const GetAclsResponse = {
  encode(message: GetAclsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acls) {
      AclResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAclsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAclsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acls.push(AclResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAclsResponse {
    return { acls: globalThis.Array.isArray(object?.acls) ? object.acls.map((e: any) => AclResponse.fromJSON(e)) : [] };
  },

  toJSON(message: GetAclsResponse): unknown {
    const obj: any = {};
    if (message.acls?.length) {
      obj.acls = message.acls.map((e) => AclResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAclsResponse>, I>>(base?: I): GetAclsResponse {
    return GetAclsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAclsResponse>, I>>(object: I): GetAclsResponse {
    const message = createBaseGetAclsResponse();
    message.acls = object.acls?.map((e) => AclResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAclResponse(): AclResponse {
  return { id: 0, name: "", src: [], dst: [], proto: "", port: "", age: "" };
}

export const AclResponse = {
  encode(message: AclResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.dst) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(50).string(message.port);
    }
    if (message.age !== "") {
      writer.uint32(58).string(message.age);
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
          if (tag === 32) {
            message.dst.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dst.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.port = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): AclResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.Number(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
      age: isSet(object.age) ? globalThis.String(object.age) : "",
    };
  },

  toJSON(message: AclResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => Math.round(e));
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

  create<I extends Exact<DeepPartial<AclResponse>, I>>(base?: I): AclResponse {
    return AclResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AclResponse>, I>>(object: I): AclResponse {
    const message = createBaseAclResponse();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    message.age = object.age ?? "";
    return message;
  },
};

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

function createBaseGetDevicesRequest(): GetDevicesRequest {
  return { id: 0 };
}

export const GetDevicesRequest = {
  encode(message: GetDevicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDevicesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDevicesRequest();
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

  fromJSON(object: any): GetDevicesRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetDevicesRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDevicesRequest>, I>>(base?: I): GetDevicesRequest {
    return GetDevicesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDevicesRequest>, I>>(object: I): GetDevicesRequest {
    const message = createBaseGetDevicesRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDevices(): Devices {
  return { devices: [] };
}

export const Devices = {
  encode(message: Devices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Devices {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.devices.push(Device.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Devices {
    return {
      devices: globalThis.Array.isArray(object?.devices) ? object.devices.map((e: any) => Device.fromJSON(e)) : [],
    };
  },

  toJSON(message: Devices): unknown {
    const obj: any = {};
    if (message.devices?.length) {
      obj.devices = message.devices.map((e) => Device.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Devices>, I>>(base?: I): Devices {
    return Devices.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Devices>, I>>(object: I): Devices {
    const message = createBaseDevices();
    message.devices = object.devices?.map((e) => Device.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateResourceRequest(): CreateResourceRequest {
  return { name: "" };
}

export const CreateResourceRequest = {
  encode(message: CreateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CreateResourceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(base?: I): CreateResourceRequest {
    return CreateResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(object: I): CreateResourceRequest {
    const message = createBaseCreateResourceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateResourceResponse(): CreateResourceResponse {
  return { name: "" };
}

export const CreateResourceResponse = {
  encode(message: CreateResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResourceResponse {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CreateResourceResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceResponse>, I>>(base?: I): CreateResourceResponse {
    return CreateResourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceResponse>, I>>(object: I): CreateResourceResponse {
    const message = createBaseCreateResourceResponse();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGenerateTokenRequest(): GenerateTokenRequest {
  return { deploymentMethod: 0 };
}

export const GenerateTokenRequest = {
  encode(message: GenerateTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentMethod !== 0) {
      writer.uint32(8).int32(message.deploymentMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deploymentMethod = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateTokenRequest {
    return { deploymentMethod: isSet(object.deploymentMethod) ? deploymentMethodFromJSON(object.deploymentMethod) : 0 };
  },

  toJSON(message: GenerateTokenRequest): unknown {
    const obj: any = {};
    if (message.deploymentMethod !== 0) {
      obj.deploymentMethod = deploymentMethodToJSON(message.deploymentMethod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateTokenRequest>, I>>(base?: I): GenerateTokenRequest {
    return GenerateTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateTokenRequest>, I>>(object: I): GenerateTokenRequest {
    const message = createBaseGenerateTokenRequest();
    message.deploymentMethod = object.deploymentMethod ?? 0;
    return message;
  },
};

function createBaseGenerateTokenResponse(): GenerateTokenResponse {
  return { token: "" };
}

export const GenerateTokenResponse = {
  encode(message: GenerateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateTokenResponse {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: GenerateTokenResponse): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateTokenResponse>, I>>(base?: I): GenerateTokenResponse {
    return GenerateTokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateTokenResponse>, I>>(object: I): GenerateTokenResponse {
    const message = createBaseGenerateTokenResponse();
    message.token = object.token ?? "";
    return message;
  },
};

function createBasePatchResourceRequest(): PatchResourceRequest {
  return { name: "" };
}

export const PatchResourceRequest = {
  encode(message: PatchResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchResourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchResourceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: PatchResourceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchResourceRequest>, I>>(base?: I): PatchResourceRequest {
    return PatchResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchResourceRequest>, I>>(object: I): PatchResourceRequest {
    const message = createBasePatchResourceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetResourceRequest(): GetResourceRequest {
  return { id: 0 };
}

export const GetResourceRequest = {
  encode(message: GetResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceRequest();
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

  fromJSON(object: any): GetResourceRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourceRequest>, I>>(base?: I): GetResourceRequest {
    return GetResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourceRequest>, I>>(object: I): GetResourceRequest {
    const message = createBaseGetResourceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseResources(): Resources {
  return { resources: [] };
}

export const Resources = {
  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resources {
    return {
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resources>, I>>(base?: I): Resources {
    return Resources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
    const message = createBaseResources();
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddNewSrcsForResourceRequest(): AddNewSrcsForResourceRequest {
  return { id: 0, userIds: [], groupIds: [] };
}

export const AddNewSrcsForResourceRequest = {
  encode(message: AddNewSrcsForResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.userIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.groupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNewSrcsForResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNewSrcsForResourceRequest();
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
        case 3:
          if (tag === 24) {
            message.groupIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupIds.push(longToNumber(reader.uint64() as Long));
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

  fromJSON(object: any): AddNewSrcsForResourceRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.Number(e)) : [],
      groupIds: globalThis.Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddNewSrcsForResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userIds?.length) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNewSrcsForResourceRequest>, I>>(base?: I): AddNewSrcsForResourceRequest {
    return AddNewSrcsForResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNewSrcsForResourceRequest>, I>>(object: I): AddNewSrcsForResourceRequest {
    const message = createBaseAddNewSrcsForResourceRequest();
    message.id = object.id ?? 0;
    message.userIds = object.userIds?.map((e) => e) || [];
    message.groupIds = object.groupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseAddFleetsRequest(): AddFleetsRequest {
  return { id: 0, fleetIds: [] };
}

export const AddFleetsRequest = {
  encode(message: AddFleetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(26).fork();
    for (const v of message.fleetIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddFleetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddFleetsRequest();
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

  fromJSON(object: any): AddFleetsRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      fleetIds: globalThis.Array.isArray(object?.fleetIds) ? object.fleetIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddFleetsRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.fleetIds?.length) {
      obj.fleetIds = message.fleetIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddFleetsRequest>, I>>(base?: I): AddFleetsRequest {
    return AddFleetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddFleetsRequest>, I>>(object: I): AddFleetsRequest {
    const message = createBaseAddFleetsRequest();
    message.id = object.id ?? 0;
    message.fleetIds = object.fleetIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateFleetRequest(): CreateFleetRequest {
  return { name: "", desc: "", resourceIds: [], proto: "", port: "", type: 0 };
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
    for (const v of message.resourceIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(42).string(message.port);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
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
            message.resourceIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resourceIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
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
          if (tag !== 48) {
            break;
          }

          message.type = reader.int32() as any;
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
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.Number(e))
        : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
      type: isSet(object.type) ? deploymentMethodFromJSON(object.type) : 0,
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
    if (message.resourceIds?.length) {
      obj.resourceIds = message.resourceIds.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.type !== 0) {
      obj.type = deploymentMethodToJSON(message.type);
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
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBasePatchFleetRequest(): PatchFleetRequest {
  return { id: 0, name: "", desc: "", resourceIds: [], proto: "", port: "" };
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
    for (const v of message.resourceIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(50).string(message.port);
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
            message.resourceIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resourceIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.Number(e))
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
    if (message.resourceIds?.length) {
      obj.resourceIds = message.resourceIds.map((e) => Math.round(e));
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
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
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

function createBaseFleets(): Fleets {
  return { fleets: [] };
}

export const Fleets = {
  encode(message: Fleets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fleets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFleets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fleets.push(Fleet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fleets {
    return { fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => Fleet.fromJSON(e)) : [] };
  },

  toJSON(message: Fleets): unknown {
    const obj: any = {};
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => Fleet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Fleets>, I>>(base?: I): Fleets {
    return Fleets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Fleets>, I>>(object: I): Fleets {
    const message = createBaseFleets();
    message.fleets = object.fleets?.map((e) => Fleet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddNewSrcsForFleetRequest(): AddNewSrcsForFleetRequest {
  return { id: 0, userIds: [], groupIds: [] };
}

export const AddNewSrcsForFleetRequest = {
  encode(message: AddNewSrcsForFleetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.userIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.groupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNewSrcsForFleetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNewSrcsForFleetRequest();
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
        case 3:
          if (tag === 24) {
            message.groupIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupIds.push(longToNumber(reader.uint64() as Long));
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

  fromJSON(object: any): AddNewSrcsForFleetRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.Number(e)) : [],
      groupIds: globalThis.Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddNewSrcsForFleetRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userIds?.length) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNewSrcsForFleetRequest>, I>>(base?: I): AddNewSrcsForFleetRequest {
    return AddNewSrcsForFleetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNewSrcsForFleetRequest>, I>>(object: I): AddNewSrcsForFleetRequest {
    const message = createBaseAddNewSrcsForFleetRequest();
    message.id = object.id ?? 0;
    message.userIds = object.userIds?.map((e) => e) || [];
    message.groupIds = object.groupIds?.map((e) => e) || [];
    return message;
  },
};

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
  return {
    id: 0,
    name: "",
    ip: "",
    os: "",
    status: false,
    lastSeen: "",
    createdBy: "",
    fleets: [],
    users: [],
    groups: [],
  };
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
    if (message.lastSeen !== "") {
      writer.uint32(50).string(message.lastSeen);
    }
    if (message.createdBy !== "") {
      writer.uint32(58).string(message.createdBy);
    }
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(82).fork()).ldelim();
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

          message.lastSeen = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdBy = reader.string();
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

  fromJSON(object: any): Resource {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      lastSeen: isSet(object.lastSeen) ? globalThis.String(object.lastSeen) : "",
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
    if (message.lastSeen !== "") {
      obj.lastSeen = message.lastSeen;
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
    message.lastSeen = object.lastSeen ?? "";
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
    status: false,
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
    if (message.status !== false) {
      writer.uint32(64).bool(message.status);
    }
    for (const v of message.fleets) {
      Fleet.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.devices) {
      Device.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(98).fork()).ldelim();
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
          if (tag !== 64) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.fleets.push(Fleet.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.devices.push(Device.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
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
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
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
    if (message.status !== false) {
      obj.status = message.status;
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
    message.status = object.status ?? false;
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

export interface AclService {
  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  GetAcl(request: DeepPartial<GetAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  GetAcls(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetAclsResponse>;
}

export class AclServiceClientImpl implements AclService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAcl = this.CreateAcl.bind(this);
    this.PatchAcl = this.PatchAcl.bind(this);
    this.GetAcl = this.GetAcl.bind(this);
    this.GetAcls = this.GetAcls.bind(this);
  }

  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServiceCreateAclDesc, CreateAclRequest.fromPartial(request), metadata);
  }

  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServicePatchAclDesc, PatchAclRequest.fromPartial(request), metadata);
  }

  GetAcl(request: DeepPartial<GetAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServiceGetAclDesc, GetAclRequest.fromPartial(request), metadata);
  }

  GetAcls(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetAclsResponse> {
    return this.rpc.unary(AclServiceGetAclsDesc, Empty.fromPartial(request), metadata);
  }
}

export const AclServiceDesc = { serviceName: "protos.AclService" };

export const AclServiceCreateAclDesc: UnaryMethodDefinitionish = {
  methodName: "CreateAcl",
  service: AclServiceDesc,
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

export const AclServicePatchAclDesc: UnaryMethodDefinitionish = {
  methodName: "PatchAcl",
  service: AclServiceDesc,
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

export const AclServiceGetAclDesc: UnaryMethodDefinitionish = {
  methodName: "GetAcl",
  service: AclServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetAclRequest.encode(this).finish();
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

export const AclServiceGetAclsDesc: UnaryMethodDefinitionish = {
  methodName: "GetAcls",
  service: AclServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetAclsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
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

export interface DeviceService {
  GetDevice(request: DeepPartial<GetDevicesRequest>, metadata?: grpc.Metadata): Promise<Device>;
  GetDevices(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Devices>;
}

export class DeviceServiceClientImpl implements DeviceService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetDevice = this.GetDevice.bind(this);
    this.GetDevices = this.GetDevices.bind(this);
  }

  GetDevice(request: DeepPartial<GetDevicesRequest>, metadata?: grpc.Metadata): Promise<Device> {
    return this.rpc.unary(DeviceServiceGetDeviceDesc, GetDevicesRequest.fromPartial(request), metadata);
  }

  GetDevices(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Devices> {
    return this.rpc.unary(DeviceServiceGetDevicesDesc, Empty.fromPartial(request), metadata);
  }
}

export const DeviceServiceDesc = { serviceName: "protos.DeviceService" };

export const DeviceServiceGetDeviceDesc: UnaryMethodDefinitionish = {
  methodName: "GetDevice",
  service: DeviceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetDevicesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Device.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const DeviceServiceGetDevicesDesc: UnaryMethodDefinitionish = {
  methodName: "GetDevices",
  service: DeviceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Devices.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface ResourceService {
  CreateResource(
    request: DeepPartial<CreateResourceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CreateResourceResponse>;
  GenerateToken(request: DeepPartial<GenerateTokenRequest>, metadata?: grpc.Metadata): Promise<GenerateTokenResponse>;
  PatchResource(request: DeepPartial<PatchResourceRequest>, metadata?: grpc.Metadata): Promise<Resource>;
  GetResource(request: DeepPartial<GetResourceRequest>, metadata?: grpc.Metadata): Promise<Resource>;
  GetResources(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Resources>;
}

export class ResourceServiceClientImpl implements ResourceService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateResource = this.CreateResource.bind(this);
    this.GenerateToken = this.GenerateToken.bind(this);
    this.PatchResource = this.PatchResource.bind(this);
    this.GetResource = this.GetResource.bind(this);
    this.GetResources = this.GetResources.bind(this);
  }

  CreateResource(
    request: DeepPartial<CreateResourceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CreateResourceResponse> {
    return this.rpc.unary(ResourceServiceCreateResourceDesc, CreateResourceRequest.fromPartial(request), metadata);
  }

  GenerateToken(request: DeepPartial<GenerateTokenRequest>, metadata?: grpc.Metadata): Promise<GenerateTokenResponse> {
    return this.rpc.unary(ResourceServiceGenerateTokenDesc, GenerateTokenRequest.fromPartial(request), metadata);
  }

  PatchResource(request: DeepPartial<PatchResourceRequest>, metadata?: grpc.Metadata): Promise<Resource> {
    return this.rpc.unary(ResourceServicePatchResourceDesc, PatchResourceRequest.fromPartial(request), metadata);
  }

  GetResource(request: DeepPartial<GetResourceRequest>, metadata?: grpc.Metadata): Promise<Resource> {
    return this.rpc.unary(ResourceServiceGetResourceDesc, GetResourceRequest.fromPartial(request), metadata);
  }

  GetResources(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Resources> {
    return this.rpc.unary(ResourceServiceGetResourcesDesc, Empty.fromPartial(request), metadata);
  }
}

export const ResourceServiceDesc = { serviceName: "protos.ResourceService" };

export const ResourceServiceCreateResourceDesc: UnaryMethodDefinitionish = {
  methodName: "CreateResource",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateResourceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateResourceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServiceGenerateTokenDesc: UnaryMethodDefinitionish = {
  methodName: "GenerateToken",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GenerateTokenRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GenerateTokenResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServicePatchResourceDesc: UnaryMethodDefinitionish = {
  methodName: "PatchResource",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchResourceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Resource.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServiceGetResourceDesc: UnaryMethodDefinitionish = {
  methodName: "GetResource",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetResourceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Resource.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServiceGetResourcesDesc: UnaryMethodDefinitionish = {
  methodName: "GetResources",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Resources.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface ResourceDetailService {
  AddNewSrcsForResource(request: DeepPartial<AddNewSrcsForResourceRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  AddFleets(request: DeepPartial<AddFleetsRequest>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class ResourceDetailServiceClientImpl implements ResourceDetailService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddNewSrcsForResource = this.AddNewSrcsForResource.bind(this);
    this.AddFleets = this.AddFleets.bind(this);
  }

  AddNewSrcsForResource(request: DeepPartial<AddNewSrcsForResourceRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(
      ResourceDetailServiceAddNewSrcsForResourceDesc,
      AddNewSrcsForResourceRequest.fromPartial(request),
      metadata,
    );
  }

  AddFleets(request: DeepPartial<AddFleetsRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(ResourceDetailServiceAddFleetsDesc, AddFleetsRequest.fromPartial(request), metadata);
  }
}

export const ResourceDetailServiceDesc = { serviceName: "protos.ResourceDetailService" };

export const ResourceDetailServiceAddNewSrcsForResourceDesc: UnaryMethodDefinitionish = {
  methodName: "AddNewSrcsForResource",
  service: ResourceDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddNewSrcsForResourceRequest.encode(this).finish();
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

export const ResourceDetailServiceAddFleetsDesc: UnaryMethodDefinitionish = {
  methodName: "AddFleets",
  service: ResourceDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddFleetsRequest.encode(this).finish();
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

export interface FleetService {
  CreateFleet(request: DeepPartial<CreateFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet>;
  PatchFleet(request: DeepPartial<PatchFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet>;
  GetFleet(request: DeepPartial<GetFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet>;
  GetFleets(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Fleets>;
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

  CreateFleet(request: DeepPartial<CreateFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet> {
    return this.rpc.unary(FleetServiceCreateFleetDesc, CreateFleetRequest.fromPartial(request), metadata);
  }

  PatchFleet(request: DeepPartial<PatchFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet> {
    return this.rpc.unary(FleetServicePatchFleetDesc, PatchFleetRequest.fromPartial(request), metadata);
  }

  GetFleet(request: DeepPartial<GetFleetRequest>, metadata?: grpc.Metadata): Promise<Fleet> {
    return this.rpc.unary(FleetServiceGetFleetDesc, GetFleetRequest.fromPartial(request), metadata);
  }

  GetFleets(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Fleets> {
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
      const value = Fleet.decode(data);
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
      const value = Fleet.decode(data);
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
      const value = Fleet.decode(data);
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
      const value = Fleets.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface FleetDetailService {
  AddNewSrcsForFleet(request: DeepPartial<AddNewSrcsForFleetRequest>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class FleetDetailServiceClientImpl implements FleetDetailService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddNewSrcsForFleet = this.AddNewSrcsForFleet.bind(this);
  }

  AddNewSrcsForFleet(request: DeepPartial<AddNewSrcsForFleetRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(
      FleetDetailServiceAddNewSrcsForFleetDesc,
      AddNewSrcsForFleetRequest.fromPartial(request),
      metadata,
    );
  }
}

export const FleetDetailServiceDesc = { serviceName: "protos.FleetDetailService" };

export const FleetDetailServiceAddNewSrcsForFleetDesc: UnaryMethodDefinitionish = {
  methodName: "AddNewSrcsForFleet",
  service: FleetDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddNewSrcsForFleetRequest.encode(this).finish();
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