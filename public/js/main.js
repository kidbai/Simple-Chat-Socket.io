$(function (){
    var socket = io();
    $('form').submit(function (){
        socket.emit('send message', $('input').val());
        $('input').val('');
        return false;
    });
    socket.on('send message', function (msg){
        console.log(msg);
        // $('#content').append("<p>" + msg + "</p>");
    }); 
});
