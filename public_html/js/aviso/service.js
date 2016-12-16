'use strict';
moduloAviso.factory('avisoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "contenido", shortname: "contenido", longname: "Contenido", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "fecha", shortname: "fecha", longname: "Fecha", visible: true, type: "date", required: true, pattern: ""},
                    {name: "obj_tipousuario", shortname: "Tipo Usuario", longname: "Tipo Usuario", visible: true, type: "specific", required: true, maxlength: 255, pattern: "", reference: "tipousuario"}
                ];
            },
            getIcon: function () {
                return "fa fa-fw fa-exclamation-triangle";
            },
            getObTitle: function () {
                return "aviso";
            },
            getTitle: function () {
                return "aviso";
            }
        };
    }]);


