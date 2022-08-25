export interface API {
    openapi:    string;
    info:       Info;
    paths:      Paths;
    components: Components;
}

export interface Components {
    schemas: Schemas;
}

export interface Schemas {
    AccomodationType:      AccomodationType;
    AddAccomodationDto:    AccomodationDto;
    AddLocationDto:        LocationDto;
    AddReservationDto:     ReservationDto;
    UpdateAccomodationDto: AccomodationDto;
    UpdateLocationDto:     LocationDto;
    UpdateReservationDto:  ReservationDto;
}

export interface AccomodationType {
    enum: string[];
    type: Type;
}

export enum Type {
    Integer = "integer",
    Number = "number",
    String = "string",
}

export interface AccomodationDto {
    type:                 string;
    properties:           AddAccomodationDtoProperties;
    additionalProperties: boolean;
}

export interface AddAccomodationDtoProperties {
    title:            string;
    subtitle:         string;
    description:      string;
    shortDescription: string;
    type:             Location;
    categorization:   Capacity;
    personCount:      Capacity;
    imageUrl:         string;
    freeCancelation:  boolean;
    price:            ID;
    locationID:       Capacity;
    location?:        Location;
    capacity:         Capacity;
    id?:              ID;
}

export interface Capacity {
    type:     Type;
    format:   CapacityFormat;
    nullable: boolean;
}

export enum CapacityFormat {
    DateTime = "date-time",
    Int32 = "int32",
    UUID = "uuid",
}



export interface FreeCancelation {
    type: string;
}

export interface ID {
    type:   Type;
    format: IDFormat;
}

export enum IDFormat {
    Double = "double",
    Int32 = "int32",
    UUID = "uuid",
}

export interface Location {
    $ref: string;
}

export interface LocationDto {
    type:                 string;
    properties:           LocationInterface;
    additionalProperties: boolean;
}

export interface LocationInterface {
    name:       string;
    imageUrl:   string;
    postalCode: ID;
    properties: ID;
    id?:        ID;
}

export interface ReservationDto {
    type:                 string;
    properties:           AddReservationDtoProperties;
    additionalProperties: boolean;
}

export interface AddReservationDtoProperties {
    email:          string;
    accomodationId?: string;
    checkIn:        string;
    checkOut:       string;
    personCount:    number;
    confirmed:      boolean;
    id?:            string;
}

export interface Info {
    title:   string;
    version: string;
}

export interface Paths {
    "/api/Accomodations":                APIAccomodationsClass;
    "/api/Accomodations/recommendation": APIAtion;
    "/api/Accomodations/location":       APIAccomodationsLocation;
    "/api/Accomodations/{id}":           APIID;
    "/api/Location":                     APIAtion;
    "/api/Location/{id}":                APILocationID;
    "/api/Reservation":                  APIAccomodationsClass;
    "/api/Reservation/{id}":             APIID;
    "/api/Reservation/confirm/{id}":     APIReservationConfirmID;
}

export interface APIAccomodationsClass {
    get:  APIAccomodationsGet;
    post: Post;
}

export interface APIAccomodationsGet {
    tags:      string[];
    responses: Responses;
}

export interface Responses {
    "200": The200;
}

export interface The200 {
    description: DescriptionEnum;
}

export enum DescriptionEnum {
    Success = "Success",
}

export interface Post {
    tags:        string[];
    requestBody: RequestBody;
    responses:   Responses;
}

export interface RequestBody {
    content: Content;
}

export interface Content {
    "application/json":   JSON;
    "text/json":          JSON;
    "application/*+json": JSON;
}

export interface JSON {
    schema: Location;
}

export interface APIAccomodationsLocation {
    get: APIAccomodationsLocationGet;
}

export interface APIAccomodationsLocationGet {
    tags:       string[];
    parameters: Parameter[];
    responses:  Responses;
}

export interface Parameter {
    name:      string;
    in:        string;
    schema:    ID;
    required?: boolean;
}

export interface APIAtion {
    get: APIAccomodationsGet;
}

export interface APIID {
    get:    Delete;
    delete: Delete;
    put:    Delete;
}

export interface Delete {
    tags:         string[];
    parameters?:  Parameter[];
    responses:    Responses;
    operationId?: string;
    requestBody?: RequestBody;
}

export interface APILocationID {
    put: Put;
}

export interface Put {
    tags:        string[];
    requestBody: RequestBody;
    responses:   Responses;
    parameters?: Parameter[];
}

export interface APIReservationConfirmID {
    put: Delete;
}
