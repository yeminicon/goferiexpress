declare module "react-image-upload" {
  export namespace ReactImageUpload {
    interface UploaderFile {
      file: File;
      dataUrl: string;
    }
  }

  function ImageUploader(prop: {
    onFileAdded: (img: ReactImageUpload.UploaderFile) => void;
    onFileRemoved: (img: ReactImageUpload.UploaderFile) => void;

    style: React.CSSProperties;
    uploadIcon: React.ReactElement;
    deleteIcon?: React.ReactElement;
  }): React.ReactElement;

  export default ImageUploader;
}
