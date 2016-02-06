'use strict';

angular.module('movApp.version', [
  'movApp.version.interpolate-filter',
  'movApp.version.version-directive'
])

.value('version', '0.2');
