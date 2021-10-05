$(document).ready(function () {
    jQuery.support.cors = true;    
    $("#act-tabla-maquinaria").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/machine/machine";
        $("#tabla.maquinaria tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function (result) {
                console.log("Entre a invocar el servicio REST");
                console.log(result.items);
                var i = 0;
                var id = 0;
                var marca = "";
                var modelo = 0;
                var categoryId = 0;
                var nombre = "";
                var salidaFila = "";

                $("#tabla-maquinaria tbody").empty();

                salidaFila = "<tr><th>ID Maquinaria</th><th>Marca</th><th>Modelo</th><th>Category_ID</th><th>Nombre</th></tr>";
                $("#tabla-maquinaria tbody").append(salidaFila);

                for (i = 0; i < result.items.length; i++) {
                    id = result.items[i]["id"];
                    marca = result.items[i]["brand"];
                    modelo = result.items[i]["model"];
                    categoryId = result.items[i]["category_id"]
                    nombre = result.items[i]["name"]
                    salidaFila = "<tr><td>" + id + "</td><td>" +
                        marca + "</td><td>" + modelo + "</td><td>" + categoryId + "</td><td>" + nombre + "</td></tr>";

                    $("#tabla-maquinaria tbody").append(salidaFila);

                }//Fin del for


                            //Fin del selector success del AJAX
            }
        });
    })
    $("#borrar-maquinaria").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/machine/machine";
        var id = $("#escribir-id-cuadros-maquinaria").val();
        $("#tabla.maquinaria tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "DELETE",
            data: JSON.stringify({id:id}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    $("#agregar-maquinaria-boton").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/machine/machine";
        var idMaquinaria = parseInt($("#escribir-id-maquinaria").val());
        var marcaMaquinaria = $("#escribir-marca-maquinaria").val();
        var modeloMaquinaria = parseInt($("#escribir-modelo-maquinaria").val());
        var categoryIdMaquinaria = parseInt($("#escribir-category-maquinaria").val());
        var nombreMaquinaria = $("#escribir-nombre-maquinaria").val();
        $("#tabla.maquinaria tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "POST",
            data: JSON.stringify({ "id":idMaquinaria, "brand":marcaMaquinaria, "model":modeloMaquinaria, "category_id":categoryIdMaquinaria, "name": nombreMaquinaria }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })
    $("#actualizar-maquinaria-boton").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/machine/machine";
        var idMaquinaria = parseInt($("#escribir-id-maquinaria").val());
        var marcaMaquinaria = $("#escribir-marca-maquinaria").val();
        var modeloMaquinaria = parseInt($("#escribir-modelo-maquinaria").val());
        var categoryIdMaquinaria = parseInt($("#escribir-category-maquinaria").val());
        var nombreMaquinaria = $("#escribir-nombre-maquinaria").val();
        $("#tabla.maquinaria tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "PUT",
            data: JSON.stringify({ "id":idMaquinaria, "brand":marcaMaquinaria, "model":modeloMaquinaria, "category_id":categoryIdMaquinaria, "name": nombreMaquinaria }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    
    $("#actualizar-tablacliente-boton").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        $("#tabla.cliente tbody").empty();
        $.ajax({            
            url: urlServicio,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function (result) {
                console.log("Entre a invocar el servicio REST");
                console.log(result.items);
                var i = 0;
                var id = 0;
                var nombre = "";
                var email = "";
                var edad = 0;
                var salidaFila = "";

                $("#tabla-cliente tbody").empty();

                salidaFila = "<tr><th>ID Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>";
                $("#tabla-cliente tbody").append(salidaFila);

                for (i = 0; i < result.items.length; i++) {
                    id = result.items[i]["id"];
                    nombre = result.items[i]["name"];
                    email = result.items[i]["email"];
                    edad = result.items[i]["age"]

                    salidaFila = "<tr><td>" + id + "</td><td>" +
                        nombre + "</td><td>" + email + "</td><td>" + edad + "</td></tr>";

                    $("#tabla-cliente tbody").append(salidaFila);

                }//Fin del for


                        //Fin del selector success del AJAX
            }
        });
    })
    $("#borrar-cliente").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        var id = $("#escribir-id-cuadros-cliente").val();
        $("#tabla.cliente tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "DELETE",
            data: JSON.stringify({id:id}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    $("#agregar-cliente-boton").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        var idCliente = parseInt($("#escribir-id-cliente").val());
        var nombreCliente = $("#escribir-nombre-cliente").val();
        var emailCliente = $("#escribir-email-cliente").val();
        var edadCliente = parseInt($("#escribir-edad-cliente").val());
        $("#tabla.cliente tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "POST",
            data: JSON.stringify({ "id":idCliente, "name":nombreCliente, "email":emailCliente, "age":edadCliente }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })
    $("#actualizar-cliente-boton").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        var idCliente = parseInt($("#escribir-id-cliente").val());
        var nombreCliente = $("#escribir-nombre-cliente").val();
        var emailCliente = $("#escribir-email-cliente").val();
        var edadCliente = parseInt($("#escribir-edad-cliente").val());
        $("#tabla.cliente tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "PUT",
            data: JSON.stringify({ "id":idCliente, "name":nombreCliente, "email":emailCliente, "age":edadCliente }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })

    $("#actualizar-tabla-mensaje").click(function () {
        console.log("Hola");
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        $("#tabla.mensaje tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function (result) {
                console.log("Entre a invocar el servicio REST");
                console.log(result.items);
                var i = 0;
                var id = 0;
                var mensaje = "";
                var salidaFila = "";

                $("#tabla-mensaje tbody").empty();

                salidaFila = "<tr><th>ID Mensaje</th><th>Mensaje</th></tr>";
                $("#tabla-mensaje tbody").append(salidaFila);

                for (i = 0; i < result.items.length; i++) {
                    id = result.items[i]["id"];
                    mensaje = result.items[i]["messagetext"];

                    salidaFila = "<tr><td>" + id + "</td><td>" +
                        mensaje + "</td></tr>";

                    $("#tabla-mensaje tbody").append(salidaFila);

                            }//Fin del for


                            //Fin del selector success del AJAX
            }
        });
    })
$("#borrar-mensaje-boton").click(function () {
    console.log("hola");
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        var id = $("#escribir-id-cuadros-mensaje").val();
        $("#tabla.mensaje tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "DELETE",
            data: JSON.stringify({id:id}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    $("#agregar-mensaje-boton").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        var idMensaje = parseInt($("#escribir-id-mensaje").val());
        var mensaje = $("#escribir-mensaje-mensaje").val();
        $("#tabla.mensaje tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "POST",
            data: JSON.stringify({ "id":idMensaje, "messagetext":mensaje}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })
    $("#actualizar-mensaje-boton").click(function () {
        var urlServicio = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        var idMensaje = parseInt($("#escribir-id-mensaje").val());
        var mensaje = $("#escribir-mensaje-mensaje").val();
        $("#tabla.mensaje tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "PUT",
            data: JSON.stringify({ "id":idMensaje, "messagetext":mensaje}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })

    $("#buscar-id-maquinaria").click(function(){
        var uriServicioBusqueda = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/machine/machine/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#escribir-id-cuadros-maquinaria").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax({
            url: uriServicioBusqueda + id,
            type: "GET", 
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function(result){
                var i = 0;
                var id = 0;
                var marca = "";
                var modelo = 0;
                var categoryId = 0;
                var estructuraFila = "";
                var nombre = "";
                resultadoConsulta = result.items;

                $("#tabla-maquinaria tbody").empty();

                salidaFila = "<tr><th>ID maquinaria</th><th>Marca</th><th>Modelo</th><th>Category_ID</th><th>Nombre</th></tr>";
                $("#tabla-maquinaria tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    marca = result.items[i]["brand"];
                    modelo = result.items[i]["model"];
                    categoryId = result.items[i]["category_id"]
                    nombre = result.items[i]["category_id"]
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    marca + "</td><td>" + modelo + "</td><td>" + categoryId + "</td><td>"+ nombre + "</td><tr>";
                    
                    $("#tabla-maquinaria tbody").append(estructuraFila);
                    $("#tabla-maquinaria").addClass("estiloRelleno" );
                }
                
                $("#tabla-maquinaria tbody").show();

            }});

    });
    //Fin del selector  del boton de busqueda
    $("#buscarid-cliente").click(function(){
        var uriServicioBusqueda = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/";
        console.log("idcliente");

        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#escribir-id-cuadros-cliente").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax({
            url: uriServicioBusqueda + id, 
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function(result){
                var i = 0;
                var id = 0;
                var nombre = "";
                var email = "";
                var edad = 0;
                var estructuraFila = "";
                resultadoConsulta = result.items;

                $("#tabla-cliente tbody").empty();

                salidaFila = "<tr><th>ID Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>";
                $("#tabla-cliente tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    nombre = result.items[i]["name"];
                    email = result.items[i]["email"];
                    edad = result.items[i]["age"]
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    nombre + "</td><td>" + email + "</td><td>" + edad + "</td></tr>";
                    
                    $("#tabla-cliente tbody").append(estructuraFila);
                    $("#tabla-cliente").addClass("estiloRelleno" );
                }
                
                $("#tabla-cliente tbody").show();

            }});

    });
    //Fin del selector  del boton de busqueda
    $("#buscarid-mensaje-boton").click(function(){
        var uriServicioBusqueda = "https://gdb28debac47cbf-db202109301409.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#escribir-id-cuadros-mensaje").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax({
            url: uriServicioBusqueda + id,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function(result){
                var i = 0;
                var id = 0;
                var mensaje = "";
                var estructuraFila = "";
                resultadoConsulta = result.items;

                $("#tabla-mensaje tbody").empty();

                salidaFila = "<tr><th>ID Mensaje</th><th>Mensaje</th></tr>";
                $("#tabla-mensaje tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    mensaje = result.items[i]["messagetext"];                   
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    mensaje + "</td></tr>";
                    
                    $("#tabla-mensaje tbody").append(estructuraFila);
                    $("#tabla-mensaje").addClass("estiloRelleno" );
                }
                
                $("#tabla-mensaje tbody").show();

            }});

    });
    //Fin del selector  del boton de busqueda
})