import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@nextui-org/react";
import ImageUploader, { ReactImageUpload } from "react-image-upload";
import "react-image-upload/dist/index.css";
import { FiUploadCloud } from "react-icons/fi";
import { SettingsTitle } from "@/components/Settings/SettingsTitle";
import { CiCircleRemove } from "react-icons/ci";

export function BannersAndPopSettings() {
  const [isBannerSelected, setIsBannerSelected] = useState<boolean>(false);
  const [isPopUpSelected, setIsPopUpSelected] = useState<boolean>(false);

  function getImageFileObject(imageFile: ReactImageUpload.UploaderFile) {
    console.log({ imageFile });
  }

  function runAfterImageDelete(file: ReactImageUpload.UploaderFile) {
    console.log({ file });
  }

  return (
    <div className="space-y-4">
      <SettingsTitle title="Banners and Pop-up" />
      <Card>
        <CardBody>
          <form>
            <div className="space-y-8">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-dark font-medium">Banner</span>
                  <Switch
                    size="sm"
                    isSelected={isBannerSelected}
                    onValueChange={setIsBannerSelected}
                  />
                </div>

                <Textarea
                  isDisabled={!!isBannerSelected}
                  placeholder="Banner Text"
                  className="max-w-xl"
                />
                <p className="text-xs font-medium text-medium">
                  This is the information that will appear before the header on the client website.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-dark font-medium">Pop-up modal</span>
                  <Switch
                    size="sm"
                    isSelected={isPopUpSelected}
                    onValueChange={setIsPopUpSelected}
                  />
                </div>
                <div className="flex max-w-xl bg-lightest justify-center rounded-md">
                  <ImageUploader
                    style={{
                      height: 200,
                      width: 300,
                      padding: "24px",
                      backgroundColor: "transparent",
                    }}
                    deleteIcon={<CiCircleRemove />}
                    uploadIcon={
                      <div className="space-y-3 text-center flex flex-col justify-center items-center">
                        <div className="p-2 bg-light rounded-full w-8">
                          <FiUploadCloud className="text-black" />
                        </div>
                        <span className="text-xs text-primary">Click to upload</span>
                        <span className="text-xs text-medium">
                          PNG, JPG and Mp4 (max. 800x400px)
                        </span>
                      </div>
                    }
                    onFileAdded={(img) => getImageFileObject(img)}
                    onFileRemoved={(img) => runAfterImageDelete(img)}
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input label="Enter popup message " className="max-w-xl" />
                    <span className="text-xs text-medium">
                      Write the message you want to show up in your popup
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Input label="Optional url link" className="max-w-xl" />
                    <span className="text-xs text-medium">
                      The link the modal pop-up should go to when clicked
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-dark">Pop-up modal Position</span>
                  <RadioGroup size="sm" orientation="horizontal">
                    <Radio value="center" className="text-xs">
                      Center
                    </Radio>
                    <Radio value="topCenter" className="text-xs">
                      Top Center
                    </Radio>
                    <Radio value="topLeft" className="text-xs">
                      Top Left
                    </Radio>
                    <Radio value="topRight" className="text-xs">
                      Top Right
                    </Radio>
                  </RadioGroup>
                </div>
                <Button type="submit" className="bg-primary text-white w-3/6 md:w-1/6">
                  Update Charges
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
