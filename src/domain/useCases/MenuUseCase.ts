import logger from "../../infrastructure/lib/utils/logger";
import MenuService from "@services/MenuService";

export default class MenuUseCase {
  private menuService = new MenuService();

  async getAccessMenu(token: string) {
    if (!token) {
      throw new Error("Invalid token");
    }

    try {
      const result = await this.menuService.getAccessMenu(token);
      logger("MenuUseCase.getAccessMenu", result);

      if (!result || !result.data || result.data.length === 0) {
        throw new Error(result?.message ?? "Login failed");
      }

      const menus = result.data.map((res, index) => {
        return { ...res, isShowChild: index === 0 ? true : false };
      });

      return menus
    } catch (error: any) {
      logger("MenuUseCase.getAccessMenu", error);
      throw new Error(
        error?.message ?? "An error occurred while fetching the access menu"
      );
    }
  }
}
