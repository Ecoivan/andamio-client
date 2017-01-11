'use strict';
moduloProyecto.factory('proyectoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "Desc.", longname: "Descripción", visible: true, type: "text"}
                ];
            },
            getIcon: function () {
                return "fa-folder-open";
            },
            getObTitle: function () {
                return "proyecto";
            },
            getTitle: function () {
                return "proyecto";
            }
        };
    }]);


