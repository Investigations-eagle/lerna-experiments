import { environment } from '../environments/environment';

const config = {
  reportsUrl: 'http://localhost:4201',
  insightsUrl: 'http://localhost:4202'
};

if (environment.production) {
  config.reportsUrl = 'http://localhost:3000/reports/';
  config.insightsUrl = 'http://localhost:3000/insights/';
}

export default config;
