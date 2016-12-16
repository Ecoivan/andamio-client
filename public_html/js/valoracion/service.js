'use strict';
moduloValoracion.factory('valoracionService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "descr.", longname: "Descripcion", visible: true, type: "text", required: true, maxlength: 255, pattern: ""}
                ];
            },
            getIcon: function () {
                return "fa fa-fw fa-thumbs-up";
            },
            getObTitle: function () {
                return "valoracion";
            },
            getTitle: function () {
                return "valoracion";
            }
        };
    }]);


