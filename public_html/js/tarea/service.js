'use strict';
moduloTarea.factory('tareaService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "Desc", longname: "Descripcion", visible: true, type: "text", required: true, maxlength: 5000, pattern: ""},
                    {name: "alta", shortname: "alta", longname: "alta", visible: true, type: "date", required: true, maxlength: 255, pattern: ""},
                    {name: "integracion", shortname: "Integ.", longname: "Integracion", visible: true, type: "date", required: true, maxlength: 255, pattern: ""},
                    {name: "puntos", shortname: "Pun.", longname: "puntos", visible: true, type: "integer", required: true},
                    {name: "observaciones", shortname: "Observ.", longname: "Observaciones", visible: true, type: "text", required: true, maxlength: 5000, pattern: ""},
                    {name: "fechaturno", shortname: "turno", longname: "Fecha turno", visible: true, type: "date", required: true, maxlength: 255, pattern: ""},
                    {name: "turno", shortname: "Turno", longname: "turno", visible: true, type: "integer", required: true},
                    {name: "numeroturno", shortname: "Num.Turno.", longname: "numero turno", visible: true, type: "integer", required: true},
                    {name: "obj_usuario", shortname: "Usuario", longname: "usuario", visible: true, type: "specific", required: true, reference:"usuario"},
                    {name: "obj_estado", shortname: "Estado", longname: "estado", visible: true, type: "specific", required: true, reference:"estado"},
                    {name: "obj_prioridad", shortname: "Prioridad", longname: "prioridad", visible: true, type: "specific", required: true, reference:"prioridad"},
                    {name: "obj_valoracion", shortname: "Valoracion", longname: "valoracion", visible: true, type: "specific", required: true, reference:"valoracion"},
                    {name: "obj_proyecto", shortname: "Proyecto", longname: "proyecto", visible: true, type: "specific", required: true, reference:"proyecto"},
                    {name: "completada", shortname: "Comp.", longname: "completada", visible: true, type: "integer", required: true}
                    
                ];
            },
            getIcon: function () {
                return "fa-file-text-o";
            },
            getObTitle: function () {
                return "tarea";
            },
            getTitle: function () {
                return "tarea";
            }
        };
    }]);


