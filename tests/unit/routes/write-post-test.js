import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | WritePost', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:write-post');
    assert.ok(route);
  });
});
