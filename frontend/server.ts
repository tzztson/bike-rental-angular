import 'zone.js/dist/zone-node';

import 'localstorage-polyfill';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import * as domino from 'domino';
import fetch from 'cross-fetch';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync, readFileSync } from 'fs';

const templateA = readFileSync(join('dist/admin-panel/browser', 'index.html')).toString();
const win: any = domino.createWindow(templateA) as any;

win.Object = Object;
win.Math = Math;

global['window'] = win;
global['document'] = win.document;
global['fetch'] = <any>fetch;
global['branch'] = null;
global['object'] = win.object;
global['localStorage'] = localStorage;
global['DOMTokenList'] = win.DOMTokenList;
global['Node'] = win.Node;
global['Text'] = win.Text;
global['HTMLElement'] = win.HTMLElement;
global['navigator'] = win.navigator;

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/admin-panel/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    }),
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    }),
  );

  // All regular routes use the Universal engine
  server.get('*', (req: express.Request, res: express.Response) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4200;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
