import { Order, RestAPI } from '@order-manager/shared';
import { OrderController } from '../controllers/order.controller';
import { DefaultRouter } from './default.router';

export class OrderRouter extends DefaultRouter<Order> {
  rootPath = RestAPI.ORDER;
  controller = new OrderController();
}
