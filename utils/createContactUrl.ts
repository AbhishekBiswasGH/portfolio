export const createWhatsAppUrl = ({
  countryCode,
  number,
  message
}: {
  countryCode: number;
  number: number;
  message?: string;
}): string =>
  `https://wa.me/+${countryCode}${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const createCallUrl = ({
  countryCode,
  number
}: {
  countryCode: number;
  number: number;
}): string => `tel:+${countryCode}${number}`;

export const createMailUrl = ({
  mail
}: {
  mail: string;
}): string => `mailto:${mail}`;
