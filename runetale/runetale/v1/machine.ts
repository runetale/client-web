/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface SyncMachinesResponse {
  isEmpty: boolean;
  remotePeers: RemotePeer[];
  /** your ip */
  ip: string;
  /** your cidr */
  cidr: string;
}

export interface RemotePeer {
  remoteClientMachineKey: string;
  remoteWgPubKey: string;
  allowedIPs: string[];
}

function createBaseSyncMachinesResponse(): SyncMachinesResponse {
  return { isEmpty: false, remotePeers: [], ip: "", cidr: "" };
}

export const SyncMachinesResponse = {
  encode(message: SyncMachinesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEmpty !== false) {
      writer.uint32(8).bool(message.isEmpty);
    }
    for (const v of message.remotePeers) {
      RemotePeer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(34).string(message.cidr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncMachinesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncMachinesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isEmpty = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remotePeers.push(RemotePeer.decode(reader, reader.uint32()));
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

          message.cidr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SyncMachinesResponse {
    return {
      isEmpty: isSet(object.isEmpty) ? globalThis.Boolean(object.isEmpty) : false,
      remotePeers: globalThis.Array.isArray(object?.remotePeers)
        ? object.remotePeers.map((e: any) => RemotePeer.fromJSON(e))
        : [],
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      cidr: isSet(object.cidr) ? globalThis.String(object.cidr) : "",
    };
  },

  toJSON(message: SyncMachinesResponse): unknown {
    const obj: any = {};
    if (message.isEmpty !== false) {
      obj.isEmpty = message.isEmpty;
    }
    if (message.remotePeers?.length) {
      obj.remotePeers = message.remotePeers.map((e) => RemotePeer.toJSON(e));
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.cidr !== "") {
      obj.cidr = message.cidr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncMachinesResponse>, I>>(base?: I): SyncMachinesResponse {
    return SyncMachinesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncMachinesResponse>, I>>(object: I): SyncMachinesResponse {
    const message = createBaseSyncMachinesResponse();
    message.isEmpty = object.isEmpty ?? false;
    message.remotePeers = object.remotePeers?.map((e) => RemotePeer.fromPartial(e)) || [];
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    return message;
  },
};

function createBaseRemotePeer(): RemotePeer {
  return { remoteClientMachineKey: "", remoteWgPubKey: "", allowedIPs: [] };
}

export const RemotePeer = {
  encode(message: RemotePeer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remoteClientMachineKey !== "") {
      writer.uint32(10).string(message.remoteClientMachineKey);
    }
    if (message.remoteWgPubKey !== "") {
      writer.uint32(18).string(message.remoteWgPubKey);
    }
    for (const v of message.allowedIPs) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemotePeer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemotePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.remoteClientMachineKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteWgPubKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowedIPs.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemotePeer {
    return {
      remoteClientMachineKey: isSet(object.remoteClientMachineKey)
        ? globalThis.String(object.remoteClientMachineKey)
        : "",
      remoteWgPubKey: isSet(object.remoteWgPubKey) ? globalThis.String(object.remoteWgPubKey) : "",
      allowedIPs: globalThis.Array.isArray(object?.allowedIPs)
        ? object.allowedIPs.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RemotePeer): unknown {
    const obj: any = {};
    if (message.remoteClientMachineKey !== "") {
      obj.remoteClientMachineKey = message.remoteClientMachineKey;
    }
    if (message.remoteWgPubKey !== "") {
      obj.remoteWgPubKey = message.remoteWgPubKey;
    }
    if (message.allowedIPs?.length) {
      obj.allowedIPs = message.allowedIPs;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemotePeer>, I>>(base?: I): RemotePeer {
    return RemotePeer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemotePeer>, I>>(object: I): RemotePeer {
    const message = createBaseRemotePeer();
    message.remoteClientMachineKey = object.remoteClientMachineKey ?? "";
    message.remoteWgPubKey = object.remoteWgPubKey ?? "";
    message.allowedIPs = object.allowedIPs?.map((e) => e) || [];
    return message;
  },
};

export interface MachineService {
  SyncRemoteMachinesConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<SyncMachinesResponse>;
}

export class MachineServiceClientImpl implements MachineService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SyncRemoteMachinesConfig = this.SyncRemoteMachinesConfig.bind(this);
  }

  SyncRemoteMachinesConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<SyncMachinesResponse> {
    return this.rpc.unary(MachineServiceSyncRemoteMachinesConfigDesc, Empty.fromPartial(request), metadata);
  }
}

export const MachineServiceDesc = { serviceName: "protos.MachineService" };

export const MachineServiceSyncRemoteMachinesConfigDesc: UnaryMethodDefinitionish = {
  methodName: "SyncRemoteMachinesConfig",
  service: MachineServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SyncMachinesResponse.decode(data);
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
