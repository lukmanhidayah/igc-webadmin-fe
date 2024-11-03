import APIEndpoints from "@api/APIEndpoints";
import { APIPhoenix } from "@api/APIInstance";
import { IMenu } from "@domain/entities/DashboardEntity";
import { IResponseEntity } from "@domain/entities/ResponseEntity";
import logger from "@lib/utils/logger";
import { AxiosResponse } from "axios";

type IGetAccessMenu = IResponseEntity<IMenu[]>;

class MenuService {
  async getAccessMenu(token: string): Promise<IGetAccessMenu | null> {
    try {
      const response = (await APIPhoenix.get(APIEndpoints.menu.accessMenu, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })) as AxiosResponse<IGetAccessMenu>;

      logger("MenuService.getAccessMenu", response.data);

      if (response.data.code === 200) {
        const result = response.data;

        return result;
      } else {
        return null;
      }
    } catch (error) {
      logger("MenuService.getAccessMenu", error);
      return null;
    }
  }
}

export default MenuService;
