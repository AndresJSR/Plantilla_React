export interface NativeName {
  official?: string;
  common?: string;
}

export interface CountryName {
  common?: string;
  official?: string;
  nativeName?: Record<string, NativeName>;
}

export interface Country {
  name?: CountryName;
  capital?: string[];
  region?: string;
}
