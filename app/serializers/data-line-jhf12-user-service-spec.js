import { Serializer as user_service_specSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-user-service-spec';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(user_service_specSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
