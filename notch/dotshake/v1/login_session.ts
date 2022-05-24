/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { BrowserHeaders } from "browser-headers";
import { share } from "rxjs/operators";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

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

export interface LoginSessionService {
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

export class LoginSessionServiceClientImpl implements LoginSessionService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.VerifyPeerLoginSession = this.VerifyPeerLoginSession.bind(this);
    this.StreamPeerLoginSession = this.StreamPeerLoginSession.bind(this);
  }

  VerifyPeerLoginSession(
    request: DeepPartial<VerifyPeerLoginSessionRequest>,
    metadata?: grpc.Metadata
  ): Promise<PeerLoginSessionResponse> {
    return this.rpc.unary(
      LoginSessionServiceVerifyPeerLoginSessionDesc,
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

export const LoginSessionServiceDesc = {
  serviceName: "protos.LoginSessionService",
};

export const LoginSessionServiceVerifyPeerLoginSessionDesc: UnaryMethodDefinitionish =
  {
    methodName: "VerifyPeerLoginSession",
    service: LoginSessionServiceDesc,
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
