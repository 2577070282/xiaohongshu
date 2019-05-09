(function() {

    axios.get('http://localhost:7777/profile')
        .then(function(response) {
            console.log(response.data);
            let str = '';
            for (let id = 0; id < response.data.length; id++) {
                const element = response.data[id];
                str += `<div class="show" >
            <!-- 头部 -->
            <div class="show-heard">
                <a href="./discovery.html"> <img src="${element.img}" alt=""></a>
                <h3>${element.describe}</h3>
            </div>
            <!-- 底部，作者介绍 -->
            <div class="show-body">
                <div class="show-author">
                    <div class="show-img">
                        <a href="./discovery.html"><img src="${element.heard}" alt=""></a>
                    </div>
                    <div class="show-name">
                        <span>${element.name}</span>
                    </div>
                </div>
                <div class="show-bottom">
                    <i></i>
                    <span>${element.love}</span>
                </div>
            </div>

        </div>`;
            }
            document.querySelector('.author-massage').innerHTML = str;
            pubuliu();
        })
        .catch(function(error) {
            console.log(error);
        })

})()