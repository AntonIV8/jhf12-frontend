import { Serializer as user_resource_specSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-user-resource-spec';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(user_resource_specSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
