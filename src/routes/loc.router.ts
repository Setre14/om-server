import { LocController } from '../controllers/loc.controller';
import { RestAPI, Loc } from '@order-manager/shared';
import { DefaultRouter } from './default.router';

export class LocRouter extends DefaultRouter<Loc> {
  rootPath = RestAPI.LOCATION;
  controller = new LocController();
}
