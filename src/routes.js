
import Dashboard from "views/Dashboard.js";
import Catalogo from "views/Catalogo.js";
import BaseConhecimento from "views/BaseConhecimento.js";
import NRs from "views/NR.js";
import NR2 from "views/NR2.js";
import NR3 from "views/NR3.js";
import GerenciamentodeUsuarios from "views/GerenciamentodeUsuarios.js";
import YourComponent from "views/Maps.js";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    roles: ['Financeiro', 'Administrador', 'Colaborador']
  },

  {
    path: "/catalogo_ead",
    name: "Catalogo EAD",
    icon: "nc-icon nc-ruler-pencil",
    component: Catalogo,
    layout: "/admin",
    roles: ['Administrador', 'Colaborador']
  },

  {
    path: "/BaseConhecimento",
    name: "Base Conhecimento",
    icon: "nc-icon nc-atom",
    component: BaseConhecimento,
    layout: "/admin",
    roles: ['Administrador', 'Colaborador']
  },
  {
    path: "/Maps",
    name: "Mapa de Rede ",
    icon: "nc-icon nc-vector",
    component: YourComponent,
    layout: "/admin",
    roles: ['Administrador', 'Colaborador']
  },
  {
    path: "/NR",
    name: "NR - Checklist",
    icon: "nc-icon nc-single-copy-04",
    component: NRs,
    layout: "/admin",
    roles: ['Administrador', 'Colaborador'],
    subMenu: [
        {
            path: "/NR",
            name: "NR",
            component: NRs,
            layout: "/admin",
        },
        {
            path: "/NR2",
            name: "NR2",
            component: NR2,
            layout: "/admin",
        },
        {
            path: "/NR3",
            name: "NR3",
            component: NR3,
            layout: "/admin",
        },
    ]
},
{
  path: "/GerenciamentodeUsuarios",
  name: "Gerencia de Usuarios",
  icon: "nc-icon nc-circle-09",
  component: GerenciamentodeUsuarios,
  layout: "/admin",
  roles: ['Administrador']
},

];


export default dashboardRoutes;
