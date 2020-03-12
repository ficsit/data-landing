export interface PackageReference {
  __reference: 'package';
  package: string;
}

export interface ObjectReference {
  __reference: 'object';
  package: string;
  name: string;
}
