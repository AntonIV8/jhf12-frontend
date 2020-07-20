import { Serializer as order_stateSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-order-state';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(order_stateSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
