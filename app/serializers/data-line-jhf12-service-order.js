import { Serializer as service_orderSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-service-order';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_orderSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
