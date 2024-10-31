$(document).ready(function () {
    $('#bt1').hover(
        function () {
            $('#home').hide();
            $(this).text('首頁')
        },
        function(){
            $('#home').show();
            $(this).html('<img src="./img/home.png" alt="首頁" id="home">')
        }
    )
    $('#bt2').hover(
        function () {
            $('#map').hide();
            $(this).text('地圖')
        },
        function(){
            $('#map').show();
            $(this).html('<img src="./img/maps-and-flags.png" alt="地圖" id="map">')
        }
    )
    $('#bt3').hover(
        function () {
            $('#comment').hide();
            $(this).text('我的留言')
            $('.account-nav').show();
        },
        function(){
            $('#comment').show();
            $('.account-nav').hide();
            $(this).html('<img src="./img/chat.png" alt="我的留言" id="comment">')
        }
    )
    $('#bt4').hover(
        function () {
            $('#user').hide();
            $(this).text('帳號')
        },
        function(){
            $('#user').show();
            $(this).html('<img src="./img/user.png" alt="帳號" id="user">')
        }
    )
});
