document.addEventListener("DOMContentLoaded", function(event) {
    init();
});

const init = () => {
    addListeners();
};


const addListeners = () => {
    const service = new Service();
    const getFibBtn = document.getElementById('getFib');
    const getFibInput = document.getElementById('getFibInput');
    getFibBtn.addEventListener('click', (event)=> {
       const fibValue = getFibInput.value;
       service.getFibData(fibValue);
    });
};


class Service {
    getFibEndpoint: string = '';
    getFibResultEndpoonit: string = '';

    getFibData = (number) => {
        // http call
        console.log(number);
    };

    getFibResults = () => {
        // http call
    };
}
