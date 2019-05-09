(function() {
    document.querySelector('.register').onclick = function() {
        let tel = document.querySelector('#tel').value;
        let password = document.querySelector('#password').value;
        // 使用axios发起ajax请求
        axios.post('http://localhost:7777/signin', {
            tel: tel,
            password: password
        }).then(function(response) {
            // 服务器端响应的内容不会直接出现在浏览器页面上
            console.log(response);
            // js各种操作
            if (response.data.r == 'tel_not_exist') {
                alert('账号不存在');
                return;
            }
            if (response.data.r == 'password_err') {
                alert('密码错误');
                return;
            }
            window.location.href = './explore.html';

        }).catch(function(err) {
            console.log(err);
        });
    }
})()