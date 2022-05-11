/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "protos";

export enum PermissionType {
  RWXKey = 0,
  RWKey = 1,
  RKey = 2,
  UNRECOGNIZED = -1,
}

export function permissionTypeFromJSON(object: any): PermissionType {
  switch (object) {
    case 0:
    case "RWXKey":
      return PermissionType.RWXKey;
    case 1:
    case "RWKey":
      return PermissionType.RWKey;
    case 2:
    case "RKey":
      return PermissionType.RKey;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PermissionType.UNRECOGNIZED;
  }
}

export function permissionTypeToJSON(object: PermissionType): string {
  switch (object) {
    case PermissionType.RWXKey:
      return "RWXKey";
    case PermissionType.RWKey:
      return "RWKey";
    case PermissionType.RKey:
      return "RKey";
    default:
      return "UNKNOWN";
  }
}

export interface GetRequiredForCreateSetupKeyInfoRequest {
  orgID: string;
}

export interface GetRequiredForCreateSetupKeyInfoResponse {
  userGroupID: number;
  orgID: string;
  networkID: number;
  jobID: number;
  roleID: number;
}

export interface CreateSetupKeyRequest {
  userGroupID: number;
  orgGroupID: string;
  networkID: number;
  jobID: number;
  roleID: number;
  email: string;
}

export interface CreateSetupKeyResponse {
  setupKey: string;
}

function createBaseGetRequiredForCreateSetupKeyInfoRequest(): GetRequiredForCreateSetupKeyInfoRequest {
  return { orgID: "" };
}

