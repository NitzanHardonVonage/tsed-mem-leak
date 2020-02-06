import { conf } from './config/conf';
import { $log, ServerLoader, ServerSettings } from '@tsed/common';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import methodOverride from 'method-override';

@ServerSettings(conf)
export class Server extends ServerLoader {
	$afterInit(): void {
		this.use(bodyParser.json());
	}
	public $beforeRoutesInit(): void {
		if (this.httpServer) {
			this.httpServer.keepAliveTimeout = 600000;
		}
		if (this.httpsServer) {
			this.httpsServer.keepAliveTimeout = 600000;
		}
		this.use(cookieParser())
			.use(compression({}))
			.use(cors())
			.use(methodOverride())
			.use(bodyParser.urlencoded({
				extended: true
			}))
	}
	public $onReady(): void {
		$log.info('Server started...');
	}
}
