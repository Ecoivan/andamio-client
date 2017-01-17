/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * andamio: The stunning micro-library that helps you to develop easily
 *             AJAX web applications by using Angular.js 1.x & andamio-server
 * andamio is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

'use strict';
moduloTarea.controller('TareaEditController', ['$scope', '$routeParams', '$location', 'tareaService', 'serverService', 'postService', 'sharedSpaceService', '$filter', '$uibModal',
    function ($scope, $routeParams, $location, tareaService, serverService, postService, sharedSpaceService, $filter, $uibModal) {
        $scope.fields = tareaService.getFields();
        $scope.obtitle = tareaService.getObTitle();
        $scope.icon = tareaService.getIcon();
        $scope.ob = tareaService.getTitle();
        $scope.title = "Editando un " + $scope.obtitle;
        $scope.op = "plist";
        $scope.status = null;
        $scope.error = true;
        $scope.debugging = serverService.debugging();
        $scope.bean = {};
        $scope.bean.obj_usuario = {"id": 0};
        $scope.show_obj_usuario = true;
        $scope.bean.obj_estado = {"id": 0};
        $scope.show_obj_estado = true;
        $scope.bean.obj_prioridad = {"id": 0};
        $scope.show_obj_prioridad = true;
        $scope.bean.obj_valoracion = {"id": 0};
        $scope.show_obj_valoracion = true;
        $scope.bean.obj_proyecto = {"id": 0};
        $scope.show_obj_proyecto = true;
        $scope.id = $routeParams.id;
        serverService.promise_getOne($scope.ob, $scope.id).then(function (response) {
            if (response.status == 200) {
                if (response.data.status == 200) {
                    $scope.status = null;
                    $scope.bean = response.data.message;
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            } else {
                $scope.status = "Error en la recepción de datos del servidor";
            }
        }).catch(function (data) {
            $scope.status = "Error en la recepción de datos del servidor";
        });
        $scope.save = function () {
            $scope.bean.alta = $filter('date')($scope.bean.alta, "dd/MM/yyyy");
            $scope.bean.integracion = $filter('date')($scope.bean.integracion, "dd/MM/yyyy");
            $scope.bean.fechaturno = $filter('date')($scope.bean.fechaturno, "dd/MM/yyyy");
            var jsonToSend = {json: JSON.stringify(serverService.array_identificarArray($scope.bean))};
            serverService.promise_setOne($scope.ob, jsonToSend).then(function (response) {
                if (response.status == 200) {
                    if (response.data.status == 200) {
                        $scope.response = response;
                        $scope.status = "El registro " + $scope.obtitle + " se ha modificado ... id = " + $scope.bean.id;
                        $scope.bean.id = $scope.bean.id;
                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            }).catch(function (data) {
                $scope.status = "Error en la recepción de datos del servidor";
            });
            ;
        };
        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };
        $scope.chooseOne = function (nameForeign, foreignObjectName, contollerName) {
            var modalInstance = $uibModal.open({
                templateUrl: 'js/' + foreignObjectName + '/selection.html',
                controller: contollerName,
                size: 'lg'
            }).result.then(function (modalResult) {
                $scope.bean[nameForeign].id = modalResult;
            });
        };
        $scope.$watch('bean.obj_usuario.id', function () {
            if ($scope.bean) {
                serverService.promise_getOne('usuario', $scope.bean.obj_usuario.id).then(function (response) {
                    var old_id = $scope.bean.obj_usuario.id;
                    if (response.data.message.id != 0) {
                        $scope.outerForm.obj_usuario.$setValidity('exists', true);
                        $scope.bean.obj_usuario = response.data.message;
                    } else {
                        $scope.outerForm.obj_usuario.$setValidity('exists', false);
                        //$scope.bean.obj_usuario.id = 0;
                        $scope.bean.obj_usuario.id = old_id;
                    }
                });
            }
        });
        $scope.$watch('bean.obj_estado.id', function () {
            if ($scope.bean) {
                serverService.promise_getOne('estado', $scope.bean.obj_estado.id).then(function (response) {
                    var old_id = $scope.bean.obj_estado.id;
                    if (response.data.message.id != 0) {
                        $scope.outerForm.obj_estado.$setValidity('exists', true);
                        $scope.bean.obj_estado = response.data.message;
                    } else {
                        $scope.outerForm.obj_estado.$setValidity('exists', false);
                        //$scope.bean.obj_estado.id = 0;
                        $scope.bean.obj_estado.id = old_id;
                    }
                });
            }
        });
        $scope.$watch('bean.obj_prioridad.id', function () {
            if ($scope.bean) {
                serverService.promise_getOne('prioridad', $scope.bean.obj_prioridad.id).then(function (response) {
                    var old_id = $scope.bean.obj_prioridad.id;
                    if (response.data.message.id != 0) {
                        $scope.outerForm.obj_prioridad.$setValidity('exists', true);
                        $scope.bean.obj_prioridad = response.data.message;
                        $scope.bean.alta= serverService.date_toDate($scope.bean.alta);
                        $scope.bean.integracion = serverService.date_toDate($scope.bean.integracion);
                        $scope.bean.fechaturno = serverService.date_toDate($scope.bean.fechaturno);
                    } else {
                        $scope.outerForm.obj_prioridad.$setValidity('exists', false);
                        //$scope.bean.obj_prioridad.id = 0;
                        $scope.bean.obj_prioridad.id = old_id;
                    }
                });
            }
        });
        $scope.$watch('bean.obj_valoracion.id', function () {
            if ($scope.bean) {
                serverService.promise_getOne('valoracion', $scope.bean.obj_valoracion.id).then(function (response) {
                    var old_id = $scope.bean.obj_valoracion.id;
                    if (response.data.message.id != 0) {
                        $scope.outerForm.obj_valoracion.$setValidity('exists', true);
                        $scope.bean.obj_valoracion = response.data.message;
                    } else {
                        $scope.outerForm.obj_valoracion.$setValidity('exists', false);
                        //$scope.bean.obj_valoracion.id = 0;
                        $scope.bean.obj_valoracion.id = old_id;
                    }
                });
            }
        });
        $scope.$watch('bean.obj_proyecto.id', function () {
            if ($scope.bean) {
                serverService.promise_getOne('proyecto', $scope.bean.obj_proyecto.id).then(function (response) {
                    var old_id = $scope.bean.obj_proyecto.id;
                    if (response.data.message.id != 0) {
                        $scope.outerForm.obj_proyecto.$setValidity('exists', true);
                        $scope.bean.obj_proyecto = response.data.message;
                    } else {
                        $scope.outerForm.obj_proyecto.$setValidity('exists', false);
                        //$scope.bean.obj_proyecto.id = 0;
                        $scope.bean.obj_proyecto.id = old_id;
                    }
                });
            }
        });
        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1
        };
        //datepicker 1
        $scope.open1 = function () {
            $scope.popup1.opened = true;
            $scope.outerForm.creation.$pristine = false;
        };
        $scope.popup1 = {
            opened: false
        };
        //datepicker 2
        $scope.open2 = function () {
            $scope.popup2.opened = true;
            $scope.outerForm.modification.$pristine = false;
        };
        $scope.popup2 = {
            opened: false
        };
        //datepicker 3
        $scope.open3 = function () {
            $scope.popup3.opened = true;
            $scope.outerForm.modification.$pristine = false;
        };
        $scope.popup3 = {
            opened: false
        };
    }]);