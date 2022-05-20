/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { BrowserHeaders } from "browser-headers";
import { share } from "rxjs/operators";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface SignInRequest {
  /** auth0で登録したメールアドレス */
  email: string;
}

export interface SignInResponse {
  /** 初回ログインがどうかを判断するフラグ */
  isFirst: boolean;
}

export interface SignUpRequest {
  /** auth0のuserID */
  userID: string;
  /** 端末の名前 */
  host: string;
  /** 端末のOS */
  os: string;
}

export interface SignUpResponse {
  /** 使用するwireguardのIPアドレス */
  ip: string;
  /** 使用するwireguardのIPアドレスのCIDR。今は/24がデフォルトで返ってくる */
  cidr: string;
  /** UDP Hole Punchingするために必要なSignalServerのホストURL */
  signalServerHost: string;
  signalServerPort: number;
}

export interface VerifyPeerLoginSessionRequest {
  /** auth0のuserID */
  userID: string;
  /** jwtの中に入っているユニークなid */
  uuid: string;
}

export interface PeerLoginSessionResponse {
  /** 使用するwireguardのIPアドレス */
  ip: string;
  /** 端末の名前 */
  host: string;
  /** 端末のOS */
  os: string;
}

function createBaseSignInRequest(): SignInRequest {
  return { email: "" };
}

