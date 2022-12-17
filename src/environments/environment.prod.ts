export const environment = {
  production: true,
  apiOpravljenePotiUrl: ((<any> window).env.apiOpravljenePotiUrl) || 'http://localhost:3005',
  apiPolnilnaPostajaUrl: ((<any> window).env.apiPolnilnaPostajaUrl) || 'http://localhost:3004',
  apiPotUrl: ((<any> window).env.apiPotUrl) || 'http://localhost:3003',
  apiTipVozilUrl: ((<any> window).env.apiTipVozilUrl) || 'http://localhost:3000',
  apiUporabnikiUrl: ((<any> window).env.apiUporabnikiUrl) || 'http://localhost:3002',
  apiVozilaUrl: ((<any> window).env.apiVozilaUrl) || 'http://localhost:3001',
};
