import { conf } from './config/conf';
import { ServerLoader, ServerSettings } from '@tsed/common';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import methodOverride from 'method-override';

@ServerSettings(conf)
export class Server extends ServerLoader {
	// $afterInit(): void {
	// 	this.use(bodyParser.json());
	// }
	public $onMountingMiddlewares(): void|Promise<any> {
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
			.use(bodyParser.json())
			.use(bodyParser.urlencoded({
				extended: true
			}))
		return null;
		
	}
	public $onReady(): void {
		console.log('Server started...');
	}
}
