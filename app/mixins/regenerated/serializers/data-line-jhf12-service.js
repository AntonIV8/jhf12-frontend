import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      contragent_id: { serialize: 'odata-id', deserialize: 'records' },
      cfs_id: { serialize: 'odata-id', deserialize: 'records' },
      cfs_id: { serialize: 'odata-id', deserialize: 'records' },
      service_spec_id: { serialize: 'odata-id', deserialize: 'records' },
      state: { serialize: 'odata-id', deserialize: 'records' },
      customer_id: { serialize: 'odata-id', deserialize: 'records' },
      contragent_id: { serialize: 'odata-id', deserialize: 'records' },
      parent_id: { serialize: 'odata-id', deserialize: 'records' },
      state: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
