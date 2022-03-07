import * as jspb from 'google-protobuf'



export class OrganizationCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): OrganizationCreateRequest;

  getDisplayname(): string;
  setDisplayname(value: string): OrganizationCreateRequest;

  getLogourl(): string;
  setLogourl(value: string): OrganizationCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationCreateRequest): OrganizationCreateRequest.AsObject;
  static serializeBinaryToWriter(message: OrganizationCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationCreateRequest;
  static deserializeBinaryFromReader(message: OrganizationCreateRequest, reader: jspb.BinaryReader): OrganizationCreateRequest;
}

export namespace OrganizationCreateRequest {
  export type AsObject = {
    name: string,
    displayname: string,
    logourl: string,
  }
}

export class OrganizationCreateResponse extends jspb.Message {
  getOrganizationid(): string;
  setOrganizationid(value: string): OrganizationCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationCreateResponse): OrganizationCreateResponse.AsObject;
  static serializeBinaryToWriter(message: OrganizationCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationCreateResponse;
  static deserializeBinaryFromReader(message: OrganizationCreateResponse, reader: jspb.BinaryReader): OrganizationCreateResponse;
}

export namespace OrganizationCreateResponse {
  export type AsObject = {
    organizationid: string,
  }
}

export class OrganizationCreateAdminUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): OrganizationCreateAdminUserRequest;

  getPassword(): string;
  setPassword(value: string): OrganizationCreateAdminUserRequest;

  getOrganizationid(): string;
  setOrganizationid(value: string): OrganizationCreateAdminUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationCreateAdminUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationCreateAdminUserRequest): OrganizationCreateAdminUserRequest.AsObject;
  static serializeBinaryToWriter(message: OrganizationCreateAdminUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationCreateAdminUserRequest;
  static deserializeBinaryFromReader(message: OrganizationCreateAdminUserRequest, reader: jspb.BinaryReader): OrganizationCreateAdminUserRequest;
}

export namespace OrganizationCreateAdminUserRequest {
  export type AsObject = {
    email: string,
    password: string,
    organizationid: string,
  }
}

export class OrganizationCreateAdminUserResponse extends jspb.Message {
  getOrganizationid(): string;
  setOrganizationid(value: string): OrganizationCreateAdminUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationCreateAdminUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationCreateAdminUserResponse): OrganizationCreateAdminUserResponse.AsObject;
  static serializeBinaryToWriter(message: OrganizationCreateAdminUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationCreateAdminUserResponse;
  static deserializeBinaryFromReader(message: OrganizationCreateAdminUserResponse, reader: jspb.BinaryReader): OrganizationCreateAdminUserResponse;
}

export namespace OrganizationCreateAdminUserResponse {
  export type AsObject = {
    organizationid: string,
  }
}

