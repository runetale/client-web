import * as jspb from 'google-protobuf'



export class CreateDefaultAdminNetworkRequest extends jspb.Message {
  getCompanyname(): string;
  setCompanyname(value: string): CreateDefaultAdminNetworkRequest;

  getUserid(): string;
  setUserid(value: string): CreateDefaultAdminNetworkRequest;

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

