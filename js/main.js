// ---------------------------------------------------------------------------------- //
// -- Mostrar e Esconder Sessões: Site / Blog / Downloads / Agenda / Área Restrita -- //
// ---------------------------------------------------------------------------------- //


function mostrarSite(){
    $("#site").show();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").hide();
}

function mostrarEquipe(){
    $("#site").hide();
    $("#equipe").show();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").hide();
}

function mostrarClientes(){
    $("#site").hide();
    $("#equipe").hide();
    $("#clientes").show();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").hide();
}

function mostrarBlog(){
    $("#site").hide();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").show();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").hide();
}

function mostrarDownload(){
    $("#site").hide();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").show();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").hide();
}

function mostrarAgenda(){
    $("#site").hide();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").show();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").hide();
}

function mostrarPodcast(){
    $("#site").hide();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").show();
    $("#arearestrita").hide();
    $("#registro").hide();
}

function mostrarAreaRestrita(){
    $("#site").hide();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").show();
    $("#registro").hide();
}

function mostrarRegistro(){
    $("#site").hide();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").show();
}

$(function(){
    $("#site").show();
    $("#equipe").hide();
    $("#clientes").hide();
    $("#blog").hide();
    $("#download").hide();
    $("#agenda").hide();
    $("#podcast").hide();
    $("#arearestrita").hide();
    $("#registro").hide();
});