import { SettingsTitle } from "@/components/Settings/SettingsTitle";
import { SidebarRoutes } from "@/types/routes";
import { Button, Card, CardBody, Select } from "@nextui-org/react";
import { Link } from "react-router-dom";

export function FreightSetting() {
  return (
    <div className="space-y-4">
      <SettingsTitle title="Freight setting" />
      <Card>
        <CardBody>
          <form>
            <div className="space-y-4">
              <div className="space-y-3 flex flex-col">
                <Select
                  as={Link}
                  // @ts-expect-error pass
                  children={null}
                  to={SidebarRoutes.settingsFreight}
                  placeholder="Basic freight setting"
                  className="max-w-xs"
                ></Select>
                <span className="text-xs font-medium text-medium">
                  Change how vendors charge freight on their items{" "}
                </span>
              </div>
              <Button type="submit" className="text-white bg-primary">
                Update Charges{" "}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
