
import Dashboard from "views/Dashboard.js";
import Treinamentos from "views/Treinamentos.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Grafico from "views/Grafico.js";
import Certificados from "views/Certificados.js";
import Catalogo from "views/Catalogo.js";
import Resultados from "views/Resultados.js";
import Compras from "views/Compras.js";
import BaseConhecimento from "views/BaseConhecimento.js";
import NRs from "views/NR.js";
import NR2 from "views/NR2.js";
import NR3 from "views/NR3.js";
import GerenciamentodeUsuarios from "views/GerenciamentodeUsuarios.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Quality Seg Soluções",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    roles: ['Financeiro', 'Administrador', 'Visualizador']
  },

  {
    path: "/Graficos",
    name: "Graficos Power BI",
    icon: "nc-icon nc-chart-bar-32",
    component: Grafico,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador']
  },
  {
    path: "/Resultados",
    name: "Resultados",
    icon: "nc-icon nc-paper-2",
    component: Resultados,
    layout: "/admin",
    roles: ['Administrador']
  },
  {
    path: "/treinamentos",
    name: "Treinamentos",
    icon: "nc-icon nc-circle-09",
    component: Treinamentos,
    layout: "/admin",
    roles: ['Administrador']
  },
  {
    path: "/table",
    name: "CheckList's",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
    roles: ['Administrador']

  },

  {
    path: "/maps",
    name: "Mapa de Rede",
    icon: "nc-icon nc-map-big",
    component: Maps,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador']
  },
  {
    path: "/certificados",
    name: "Certificados",
    icon: "nc-icon nc-single-copy-04",
    component: Certificados,
    layout: "/admin",
    roles: ['Administrador', 'Financeiro']
  },
  {
    path: "/catalogo_ead",
    name: "Catalogo EAD",
    icon: "nc-icon nc-ruler-pencil",
    component: Catalogo,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador']
  },
  {
    path: "/Compras",
    name: "OS de Compra",
    icon: "nc-icon nc-money-coins",
    component: Compras,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador', 'Financeiro']
  },
  {
    path: "/BaseConhecimento",
    name: "Base Conhecimento",
    icon: "nc-icon nc-atom",
    component: BaseConhecimento,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador', 'Financeiro']
  },
  {
    path: "/NR",
    name: "NR - Checklist",
    icon: "nc-icon nc-single-copy-04",
    component: NRs,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador'],
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
  roles: ['Administrador', 'Visualizador']
},

];


export default dashboardRoutes;
