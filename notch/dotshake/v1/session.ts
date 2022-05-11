/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "protos";

export interface SignInRequest {
  /** auth0のuserID */
  userID: string;
  /** auth0で登録したメールアドレス */
  email: string;
}

export interface SignInResponse {
  /** 初回ログインがどうかを判断するフラグ */
  isFirst: boolean;
}

export interface CreatePeerRequest {
  /** auth0のuserID */
  userID: string;
  /** auth0で登録したメールアドレス */
  email: string;
  /** クライアントで生成されるWireGuardPublicKey */
  clientWgPubKey: string;
  /** 永続的に保持される端末固有のキー */
  clientMachineKey: string;
}

export interface CreatePeerResponse {
  /** 使用するwireguardのIPアドレス。　とりあえず被らない用に自動で付与する */
  ip: string;
  /** 使用するwireguardのIPアドレスのCIDR。とりあえず/24がデフォルトで返ってくる */
  cidr: string;
  /** UDP Hole Punchingするために必要なSignalServerのホストURL */
  signalServerHost: string;
  signalServerPort: number;
}

function createBaseSignInRequest(): SignInRequest {
  return { userID: "", email: "" };
}

export const SignInRequest = {
  encode(
    message: SignInRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userID !== "") {
      writer.uint32(10).string(message.userID);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
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
          message.userID = reader.string();
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

  fromJSON(object: any): SignInRequest {
    return {
      userID: isSet(object.userID) ? String(object.userID) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: SignInRequest): unknown {
    const obj: any = {};
    message.userID !== undefined && (obj.userID = message.userID);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInRequest>, I>>(
    object: I
  ): SignInRequest {
    const message = createBaseSignInRequest();
    message.userID = object.userID ?? "";
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

function createBaseCreatePeerRequest(): CreatePeerRequest {
  return { userID: "", email: "", clientWgPubKey: "", clientMachineKey: "" };
}

export const CreatePeerRequest = {
  encode(
    message: CreatePeerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userID !== "") {
      writer.uint32(10).string(message.userID);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.clientWgPubKey !== "") {
      writer.uint32(26).string(message.clientWgPubKey);
    }
    if (message.clientMachineKey !== "") {
      writer.uint32(34).string(message.clientMachineKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePeerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userID = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.clientWgPubKey = reader.string();
          break;
        case 4:
          message.clientMachineKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePeerRequest {
    return {
      userID: isSet(object.userID) ? String(object.userID) : "",
      email: isSet(object.email) ? String(object.email) : "",
      clientWgPubKey: isSet(object.clientWgPubKey)
        ? String(object.clientWgPubKey)
        : "",
      clientMachineKey: isSet(object.clientMachineKey)
        ? String(object.clientMachineKey)
        : "",
    };
  },

  toJSON(message: CreatePeerRequest): unknown {
    const obj: any = {};
    message.userID !== undefined && (obj.userID = message.userID);
    message.email !== undefined && (obj.email = message.email);
    message.clientWgPubKey !== undefined &&
      (obj.clientWgPubKey = message.clientWgPubKey);
    message.clientMachineKey !== undefined &&
      (obj.clientMachineKey = message.clientMachineKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePeerRequest>, I>>(
    object: I
  ): CreatePeerRequest {
    const message = createBaseCreatePeerRequest();
    message.userID = object.userID ?? "";
    message.email = object.email ?? "";
    message.clientWgPubKey = object.clientWgPubKey ?? "";
    message.clientMachineKey = object.clientMachineKey ?? "";
    return message;
  },
};

function createBaseCreatePeerResponse(): CreatePeerResponse {
  return { ip: "", cidr: "", signalServerHost: "", signalServerPort: 0 };
}

export const CreatePeerResponse = {
  encode(
    message: CreatePeerResponse,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePeerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePeerResponse();
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

  fromJSON(object: any): CreatePeerResponse {
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

  toJSON(message: CreatePeerResponse): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.cidr !== undefined && (obj.cidr = message.cidr);
    message.signalServerHost !== undefined &&
      (obj.signalServerHost = message.signalServerHost);
    message.signalServerPort !== undefined &&
      (obj.signalServerPort = Math.round(message.signalServerPort));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePeerResponse>, I>>(
    object: I
  ): CreatePeerResponse {
    const message = createBaseCreatePeerResponse();
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.signalServerHost = object.signalServerHost ?? "";
    message.signalServerPort = object.signalServerPort ?? 0;
    return message;
  },
};

export interface SessionService {
  /** Auth0ログイン後、/adminにリダイレクトした時に叩かれる */
  SignIn(request: SignInRequest): Promise<SignInResponse>;
  /**
   * /adminにリダイレクトし、SignInのRPCを叩いた後にdotshakeで叩かれるRPC
   * `dotshake up` or `dotshake login`
   */
  CreatePeer(request: CreatePeerRequest): Promise<CreatePeerResponse>;
}

export class SessionServiceClientImpl implements SessionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SignIn = this.SignIn.bind(this);
    this.CreatePeer = this.CreatePeer.bind(this);
  }
  SignIn(request: SignInRequest): Promise<SignInResponse> {
    const data = SignInRequest.encode(request).finish();
    const promise = this.rpc.request("protos.SessionService", "SignIn", data);
    return promise.then((data) => SignInResponse.decode(new _m0.Reader(data)));
  }

  CreatePeer(request: CreatePeerRequest): Promise<CreatePeerResponse> {
    const data = CreatePeerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "protos.SessionService",
      "CreatePeer",
      data
    );
    return promise.then((data) =>
      CreatePeerResponse.decode(new _m0.Reader(data))
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
