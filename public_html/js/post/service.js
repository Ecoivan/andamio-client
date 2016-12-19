'use strict';
moduloPost.factory('postService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "fecha", shortname: "Fecha", longname: "Fecha", visible: true, type: "date", required: true, maxlength: 255, pattern: ""},
                    {name: "titulo", shortname: "titulo", longname: "titulo", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "contenido", shortname: "Contenido", longname: "Contenido", visible: true, type: "textarea", required: true, maxlength: 5000, pattern: ""},
                    {name: "obj_titulo", shortname: "Tipo de título", longname: "titulo", visible: true, type: "specific", required: true, reference:"titulo"},
                    {name: "obj_usuario", shortname: "Usuario", longname: "usuario", visible: true, type: "specific", required: true, reference:"usuario"}
                    
                ];
            },
            getIcon: function () {
                return "fa-file-text-o";
            },
            getObTitle: function () {
                return "post";
            },
            getTitle: function () {
                return "post";
            }
        };
    }]);


