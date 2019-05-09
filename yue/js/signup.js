(function() {
    document.querySelector('.reg').onclick = function() {
        // 获取表达里面的数据
        let tel = document.querySelector('#tel').value;
        let password = document.querySelector('#password').value;
        // 发起ajax请求
        axios.defaults.baseURL = 'http://localhost:7777';
        axios.post('/reg', {
                tel: tel,
                password: password
            })
            .then(function(response) {
                window.location.href = './signin.html';
                // if (response.result == 'ok') {
                //     // alert('注册成功');
                //     window.location.href = './signin.html';
                // }
            })
            .catch(function(error) {
                console.log(error);
            });
    }
})()