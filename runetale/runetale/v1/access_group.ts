/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protos";

export enum KindAccessType {
  FLEETS = 0,
  RESOURCES = 1,
  GROUPS = 2,
  DEVICES = 3,
  UNRECOGNIZED = -1,
}

export function kindAccessTypeFromJSON(object: any): KindAccessType {
  switch (object) {
    case 0:
    case "FLEETS":
      return KindAccessType.FLEETS;
    case 1:
    case "RESOURCES":
      return KindAccessType.RESOURCES;
    case 2:
    case "GROUPS":
      return KindAccessType.GROUPS;
    case 3:
    case "DEVICES":
      return KindAccessType.DEVICES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KindAccessType.UNRECOGNIZED;
  }
}

export function kindAccessTypeToJSON(object: KindAccessType): string {
  switch (object) {
    case KindAccessType.FLEETS:
      return "FLEETS";
    case KindAccessType.RESOURCES:
      return "RESOURCES";
    case KindAccessType.GROUPS:
      return "GROUPS";
    case KindAccessType.DEVICES:
      return "DEVICES";
    case KindAccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface KeyValueWithKind {
  /** resource type of src or dst */
  kind: KindAccessType;
  /** ids of the selected kind */
  ids: number[];
}

/**
 * the src and dst selected here are directly reflected in acl.
 * since fleet and resource are accessed in many patterns, dst is used as the basis.
 * groups and devices are basically src.
 * `fleet to fleet, fleet to group, group to group, group to group`
 * exceptions are made in cases such as
 */
export interface AddGroupRequest {
  /** target detail type */
  kind: KindAccessType;
  /** using groups or devices */
  src: KeyValueWithKind[];
  /** using fleets or resources */
  dst: KeyValueWithKind[];
}

export interface AddGroupResponse {
  /** target detail type */
  kind: KindAccessType;
  /** using groups or devices */
  src: KeyValueWithKind[];
  /** using fleets or resources */
  dst: KeyValueWithKind[];
}

function createBaseKeyValueWithKind(): KeyValueWithKind {
  return { kind: 0, ids: [] };
}

export const KeyValueWithKind = {
  encode(message: KeyValueWithKind, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValueWithKind {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValueWithKind();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag === 16) {
            message.ids.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(longToNumber(reader.uint64() as Long));
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

  fromJSON(object: any): KeyValueWithKind {
    return {
      kind: isSet(object.kind) ? kindAccessTypeFromJSON(object.kind) : 0,
      ids: globalThis.Array.isArray(object?.ids) ? object.ids.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: KeyValueWithKind): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = kindAccessTypeToJSON(message.kind);
    }
    if (message.ids?.length) {
      obj.ids = message.ids.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValueWithKind>, I>>(base?: I): KeyValueWithKind {
    return KeyValueWithKind.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyValueWithKind>, I>>(object: I): KeyValueWithKind {
    const message = createBaseKeyValueWithKind();
    message.kind = object.kind ?? 0;
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseAddGroupRequest(): AddGroupRequest {
  return { kind: 0, src: [], dst: [] };
}

export const AddGroupRequest = {
  encode(message: AddGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    for (const v of message.src) {
      KeyValueWithKind.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dst) {
      KeyValueWithKind.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.src.push(KeyValueWithKind.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dst.push(KeyValueWithKind.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddGroupRequest {
    return {
      kind: isSet(object.kind) ? kindAccessTypeFromJSON(object.kind) : 0,
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => KeyValueWithKind.fromJSON(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => KeyValueWithKind.fromJSON(e)) : [],
    };
  },

  toJSON(message: AddGroupRequest): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = kindAccessTypeToJSON(message.kind);
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => KeyValueWithKind.toJSON(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => KeyValueWithKind.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddGroupRequest>, I>>(base?: I): AddGroupRequest {
    return AddGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddGroupRequest>, I>>(object: I): AddGroupRequest {
    const message = createBaseAddGroupRequest();
    message.kind = object.kind ?? 0;
    message.src = object.src?.map((e) => KeyValueWithKind.fromPartial(e)) || [];
    message.dst = object.dst?.map((e) => KeyValueWithKind.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddGroupResponse(): AddGroupResponse {
  return { kind: 0, src: [], dst: [] };
}

export const AddGroupResponse = {
  encode(message: AddGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    for (const v of message.src) {
      KeyValueWithKind.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dst) {
      KeyValueWithKind.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.src.push(KeyValueWithKind.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dst.push(KeyValueWithKind.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddGroupResponse {
    return {
      kind: isSet(object.kind) ? kindAccessTypeFromJSON(object.kind) : 0,
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => KeyValueWithKind.fromJSON(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => KeyValueWithKind.fromJSON(e)) : [],
    };
  },

  toJSON(message: AddGroupResponse): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = kindAccessTypeToJSON(message.kind);
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => KeyValueWithKind.toJSON(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => KeyValueWithKind.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddGroupResponse>, I>>(base?: I): AddGroupResponse {
    return AddGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddGroupResponse>, I>>(object: I): AddGroupResponse {
    const message = createBaseAddGroupResponse();
    message.kind = object.kind ?? 0;
    message.src = object.src?.map((e) => KeyValueWithKind.fromPartial(e)) || [];
    message.dst = object.dst?.map((e) => KeyValueWithKind.fromPartial(e)) || [];
    return message;
  },
};

export interface AccessGroupService {
  Update(request: DeepPartial<AddGroupRequest>, metadata?: grpc.Metadata): Promise<AddGroupResponse>;
}

export class AccessGroupServiceClientImpl implements AccessGroupService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Update = this.Update.bind(this);
  }

  Update(request: DeepPartial<AddGroupRequest>, metadata?: grpc.Metadata): Promise<AddGroupResponse> {
    return this.rpc.unary(AccessGroupServiceUpdateDesc, AddGroupRequest.fromPartial(request), metadata);
  }
}

export const AccessGroupServiceDesc = { serviceName: "protos.AccessGroupService" };

export const AccessGroupServiceUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: AccessGroupServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AddGroupResponse.decode(data);
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
