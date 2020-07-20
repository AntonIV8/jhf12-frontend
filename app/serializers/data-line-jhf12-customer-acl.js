import { Serializer as customer_aclSerializer } from
  '../mixins/regenerated/serializers/data-line-jhf12-customer-acl';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(customer_aclSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
