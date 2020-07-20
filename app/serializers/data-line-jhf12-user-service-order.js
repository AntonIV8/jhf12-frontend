import { Serializer as user_service_orderSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-user-service-order';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(user_service_orderSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
