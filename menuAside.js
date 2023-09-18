import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
} from "@mdi/js";

export default [
  {
    to: "/admin",
    icon: mdiMonitor,
    label: "Dashboard",
  },
 
  {
    to: "/admin/activity",
    label: "Activity",
    icon: mdiResponsive,
  },
  {
    to: "/admin/event",
    label: "Event",
    icon: mdiPalette,
  },
  {
    to: "/masukan",
    label: "Masukan",
    icon: mdiAccountCircle,
  },

  {
    label: "Mahasiwa",
    icon: mdiViewList,
    menu: [
      {
        to: "/admin/mahasiswa",
        label: "List Mahasiswa",
      },
      {
        to: "/admin/mahasiswa/tambah",
        label: "Tambah Mahasiswa  ",
      },
    ],
  },
  {
    label: "Kas",
    icon: mdiViewList,
    menu: [
      {
        to: "/admin/kas/tambah",
        label: "Bayar Kas",
      },
      {
        to: "/admin/kas", 
        label: "List Kas",
      },
    ],
  },
  
];
