import * as jspb from 'google-protobuf'



export class SignInRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): SignInRequest;

  getEmail(): string;
  setEmail(value: string): SignInRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
  static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInRequest;
  static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
  export type AsObject = {
    userid: string,
    email: string,
  }
}

export class SignInResponse extends jspb.Message {
  getIsfirst(): boolean;
  setIsfirst(value: boolean): SignInResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
  static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInResponse;
  static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
  export type AsObject = {
    isfirst: boolean,
  }
}

export class CreatePeerRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): CreatePeerRequest;

  getEmail(): string;
  setEmail(value: string): CreatePeerRequest;

  getClientwgpubkey(): string;
  setClientwgpubkey(value: string): CreatePeerRequest;

  getClientmachinekey(): string;
  setClientmachinekey(value: string): CreatePeerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePeerRequest): CreatePeerRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePeerRequest;
  static deserializeBinaryFromReader(message: CreatePeerRequest, reader: jspb.BinaryReader): CreatePeerRequest;
}

export namespace CreatePeerRequest {
  export type AsObject = {
    userid: string,
    email: string,
    clientwgpubkey: string,
    clientmachinekey: string,
  }
}

export class CreatePeerResponse extends jspb.Message {
  getIp(): string;
  setIp(value: string): CreatePeerResponse;

  getCidr(): string;
  setCidr(value: string): CreatePeerResponse;

  getSignalserverhost(): string;
  setSignalserverhost(value: string): CreatePeerResponse;

  getSignalserverport(): number;
  setSignalserverport(value: number): CreatePeerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePeerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePeerResponse): CreatePeerResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePeerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePeerResponse;
  static deserializeBinaryFromReader(message: CreatePeerResponse, reader: jspb.BinaryReader): CreatePeerResponse;
}

export namespace CreatePeerResponse {
  export type AsObject = {
    ip: string,
    cidr: string,
    signalserverhost: string,
    signalserverport: number,
  }
}

