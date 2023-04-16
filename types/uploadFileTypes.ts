export interface IUploadFile {
  name: string;
  mv: (path: string) => Promise<void>;
}
