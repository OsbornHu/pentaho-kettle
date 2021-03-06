/*!
 * Copyright 2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
  'text!./success.html',
  'pentaho/i18n-osgi!repositories-plugin.messages',
  'css!./success.css'
], function (template, i18n) {

  'use strict';

  var options = {
    bindings: {
      connection: "<"
    },
    controllerAs: "vm",
    template: template,
    controller: successController
  };

  successController.$inject = ["$state"];

  function successController($state) {
    var vm = this;
    vm.close = close;
    vm.manage = manage;
    vm.connect = connect;

    function close() {
      closeWindow();
    }

    function manage() {
      $state.go("manager");
    }

    function connect() {
      var credentials = {};
      credentials.repositoryName = vm.connection.displayName;
      $state.go("connecting", {credentials:credentials, connection:vm.connection});
    }
  }

  return {
    name: "file.success",
    options: options
  };

});
