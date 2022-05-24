interface ModuleExposes {
  [key: string]: string
}

const appsExposed: ModuleExposes = {
  './ApprobationRoutes': './src/app/RoutesApp.tsx',
}

export default appsExposed
