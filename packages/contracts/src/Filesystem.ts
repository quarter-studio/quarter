export interface Filesystem {
  exists(path: string): boolean;
  files(path: string): string[];
  from(path: string): this;
  read(path: string, value?: string): string;
  readJSON<Value>(path: string, value?: Value): Value;
  resolve(path: string): string;
  relative(path: string): string;
  write(path: string, value: string): void;
  writeJSON(path: string, value: any): void;
}