export const SignInRequest = {
  encode(
    message: SignInRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: SignInRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInRequest>, I>>(
    object: I
  ): SignInRequest {
    const message = createBaseSignInRequest();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseSignInResponse(): SignInResponse {
  return { isFirst: false };
}

export const SignInResponse = {
  encode(
    message: SignInResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isFirst === true) {
      writer.uint32(8).bool(message.isFirst);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFirst = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInResponse {
    return {
      isFirst: isSet(object.isFirst) ? Boolean(object.isFirst) : false,
    };
  },

  toJSON(message: SignInResponse): unknown {
    const obj: any = {};
    message.isFirst !== undefined && (obj.isFirst = message.isFirst);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInResponse>, I>>(
    object: I
  ): SignInResponse {
    const message = createBaseSignInResponse();
    message.isFirst = object.isFirst ?? false;
    return message;
  },
};

function createBaseSignUpRequest(): SignUpRequest {
  return { userID: "", host: "", os: "" };
}

export const SignUpRequest = {
  encode(
    message: SignUpRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userID !== "") {
      writer.uint32(10).string(message.userID);
    }
    if (message.host !== "") {
      writer.uint32(18).string(message.host);
    }
    if (message.os !== "") {
      writer.uint32(26).string(message.os);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userID = reader.string();
          break;
        case 2:
          message.host = reader.string();
          break;
        case 3:
          message.os = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignUpRequest {
    return {
      userID: isSet(object.userID) ? String(object.userID) : "",
      host: isSet(object.host) ? String(object.host) : "",
      os: isSet(object.os) ? String(object.os) : "",
    };
  },

  toJSON(message: SignUpRequest): unknown {
    const obj: any = {};
    message.userID !== undefined && (obj.userID = message.userID);
    message.host !== undefined && (obj.host = message.host);
    message.os !== undefined && (obj.os = message.os);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignUpRequest>, I>>(
    object: I
  ): SignUpRequest {
    const message = createBaseSignUpRequest();
    message.userID = object.userID ?? "";
    message.host = object.host ?? "";
    message.os = object.os ?? "";
    return message;
  },
};

function createBaseSignUpResponse(): SignUpResponse {
  return { ip: "", cidr: "", signalServerHost: "", signalServerPort: 0 };
}

export const SignUpResponse = {
  encode(
    message: SignUpResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(18).string(message.cidr);
    }
    if (message.signalServerHost !== "") {
      writer.uint32(26).string(message.signalServerHost);
    }
    if (message.signalServerPort !== 0) {
      writer.uint32(32).uint64(message.signalServerPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.cidr = reader.string();
          break;
        case 3:
          message.signalServerHost = reader.string();
          break;
        case 4:
          message.signalServerPort = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignUpResponse {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      cidr: isSet(object.cidr) ? String(object.cidr) : "",
      signalServerHost: isSet(object.signalServerHost)
        ? String(object.signalServerHost)
        : "",
      signalServerPort: isSet(object.signalServerPort)
        ? Number(object.signalServerPort)
        : 0,
    };
  },

  toJSON(message: SignUpResponse): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.cidr !== undefined && (obj.cidr = message.cidr);
    message.signalServerHost !== undefined &&
      (obj.signalServerHost = message.signalServerHost);
    message.signalServerPort !== undefined &&
      (obj.signalServerPort = Math.round(message.signalServerPort));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignUpResponse>, I>>(
    object: I
  ): SignUpResponse {
    const message = createBaseSignUpResponse();
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.signalServerHost = object.signalServerHost ?? "";
    message.signalServerPort = object.signalServerPort ?? 0;
    return message;
  },
};

function createBaseVerifyPeerLoginSessionRequest(): VerifyPeerLoginSessionRequest {
  return { userID: "", uuid: "" };
}

export const VerifyPeerLoginSessionRequest = {
  encode(
    message: VerifyPeerLoginSessionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userID !== "") {
      writer.uint32(10).string(message.userID);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VerifyPeerLoginSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPeerLoginSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userID = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyPeerLoginSessionRequest {
    return {
      userID: isSet(object.userID) ? String(object.userID) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
    };
  },

  toJSON(message: VerifyPeerLoginSessionRequest): unknown {
    const obj: any = {};
    message.userID !== undefined && (obj.userID = message.userID);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerifyPeerLoginSessionRequest>, I>>(
    object: I
  ): VerifyPeerLoginSessionRequest {
    const message = createBaseVerifyPeerLoginSessionRequest();
    message.userID = object.userID ?? "";
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBasePeerLoginSessionResponse(): PeerLoginSessionResponse {
  return { ip: "", host: "", os: "" };
}

export const PeerLoginSessionResponse = {
  encode(
    message: PeerLoginSessionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.host !== "") {
      writer.uint32(18).string(message.host);
    }
    if (message.os !== "") {
      writer.uint32(26).string(message.os);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PeerLoginSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerLoginSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.host = reader.string();
          break;
        case 3:
          message.os = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeerLoginSessionResponse {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      host: isSet(object.host) ? String(object.host) : "",
      os: isSet(object.os) ? String(object.os) : "",
    };
  },

  toJSON(message: PeerLoginSessionResponse): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.host !== undefined && (obj.host = message.host);
    message.os !== undefined && (obj.os = message.os);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerLoginSessionResponse>, I>>(
    object: I
  ): PeerLoginSessionResponse {
    const message = createBasePeerLoginSessionResponse();
    message.ip = object.ip ?? "";
    message.host = object.host ?? "";
    message.os = object.os ?? "";
    return message;
  },
};

export interface SessionService {
  /** Auth0ログイン後、/adminにリダイレクトした時に叩かれる */
  SignIn(
    request: DeepPartial<SignInRequest>,
    metadata?: grpc.Metadata
  ): Promise<SignInResponse>;
  /**
   * /adminにリダイレクトし、SignInのRPCを叩いた後にdotshake側で叩くRPC
   * Webからログインせずにdotshakeから直接叩く場合(ユーザーがまだ作られていない場合)はユーザーの作成、つまりSignInを行う
   */
  SignUp(
    request: DeepPartial<SignUpRequest>,
    metadata?: grpc.Metadata
  ): Promise<SignUpResponse>;
  /**
   * dotshakeのクライアントからログインするときに発行されたURLを踏んだ時に叩かれるRPC
   * クライアント側でTokenの検証を行った後に叩く
   */
  VerifyPeerLoginSession(
    request: DeepPartial<VerifyPeerLoginSessionRequest>,
    metadata?: grpc.Metadata
  ): Promise<PeerLoginSessionResponse>;
  /** dotshakeクライアントからStream接続を行い立ち上げ完了を受け取る */
  StreamPeerLoginSession(
    request: Observable<DeepPartial<Empty>>,
    metadata?: grpc.Metadata
  ): Observable<PeerLoginSessionResponse>;
}

export class SessionServiceClientImpl implements SessionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SignIn = this.SignIn.bind(this);
    this.SignUp = this.SignUp.bind(this);
    this.VerifyPeerLoginSession = this.VerifyPeerLoginSession.bind(this);
    this.StreamPeerLoginSession = this.StreamPeerLoginSession.bind(this);
  }

  SignIn(
    request: DeepPartial<SignInRequest>,
    metadata?: grpc.Metadata
  ): Promise<SignInResponse> {
    return this.rpc.unary(
      SessionServiceSignInDesc,
      SignInRequest.fromPartial(request),
      metadata
    );
  }

  SignUp(
    request: DeepPartial<SignUpRequest>,
    metadata?: grpc.Metadata
  ): Promise<SignUpResponse> {
    return this.rpc.unary(
      SessionServiceSignUpDesc,
      SignUpRequest.fromPartial(request),
      metadata
    );
  }

  VerifyPeerLoginSession(
    request: DeepPartial<VerifyPeerLoginSessionRequest>,
    metadata?: grpc.Metadata
  ): Promise<PeerLoginSessionResponse> {
    return this.rpc.unary(
      SessionServiceVerifyPeerLoginSessionDesc,
      VerifyPeerLoginSessionRequest.fromPartial(request),
      metadata
    );
  }

  StreamPeerLoginSession(
    request: Observable<DeepPartial<Empty>>,
    metadata?: grpc.Metadata
  ): Observable<PeerLoginSessionResponse> {
    throw new Error("ts-proto does not yet support client streaming!");
  }
}

export const SessionServiceDesc = {
  serviceName: "protos.SessionService",
};

export const SessionServiceSignInDesc: UnaryMethodDefinitionish = {
  methodName: "SignIn",
  service: SessionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SignInRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SignInResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionServiceSignUpDesc: UnaryMethodDefinitionish = {
  methodName: "SignUp",
  service: SessionServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SignUpRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SignUpResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionServiceVerifyPeerLoginSessionDesc: UnaryMethodDefinitionish =
  {
    methodName: "VerifyPeerLoginSession",
    service: SessionServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return VerifyPeerLoginSessionRequest.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...PeerLoginSessionResponse.decode(data),
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
