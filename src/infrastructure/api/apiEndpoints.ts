const APIEndpoints = {
  menu: {
    accessMenu: "dashboard/v1/access/menu",
    management: "dashboard/v1/menu",
    managementList: "dashboard/v1/menu/list",
    managementParent: "dashboard/v1/menu/parents",
  },
  login: {
    "/":  "dashboard/v1/login",
    byEmail: "api/v1/portal-users/loginByEmail"
  }
};

export default APIEndpoints;
