import {
  DateTimeResolver,
  EmailAddressResolver,
  NegativeFloatResolver,
  NegativeIntResolver,
  NonNegativeFloatResolver,
  NonNegativeIntResolver,
  NonPositiveFloatResolver,
  NonPositiveIntResolver,
  PhoneNumberResolver,
  PositiveFloatResolver,
  PositiveIntResolver,
  PostalCodeResolver,
  UnsignedFloatResolver,
  UnsignedIntResolver,
  URLResolver,
  BigIntResolver,
  LongResolver,
  GUIDResolver,
  HexColorCodeResolver,
  HSLResolver,
  HSLAResolver,
  IPv4Resolver,
  IPv6Resolver,
  ISBNResolver,
  MACResolver,
  PortResolver,
  RGBResolver,
  RGBAResolver,
  USCurrencyResolver,
  JSONResolver,
  JSONObjectResolver
} from "graphql-scalars";
import gql from 'graphql-tag';

export const typeDefs = gql`
  scalar BigInt
  scalar DateTime
  scalar EmailAddress
  scalar GUID
  scalar HexColorCode
  scalar HSL
  scalar HSLA
  scalar IPv4
  scalar IPv6
  scalar ISBN
  scalar JSON
  scalar JSONObject
  scalar Long
  scalar MAC
  scalar NegativeFloat
  scalar NegativeInt
  scalar NonNegativeFloat
  scalar NonNegativeInt
  scalar NonPositiveFloat
  scalar NonPositiveInt
  scalar PhoneNumber
  scalar Port
  scalar PositiveFloat
  scalar PositiveInt
  scalar PostalCode
  scalar RGB
  scalar RGBA
  scalar UnsignedFloat
  scalar UnsignedInt
  scalar URL
  scalar USCurrency
`;

export const resolvers = {
  DateTime: DateTimeResolver,
  NonPositiveInt: NonPositiveIntResolver,
  PositiveInt: PositiveIntResolver,
  NonNegativeInt: NonNegativeIntResolver,
  NegativeInt: NegativeIntResolver,
  NonPositiveFloat: NonPositiveFloatResolver,
  PositiveFloat: PositiveFloatResolver,
  NonNegativeFloat: NonNegativeFloatResolver,
  NegativeFloat: NegativeFloatResolver,
  UnsignedFloat: UnsignedFloatResolver,
  UnsignedInt: UnsignedIntResolver,
  BigInt: BigIntResolver,
  Long: LongResolver,
  EmailAddress: EmailAddressResolver,
  URL: URLResolver,
  PhoneNumber: PhoneNumberResolver,
  PostalCode: PostalCodeResolver,
  GUID: GUIDResolver,
  HexColorCode: HexColorCodeResolver,
  HSL: HSLResolver,
  HSLA: HSLAResolver,
  RGB: RGBResolver,
  RGBA: RGBAResolver,
  IPv4: IPv4Resolver,
  IPv6: IPv6Resolver,
  MAC: MACResolver,
  Port: PortResolver,
  ISBN: ISBNResolver,
  USCurrency: USCurrencyResolver,
  JSON: JSONResolver,
  JSONObject: JSONObjectResolver
}