// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiOpravljenePotiUrl: ((<any> window).env.apiOpravljenePotiUrl) || 'http://localhost:3005',
  apiPolnilnaPostajaUrl: ((<any> window).env.apiPolnilnaPostajaUrl) || 'http://localhost:3004',
  apiPotUrl: ((<any> window).env.apiPotUrl) || 'http://localhost:3003',
  apiTipVozilUrl: ((<any> window).env.apiTipVozilUrl) || 'http://localhost:3000',
  apiUporabnikiUrl: ((<any> window).env.apiUporabnikiUrl) || 'http://localhost:3002',
  apiVozilaUrl: ((<any> window).env.apiVozilaUrl) || 'http://localhost:3001',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
