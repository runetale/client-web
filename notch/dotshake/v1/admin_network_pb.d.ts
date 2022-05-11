import * as jspb from 'google-protobuf'



export class CreateDefaultAdminNetworkRequest extends jspb.Message {
  getCompanyname(): string;
  setCompanyname(value: string): CreateDefaultAdminNetworkRequest;

  getUserid(): string;
  setUserid(value: string): CreateDefaultAdminNetworkRequest;

  getEmail(): string;
  setEmail(value: string): CreateDefaultAdminNetworkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultAdminNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultAdminNetworkRequest): CreateDefaultAdminNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDefaultAdminNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultAdminNetworkRequest;
  static deserializeBinaryFromReader(message: CreateDefaultAdminNetworkRequest, reader: jspb.BinaryReader): CreateDefaultAdminNetworkRequest;
}

export namespace CreateDefaultAdminNetworkRequest {
  export type AsObject = {
    companyname: string,
    userid: string,
    email: string,
  }
}

export class CreateDefaultAdminNetworkResponse extends jspb.Message {
  getOrganizationid(): string;
  setOrganizationid(value: string): CreateDefaultAdminNetworkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultAdminNetworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultAdminNetworkResponse): CreateDefaultAdminNetworkResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDefaultAdminNetworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultAdminNetworkResponse;
  static deserializeBinaryFromReader(message: CreateDefaultAdminNetworkResponse, reader: jspb.BinaryReader): CreateDefaultAdminNetworkResponse;
}

export namespace CreateDefaultAdminNetworkResponse {
  export type AsObject = {
    organizationid: string,
  }
}

export class LoginNetworkRequest extends jspb.Message {
  getNetworkname(): string;
  setNetworkname(value: string): LoginNetworkRequest;

  getUserid(): string;
  setUserid(value: string): LoginNetworkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginNetworkRequest): LoginNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: LoginNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginNetworkRequest;
  static deserializeBinaryFromReader(message: LoginNetworkRequest, reader: jspb.BinaryReader): LoginNetworkRequest;
}

export namespace LoginNetworkRequest {
  export type AsObject = {
    networkname: string,
    userid: string,
  }
}

export class LoginNetworkResponse extends jspb.Message {
  getOrganizationid(): string;
  setOrganizationid(value: string): LoginNetworkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginNetworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginNetworkResponse): LoginNetworkResponse.AsObject;
  static serializeBinaryToWriter(message: LoginNetworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginNetworkResponse;
  static deserializeBinaryFromReader(message: LoginNetworkResponse, reader: jspb.BinaryReader): LoginNetworkResponse;
}

export namespace LoginNetworkResponse {
  export type AsObject = {
    organizationid: string,
  }
}

