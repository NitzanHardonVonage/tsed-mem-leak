import { IServerSettings } from '@tsed/common';
import path from 'path'

const rootDir = path.join(__dirname, '..');

const version = require('../../package.json').version;

export const conf: Partial<IServerSettings> = {
	rootDir,
	httpPort: 3000,
	httpsPort: false,
	logger: {
		logRequest: true,
		logStart: false,
		jsonIndentation: 0,
		ignoreUrlPatterns: ['/healthcheck', '/v1/hdap//*'],
		disableRoutesSummary: true,
		format: "%d{[yyyy-MM-dd hh:mm:ss,SSS}] %p %m",
		// format: "%[%d{[yyyy-MM-dd hh:mm:ss,SSS}] %p%] %m",
		level: "info",
		requestFields: ["method", "url", "body", "query", "params", "duration"]
	},
	mount: {
		'/': '${rootDir}/controllers/**/*.ts'
	},
	componentsScan: ['${rootDir}/services/**/**.ts', '${rootDir}/middlewares/**/**.ts'],
	swagger: {
		spec: {
			info: {
				version,
				title: 'User Data API',
				description: 'An API to get and set any user data'
			}
		},
		path: '/api-docs'
	},
};
