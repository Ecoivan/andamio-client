'use strict';
moduloEstado.factory('estadoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "descr.", longname: "Descripcion", visible: true, type: "text", required: true, maxlength: 255, pattern: ""}
                ];
            },
            getIcon: function () {
                return "fa fa-fw fa-meh-o";
            },
            getObTitle: function () {
                return "estado";
            },
            getTitle: function () {
                return "estado";
            }
        };
    }]);


