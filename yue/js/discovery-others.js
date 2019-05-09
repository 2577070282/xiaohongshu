(function() {

    axios.get('http://localhost:7777/discovery')
        .then(function(response) {
            console.log(response.data);
            let str = '';
            for (let id = 0; id < response.data.length; id++) {
                const element = response.data[id];
                str += `<a href="./explore.html">
                        <div class="div-img"><span class="img"><img src="${element.imgs}" alt=""></span></div>
                        <div class="div-words">
                            <p class="desc">${element.describe}</p>
                            <div class="div-love">
                                <i > </i>
                                <span>${element.love}</span>
                            </div>
                        </div>
                    </a>`;
            }
            document.querySelector('.panel-list').innerHTML = str;

        })
        .catch(function(error) {
            console.log(error);
        })

})()