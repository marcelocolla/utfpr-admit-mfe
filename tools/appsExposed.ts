interface ModuleExposes {
  [key: string]: string
}

const appsExposed: ModuleExposes = {
  './BoilerplateRoutes': './src/app/RoutesApp.tsx',
}

export default appsExposed