export const GetRequiredForCreateSetupKeyInfoRequest = {
  encode(
    message: GetRequiredForCreateSetupKeyInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orgID !== "") {
      writer.uint32(10).string(message.orgID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRequiredForCreateSetupKeyInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequiredForCreateSetupKeyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orgID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequiredForCreateSetupKeyInfoRequest {
    return {
      orgID: isSet(object.orgID) ? String(object.orgID) : "",
    };
  },

  toJSON(message: GetRequiredForCreateSetupKeyInfoRequest): unknown {
    const obj: any = {};
    message.orgID !== undefined && (obj.orgID = message.orgID);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetRequiredForCreateSetupKeyInfoRequest>, I>
  >(object: I): GetRequiredForCreateSetupKeyInfoRequest {
    const message = createBaseGetRequiredForCreateSetupKeyInfoRequest();
    message.orgID = object.orgID ?? "";
    return message;
  },
};

function createBaseGetRequiredForCreateSetupKeyInfoResponse(): GetRequiredForCreateSetupKeyInfoResponse {
  return { userGroupID: 0, orgID: "", networkID: 0, jobID: 0, roleID: 0 };
}

export const GetRequiredForCreateSetupKeyInfoResponse = {
  encode(
    message: GetRequiredForCreateSetupKeyInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userGroupID !== 0) {
      writer.uint32(8).uint64(message.userGroupID);
    }
    if (message.orgID !== "") {
      writer.uint32(18).string(message.orgID);
    }
    if (message.networkID !== 0) {
      writer.uint32(24).uint64(message.networkID);
    }
    if (message.jobID !== 0) {
      writer.uint32(32).uint64(message.jobID);
    }
    if (message.roleID !== 0) {
      writer.uint32(40).uint64(message.roleID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRequiredForCreateSetupKeyInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequiredForCreateSetupKeyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userGroupID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.orgID = reader.string();
          break;
        case 3:
          message.networkID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.jobID = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.roleID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequiredForCreateSetupKeyInfoResponse {
    return {
      userGroupID: isSet(object.userGroupID) ? Number(object.userGroupID) : 0,
      orgID: isSet(object.orgID) ? String(object.orgID) : "",
      networkID: isSet(object.networkID) ? Number(object.networkID) : 0,
      jobID: isSet(object.jobID) ? Number(object.jobID) : 0,
      roleID: isSet(object.roleID) ? Number(object.roleID) : 0,
    };
  },

  toJSON(message: GetRequiredForCreateSetupKeyInfoResponse): unknown {
    const obj: any = {};
    message.userGroupID !== undefined &&
      (obj.userGroupID = Math.round(message.userGroupID));
    message.orgID !== undefined && (obj.orgID = message.orgID);
    message.networkID !== undefined &&
      (obj.networkID = Math.round(message.networkID));
    message.jobID !== undefined && (obj.jobID = Math.round(message.jobID));
    message.roleID !== undefined && (obj.roleID = Math.round(message.roleID));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetRequiredForCreateSetupKeyInfoResponse>, I>
  >(object: I): GetRequiredForCreateSetupKeyInfoResponse {
    const message = createBaseGetRequiredForCreateSetupKeyInfoResponse();
    message.userGroupID = object.userGroupID ?? 0;
    message.orgID = object.orgID ?? "";
    message.networkID = object.networkID ?? 0;
    message.jobID = object.jobID ?? 0;
    message.roleID = object.roleID ?? 0;
    return message;
  },
};

function createBaseCreateSetupKeyRequest(): CreateSetupKeyRequest {
  return {
    userGroupID: 0,
    orgGroupID: "",
    networkID: 0,
    jobID: 0,
    roleID: 0,
    email: "",
  };
}

export const CreateSetupKeyRequest = {
  encode(
    message: CreateSetupKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userGroupID !== 0) {
      writer.uint32(8).uint64(message.userGroupID);
    }
    if (message.orgGroupID !== "") {
      writer.uint32(18).string(message.orgGroupID);
    }
    if (message.networkID !== 0) {
      writer.uint32(24).uint64(message.networkID);
    }
    if (message.jobID !== 0) {
      writer.uint32(32).uint64(message.jobID);
    }
    if (message.roleID !== 0) {
      writer.uint32(40).uint64(message.roleID);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSetupKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSetupKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userGroupID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.orgGroupID = reader.string();
          break;
        case 3:
          message.networkID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.jobID = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.roleID = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSetupKeyRequest {
    return {
      userGroupID: isSet(object.userGroupID) ? Number(object.userGroupID) : 0,
      orgGroupID: isSet(object.orgGroupID) ? String(object.orgGroupID) : "",
      networkID: isSet(object.networkID) ? Number(object.networkID) : 0,
      jobID: isSet(object.jobID) ? Number(object.jobID) : 0,
      roleID: isSet(object.roleID) ? Number(object.roleID) : 0,
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: CreateSetupKeyRequest): unknown {
    const obj: any = {};
    message.userGroupID !== undefined &&
      (obj.userGroupID = Math.round(message.userGroupID));
    message.orgGroupID !== undefined && (obj.orgGroupID = message.orgGroupID);
    message.networkID !== undefined &&
      (obj.networkID = Math.round(message.networkID));
    message.jobID !== undefined && (obj.jobID = Math.round(message.jobID));
    message.roleID !== undefined && (obj.roleID = Math.round(message.roleID));
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSetupKeyRequest>, I>>(
    object: I
  ): CreateSetupKeyRequest {
    const message = createBaseCreateSetupKeyRequest();
    message.userGroupID = object.userGroupID ?? 0;
    message.orgGroupID = object.orgGroupID ?? "";
    message.networkID = object.networkID ?? 0;
    message.jobID = object.jobID ?? 0;
    message.roleID = object.roleID ?? 0;
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseCreateSetupKeyResponse(): CreateSetupKeyResponse {
  return { setupKey: "" };
}

export const CreateSetupKeyResponse = {
  encode(
    message: CreateSetupKeyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.setupKey !== "") {
      writer.uint32(10).string(message.setupKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateSetupKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSetupKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setupKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSetupKeyResponse {
    return {
      setupKey: isSet(object.setupKey) ? String(object.setupKey) : "",
    };
  },

  toJSON(message: CreateSetupKeyResponse): unknown {
    const obj: any = {};
    message.setupKey !== undefined && (obj.setupKey = message.setupKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSetupKeyResponse>, I>>(
    object: I
  ): CreateSetupKeyResponse {
    const message = createBaseCreateSetupKeyResponse();
    message.setupKey = object.setupKey ?? "";
    return message;
  },
};

export interface OrganizationService {
  GetRequiredForCreateSetupKeyInfo(
    request: GetRequiredForCreateSetupKeyInfoRequest
  ): Promise<GetRequiredForCreateSetupKeyInfoResponse>;
  CreateSetupKey(
    request: CreateSetupKeyRequest
  ): Promise<CreateSetupKeyResponse>;
}

export class OrganizationServiceClientImpl implements OrganizationService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetRequiredForCreateSetupKeyInfo =
      this.GetRequiredForCreateSetupKeyInfo.bind(this);
    this.CreateSetupKey = this.CreateSetupKey.bind(this);
  }
  GetRequiredForCreateSetupKeyInfo(
    request: GetRequiredForCreateSetupKeyInfoRequest
  ): Promise<GetRequiredForCreateSetupKeyInfoResponse> {
    const data =
      GetRequiredForCreateSetupKeyInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "protos.OrganizationService",
      "GetRequiredForCreateSetupKeyInfo",
      data
    );
    return promise.then((data) =>
      GetRequiredForCreateSetupKeyInfoResponse.decode(new _m0.Reader(data))
    );
  }

  CreateSetupKey(
    request: CreateSetupKeyRequest
  ): Promise<CreateSetupKeyResponse> {
    const data = CreateSetupKeyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "protos.OrganizationService",
      "CreateSetupKey",
      data
    );
    return promise.then((data) =>
      CreateSetupKeyResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
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
