interface ModuleExposes {
  [key: string]: string
}

const appsExposed: ModuleExposes = {
  './AdmitRoutes': './src/app/RoutesApp.tsx',
}

export default appsExposed
