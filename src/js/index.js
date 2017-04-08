document.addEventListener("DOMContentLoaded", function(event) {
    Vue.component('my', {
        template: '#j-button',
        props: ['name'],
        data: function () {
            return {
                name: 'dd'
            }
        }
    })

    var root = new Vue({
        el: '#j-root',
        data: {
            name: 'cqh'
        }
    });
});
