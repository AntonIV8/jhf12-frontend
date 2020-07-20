import { Serializer as service_spec_aclSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-service-spec-acl';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_spec_aclSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
