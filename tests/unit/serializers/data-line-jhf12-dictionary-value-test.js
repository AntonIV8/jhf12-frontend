import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-jhf12-dictionary-value', 'Unit | Serializer | data-line-jhf12-dictionary-value', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:data-line-jhf12-dictionary-value',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:data-line-jhf12-cardinality-type',
    'model:data-line-jhf12-catalog',
    'model:data-line-jhf12-characteristic-type',
    'model:data-line-jhf12-contragent',
    'model:data-line-jhf12-customer-acl',
    'model:data-line-jhf12-customer',
    'model:data-line-jhf12-dba',
    'model:data-line-jhf12-dictionary-value',
    'model:data-line-jhf12-dictionary',
    'model:data-line-jhf12-grp',
    'model:data-line-jhf12-order-item',
    'model:data-line-jhf12-order-state',
    'model:data-line-jhf12-product-catalog',
    'model:data-line-jhf12-resource-characteristic-log',
    'model:data-line-jhf12-resource-characteristic',
    'model:data-line-jhf12-resource-common',
    'model:data-line-jhf12-resource-log',
    'model:data-line-jhf12-resource-shared',
    'model:data-line-jhf12-resource-spec-characteristic',
    'model:data-line-jhf12-resource-spec',
    'model:data-line-jhf12-resource-usage-spec',
    'model:data-line-jhf12-resource',
    'model:data-line-jhf12-role',
    'model:data-line-jhf12-service-characteristic-log',
    'model:data-line-jhf12-service-characteristic',
    'model:data-line-jhf12-service-log',
    'model:data-line-jhf12-service-order',
    'model:data-line-jhf12-service-spec-acl',
    'model:data-line-jhf12-service-spec-characteristic',
    'model:data-line-jhf12-service-spec',
    'model:data-line-jhf12-service-state',
    'model:data-line-jhf12-service-usage-spec',
    'model:data-line-jhf12-service',
    'model:data-line-jhf12-user-group',
    'model:data-line-jhf12-user-resource-spec',
    'model:data-line-jhf12-user-role',
    'model:data-line-jhf12-user-service-order',
    'model:data-line-jhf12-user-service-spec',
    'model:data-line-jhf12-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
