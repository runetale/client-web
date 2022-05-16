/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Empty } from "../../../google/protobuf/empty";
import { BrowserHeaders } from "browser-headers";
import { share } from "rxjs/operators";

export const protobufPackage = "protos";

export enum NegotiationType {
  OFFER = 0,
  ANSWER = 1,
  CANDIDATE = 2,
  UNRECOGNIZED = -1,
}

export function negotiationTypeFromJSON(object: any): NegotiationType {
  switch (object) {
    case 0:
    case "OFFER":
      return NegotiationType.OFFER;
    case 1:
    case "ANSWER":
      return NegotiationType.ANSWER;
    case 2:
    case "CANDIDATE":
      return NegotiationType.CANDIDATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NegotiationType.UNRECOGNIZED;
  }
}

export function negotiationTypeToJSON(object: NegotiationType): string {
  switch (object) {
    case NegotiationType.OFFER:
      return "OFFER";
    case NegotiationType.ANSWER:
      return "ANSWER";
    case NegotiationType.CANDIDATE:
      return "CANDIDATE";
    default:
      return "UNKNOWN";
  }
}

export interface NegotiationRequest {
  type: NegotiationType;
}

export interface NegotiationResponse {
  type: NegotiationType;
  isCreate: boolean;
}

function createBaseNegotiationRequest(): NegotiationRequest {
  return { type: 0 };
}

export const NegotiationRequest = {
  encode(
    message: NegotiationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NegotiationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNegotiationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NegotiationRequest {
    return {
      type: isSet(object.type) ? negotiationTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: NegotiationRequest): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = negotiationTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NegotiationRequest>, I>>(
    object: I
  ): NegotiationRequest {
    const message = createBaseNegotiationRequest();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseNegotiationResponse(): NegotiationResponse {
  return { type: 0, isCreate: false };
}

export const NegotiationResponse = {
  encode(
    message: NegotiationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.isCreate === true) {
      writer.uint32(16).bool(message.isCreate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NegotiationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNegotiationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.isCreate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NegotiationResponse {
    return {
      type: isSet(object.type) ? negotiationTypeFromJSON(object.type) : 0,
      isCreate: isSet(object.isCreate) ? Boolean(object.isCreate) : false,
    };
  },

  toJSON(message: NegotiationResponse): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = negotiationTypeToJSON(message.type));
    message.isCreate !== undefined && (obj.isCreate = message.isCreate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NegotiationResponse>, I>>(
    object: I
  ): NegotiationResponse {
    const message = createBaseNegotiationResponse();
    message.type = object.type ?? 0;
    message.isCreate = object.isCreate ?? false;
    return message;
  },
};

export interface Negotiation {
  Offer(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Answer(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Candidate(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  StartConnect(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Observable<NegotiationResponse>;
}

export class NegotiationClientImpl implements Negotiation {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Offer = this.Offer.bind(this);
    this.Answer = this.Answer.bind(this);
    this.Candidate = this.Candidate.bind(this);
    this.StartConnect = this.StartConnect.bind(this);
  }

  Offer(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      NegotiationOfferDesc,
      NegotiationRequest.fromPartial(request),
      metadata
    );
  }

  Answer(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      NegotiationAnswerDesc,
      NegotiationRequest.fromPartial(request),
      metadata
    );
  }

  Candidate(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      NegotiationCandidateDesc,
      NegotiationRequest.fromPartial(request),
      metadata
    );
  }

  StartConnect(
    request: DeepPartial<NegotiationRequest>,
    metadata?: grpc.Metadata
  ): Observable<NegotiationResponse> {
    return this.rpc.invoke(
      NegotiationStartConnectDesc,
      NegotiationRequest.fromPartial(request),
      metadata
    );
  }
}

export const NegotiationDesc = {
  serviceName: "protos.Negotiation",
};

export const NegotiationOfferDesc: UnaryMethodDefinitionish = {
  methodName: "Offer",
  service: NegotiationDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return NegotiationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const NegotiationAnswerDesc: UnaryMethodDefinitionish = {
  methodName: "Answer",
  service: NegotiationDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return NegotiationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const NegotiationCandidateDesc: UnaryMethodDefinitionish = {
  methodName: "Candidate",
  service: NegotiationDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return NegotiationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const NegotiationStartConnectDesc: UnaryMethodDefinitionish = {
  methodName: "StartConnect",
  service: NegotiationDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return NegotiationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...NegotiationResponse.decode(data),
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
