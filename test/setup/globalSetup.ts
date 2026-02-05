export function setup(project) {
  console.log('Global setup')
  console.log('Authentification testing enabled: ', project._provided.customConfig.auth.enabled)
}

export function teardown() {
  console.log('Global teardown')
}