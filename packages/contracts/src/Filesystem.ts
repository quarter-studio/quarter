export interface Filesystem {
  exists(...segments: string[]): boolean;
  from(...segments: string[]): this;
  resolve(...segments: string[]): string;
}
