const main = document.querySelector('main');
const url = "https://www.kayak.com";
const filters = document.querySelectorAll('input')


function invalidCallbackFunctionName(data) {
    runDOM(data) 
}

function runDOM (data) {
    main.innerHTML = '';
    createElement(data);
    allEvents(data);
}

function createElement (data) {

    for (let i = 0; i < data.length; i++) {
        const el = data[i];

        main.innerHTML += `
        <div class="card ${el.alliance}">
            <img src="${url}${el.logoURL}" alt="" srcset="">
            <div class="desc">
                <h4 class="name">${el.name}</h4>
                <div class="details">
                    <p class="alliance">${el.alliance}</p>
                    <p class="number">${(() => {
                        if (el.phone == "") {
                            return "Number not available"
                        } else {return el.phone}
                    })()}</p>
                    <a href="${el.site}" class="site" target= "_blank">Check here</a>
                </div>
            </div>
        </div>
        `   
    }

}

function allEvents (data) {
    let checked = [];
    const cards = document.querySelectorAll('.card');
    filters.forEach((filter) => {
        filter.onclick = (e) => {
            if (e.target.checked) {
                checked.push(e.target.value)
            } else {
                checked.splice(checked.indexOf(e.target.value), 1)
            }

            cards.forEach((card) => {
                card.style.display = "none"

                if (checked.length == 0) {
                    card.style.display = "flex"
                } else {
                    checked.forEach((value) => {
                        if (card.classList.contains(value)) {
                            card.style.display = "flex"
                        }
                    })
                }
            })
        }
    })



    // const OWData = data.filter((el) => el.alliance == "OW");

    // const STData = data.filter((el) => el.alliance == "ST");

    // const SAData = data.filter((el) => el.alliance == "SA");
    // let count = 0;
    

    // filters.forEach((filter) => {
    //     filter.onchange = (e) => {

    //         if (count < 1) {
    //             main.innerHTML= "";
    //         }

    //         console.log(count);

    //         if (e.target.checked == true && e.target.value == "OW") {
    //             createElement(OWData)
    //             count++;  
    //             console.log(count);
    //         } else if (e.target.checked == true && e.target.value == "ST") {
    //             createElement(STData)
    //             count++;
    //         } else if (e.target.checked == true && e.target.value == "SA") {
    //             createElement(SAData)
    //             count++;
    //         } else if (filter.checked == false) {
    //             count = 0;
    //             main.innerHTML= "";
    //             createElement(data)
    //         }


            
    //     }
    // })
}