import donateApps from "./donate";

const apps = [
  {
    key: 1,
    title: "Donate",
    secondaryText: "Save life",
    image: `https://firebasestorage.googleapis.com/v0/b/mihy-all.appspot.com/o/blooming-twig-near-plate_23-2147766582%20(1).jpg?alt=media&token=e8213387-b025-4ef1-86e0-12b06eb4c771`,
    route:"/donate",
    childRoutes:donateApps,
    hasCardClick:false
  }
];

export default apps;
