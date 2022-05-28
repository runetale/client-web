/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Empty } from "../../../google/protobuf/empty";
import { BrowserHeaders } from "browser-headers";
import { share } from "rxjs/operators";

export const protobufPackage = "protos";

export interface GetMachineResponse {
  isRegistered: boolean;
  loginUrl: string;
  ip: string;
  cidr: string;
  signalHost: string;
  signalPort: number;
}

export interface SyncMachinesResponse {
  rtcConfig: RtcConfig | undefined;
  isEmpty: boolean;
  remotePeers: RemotePeer[];
}

export interface RemotePeer {
  clientMachineKey: string;
  allowedIPs: string[];
}

export interface StunHost {
  url: string;
  username: string;
  password: string;
}

export interface TurnHost {
  url: string;
  username: string;
  password: string;
  credentialsTTL: string;
  secret: string;
  timeBasedCredentials: boolean;
}

export interface RtcConfig {
  turnHost: TurnHost | undefined;
  stunHost: StunHost | undefined;
}

function createBaseGetMachineResponse(): GetMachineResponse {
  return {
    isRegistered: false,
    loginUrl: "",
    ip: "",
    cidr: "",
    signalHost: "",
    signalPort: 0,
  };
}

export const GetMachineResponse = {
  encode(
    message: GetMachineResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isRegistered === true) {
      writer.uint32(8).bool(message.isRegistered);
    }
    if (message.loginUrl !== "") {
      writer.uint32(18).string(message.loginUrl);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(34).string(message.cidr);
    }
    if (message.signalHost !== "") {
      writer.uint32(42).string(message.signalHost);
    }
    if (message.signalPort !== 0) {
      writer.uint32(48).uint64(message.signalPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMachineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMachineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isRegistered = reader.bool();
          break;
        case 2:
          message.loginUrl = reader.string();
          break;
        case 3:
          message.ip = reader.string();
          break;
        case 4:
          message.cidr = reader.string();
          break;
        case 5:
          message.signalHost = reader.string();
          break;
        case 6:
          message.signalPort = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMachineResponse {
    return {
      isRegistered: isSet(object.isRegistered)
        ? Boolean(object.isRegistered)
        : false,
      loginUrl: isSet(object.loginUrl) ? String(object.loginUrl) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      cidr: isSet(object.cidr) ? String(object.cidr) : "",
      signalHost: isSet(object.signalHost) ? String(object.signalHost) : "",
      signalPort: isSet(object.signalPort) ? Number(object.signalPort) : 0,
    };
  },

  toJSON(message: GetMachineResponse): unknown {
    const obj: any = {};
    message.isRegistered !== undefined &&
      (obj.isRegistered = message.isRegistered);
    message.loginUrl !== undefined && (obj.loginUrl = message.loginUrl);
    message.ip !== undefined && (obj.ip = message.ip);
    message.cidr !== undefined && (obj.cidr = message.cidr);
    message.signalHost !== undefined && (obj.signalHost = message.signalHost);
    message.signalPort !== undefined &&
      (obj.signalPort = Math.round(message.signalPort));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMachineResponse>, I>>(
    object: I
  ): GetMachineResponse {
    const message = createBaseGetMachineResponse();
    message.isRegistered = object.isRegistered ?? false;
    message.loginUrl = object.loginUrl ?? "";
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.signalHost = object.signalHost ?? "";
    message.signalPort = object.signalPort ?? 0;
    return message;
  },
};

function createBaseSyncMachinesResponse(): SyncMachinesResponse {
  return { rtcConfig: undefined, isEmpty: false, remotePeers: [] };
}

export const SyncMachinesResponse = {
  encode(
    message: SyncMachinesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rtcConfig !== undefined) {
      RtcConfig.encode(message.rtcConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.isEmpty === true) {
      writer.uint32(16).bool(message.isEmpty);
    }
    for (const v of message.remotePeers) {
      RemotePeer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SyncMachinesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncMachinesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rtcConfig = RtcConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.isEmpty = reader.bool();
          break;
        case 3:
          message.remotePeers.push(RemotePeer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncMachinesResponse {
    return {
      rtcConfig: isSet(object.rtcConfig)
        ? RtcConfig.fromJSON(object.rtcConfig)
        : undefined,
      isEmpty: isSet(object.isEmpty) ? Boolean(object.isEmpty) : false,
      remotePeers: Array.isArray(object?.remotePeers)
        ? object.remotePeers.map((e: any) => RemotePeer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SyncMachinesResponse): unknown {
    const obj: any = {};
    message.rtcConfig !== undefined &&
      (obj.rtcConfig = message.rtcConfig
        ? RtcConfig.toJSON(message.rtcConfig)
        : undefined);
    message.isEmpty !== undefined && (obj.isEmpty = message.isEmpty);
    if (message.remotePeers) {
      obj.remotePeers = message.remotePeers.map((e) =>
        e ? RemotePeer.toJSON(e) : undefined
      );
    } else {
      obj.remotePeers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SyncMachinesResponse>, I>>(
    object: I
  ): SyncMachinesResponse {
    const message = createBaseSyncMachinesResponse();
    message.rtcConfig =
      object.rtcConfig !== undefined && object.rtcConfig !== null
        ? RtcConfig.fromPartial(object.rtcConfig)
        : undefined;
    message.isEmpty = object.isEmpty ?? false;
    message.remotePeers =
      object.remotePeers?.map((e) => RemotePeer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRemotePeer(): RemotePeer {
  return { clientMachineKey: "", allowedIPs: [] };
}

export const RemotePeer = {
  encode(
    message: RemotePeer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientMachineKey !== "") {
      writer.uint32(10).string(message.clientMachineKey);
    }
    for (const v of message.allowedIPs) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemotePeer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemotePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientMachineKey = reader.string();
          break;
        case 2:
          message.allowedIPs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemotePeer {
    return {
      clientMachineKey: isSet(object.clientMachineKey)
        ? String(object.clientMachineKey)
        : "",
      allowedIPs: Array.isArray(object?.allowedIPs)
        ? object.allowedIPs.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: RemotePeer): unknown {
    const obj: any = {};
    message.clientMachineKey !== undefined &&
      (obj.clientMachineKey = message.clientMachineKey);
    if (message.allowedIPs) {
      obj.allowedIPs = message.allowedIPs.map((e) => e);
    } else {
      obj.allowedIPs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemotePeer>, I>>(
    object: I
  ): RemotePeer {
    const message = createBaseRemotePeer();
    message.clientMachineKey = object.clientMachineKey ?? "";
    message.allowedIPs = object.allowedIPs?.map((e) => e) || [];
    return message;
  },
};

function createBaseStunHost(): StunHost {
  return { url: "", username: "", password: "" };
}

export const StunHost = {
  encode(
    message: StunHost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StunHost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStunHost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StunHost {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: StunHost): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StunHost>, I>>(object: I): StunHost {
    const message = createBaseStunHost();
    message.url = object.url ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseTurnHost(): TurnHost {
  return {
    url: "",
    username: "",
    password: "",
    credentialsTTL: "",
    secret: "",
    timeBasedCredentials: false,
  };
}

export const TurnHost = {
  encode(
    message: TurnHost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.credentialsTTL !== "") {
      writer.uint32(34).string(message.credentialsTTL);
    }
    if (message.secret !== "") {
      writer.uint32(42).string(message.secret);
    }
    if (message.timeBasedCredentials === true) {
      writer.uint32(48).bool(message.timeBasedCredentials);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TurnHost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTurnHost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.password = reader.string();
          break;
        case 4:
          message.credentialsTTL = reader.string();
          break;
        case 5:
          message.secret = reader.string();
          break;
        case 6:
          message.timeBasedCredentials = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TurnHost {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      credentialsTTL: isSet(object.credentialsTTL)
        ? String(object.credentialsTTL)
        : "",
      secret: isSet(object.secret) ? String(object.secret) : "",
      timeBasedCredentials: isSet(object.timeBasedCredentials)
        ? Boolean(object.timeBasedCredentials)
        : false,
    };
  },

  toJSON(message: TurnHost): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.credentialsTTL !== undefined &&
      (obj.credentialsTTL = message.credentialsTTL);
    message.secret !== undefined && (obj.secret = message.secret);
    message.timeBasedCredentials !== undefined &&
      (obj.timeBasedCredentials = message.timeBasedCredentials);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TurnHost>, I>>(object: I): TurnHost {
    const message = createBaseTurnHost();
    message.url = object.url ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.credentialsTTL = object.credentialsTTL ?? "";
    message.secret = object.secret ?? "";
    message.timeBasedCredentials = object.timeBasedCredentials ?? false;
    return message;
  },
};

function createBaseRtcConfig(): RtcConfig {
  return { turnHost: undefined, stunHost: undefined };
}

export const RtcConfig = {
  encode(
    message: RtcConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.turnHost !== undefined) {
      TurnHost.encode(message.turnHost, writer.uint32(10).fork()).ldelim();
    }
    if (message.stunHost !== undefined) {
      StunHost.encode(message.stunHost, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RtcConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRtcConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.turnHost = TurnHost.decode(reader, reader.uint32());
          break;
        case 2:
          message.stunHost = StunHost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RtcConfig {
    return {
      turnHost: isSet(object.turnHost)
        ? TurnHost.fromJSON(object.turnHost)
        : undefined,
      stunHost: isSet(object.stunHost)
        ? StunHost.fromJSON(object.stunHost)
        : undefined,
    };
  },

  toJSON(message: RtcConfig): unknown {
    const obj: any = {};
    message.turnHost !== undefined &&
      (obj.turnHost = message.turnHost
        ? TurnHost.toJSON(message.turnHost)
        : undefined);
    message.stunHost !== undefined &&
      (obj.stunHost = message.stunHost
        ? StunHost.toJSON(message.stunHost)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RtcConfig>, I>>(
    object: I
  ): RtcConfig {
    const message = createBaseRtcConfig();
    message.turnHost =
      object.turnHost !== undefined && object.turnHost !== null
        ? TurnHost.fromPartial(object.turnHost)
        : undefined;
    message.stunHost =
      object.stunHost !== undefined && object.stunHost !== null
        ? StunHost.fromPartial(object.stunHost)
        : undefined;
    return message;
  },
};

export interface MachineService {
  GetMachine(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachineResponse>;
  SyncMachines(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Observable<SyncMachinesResponse>;
}

export class MachineServiceClientImpl implements MachineService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMachine = this.GetMachine.bind(this);
    this.SyncMachines = this.SyncMachines.bind(this);
  }

  GetMachine(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachineResponse> {
    return this.rpc.unary(
      MachineServiceGetMachineDesc,
      Empty.fromPartial(request),
      metadata
    );
  }

  SyncMachines(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Observable<SyncMachinesResponse> {
    return this.rpc.invoke(
      MachineServiceSyncMachinesDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const MachineServiceDesc = {
  serviceName: "protos.MachineService",
};

export const MachineServiceGetMachineDesc: UnaryMethodDefinitionish = {
  methodName: "GetMachine",
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
      return {
        ...GetMachineResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MachineServiceSyncMachinesDesc: UnaryMethodDefinitionish = {
  methodName: "SyncMachines",
  service: MachineServiceDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SyncMachinesResponse.decode(data),
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
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
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

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any> {
    // Status Response Codes (https://developers.google.com/maps-booking/reference/grpc-api/status_codes)
    const upStreamCodes = [2, 4, 8, 9, 10, 13, 14, 15];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          transport: this.options.streamingTransport || this.options.transport,
          metadata: maybeCombinedMetadata,
          debug: this.options.debug,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              observer.error(new Error(`Error ${code} ${message}`));
            }
          },
        });
        observer.add(() => client.close());
      };
      upStream();
    }).pipe(share());
  }
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
