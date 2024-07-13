import { Button, Card, CardBody, Input, Select, useDisclosure } from "@nextui-org/react";
import { SettingsTitle } from "@/components/Settings/SettingsTitle";
import { VisibilityModalView } from "@/components/Settings/Visibility/ModalView";

export function VisibilitySetting() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="space-y-4">
        <SettingsTitle title="Visibility setting" />
        <Card>
          <CardBody>
            <form>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="space-y-3 flex flex-col">
                    <Input
                      size="sm"
                      disabled
                      placeholder="Visible"
                      defaultValue="Visible"
                      className="max-w-xs"
                    />
                    <span className="text-xs font-medium text-medium">
                      General visibility for all vendors
                    </span>
                  </div>
                  <div className="space-y-3 flex flex-col">
                    <Select
                      size="sm"
                      placeholder="Advanced Visibility settings"
                      className="max-w-xs"
                      onClick={onOpen}
                      // @ts-expect-error look away
                      children={null}
                    ></Select>
                    <span className="text-xs font-medium text-medium">
                      or Manually apply visibility to fit your needs
                    </span>
                  </div>
                </div>
                <Button type="submit" className="text-white bg-primary">
                  Update Charges{" "}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>

      <VisibilityModalView isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
