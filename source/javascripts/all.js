//= require ./all_nosearch
//= require ./app/_search


document.addEventListener("DOMContentLoaded", () => {

    
    const lastLangElements = document.getElementsByClassName("lang-selector")[1].childNodes;

    console.log(lastLangElements[lastLangElements.length - 1])
    lastLangElements[lastLangElements.length - 2].innerText = "Simulate"

    const rootElements = Array.prototype.slice.call(document.getElementsByClassName("highlight http tab-http"))

    rootElements.map(element => {


        const url = element.children[0].innerText.split('\n')[0]
                                    .replace("https://{defaultHost}", "http://docker-01.staging.ifad.org:8092")
                                    .replace("GET ", "")
                                    .replace(" HTTP/1.1", "");


        console.log(url)
        const matches = url.match(/\{\w+\}/g);
        if (matches)
            matches.forEach(match => {
                const name = match.replace(/(^\{|\}$)/g, '');
                const input = document.createElement('input');
                input.name = name;
                input.id = "input-" + name;
                input.style.color = "black";
                input.style.margin = "10px";
                const label = document.createElement('label');
                label.innerText = name + " :";
                label.for = name;

                const linebreak = document.createElement("br");

                element.appendChild(label);
                element.appendChild(input);
                element.appendChild(linebreak);

            });

        const button = document.createElement('button');
        button.innerText = "SEND"
        button.style.color = "black";
        button.onclick = () => {
            let targetURL = url
            const oldCotainer = document.getElementById("result-container");

            if (oldCotainer)
                oldCotainer.remove();

            if (matches)
                matches.forEach(match => {
                    const name = match.replace(/(^\{|\}$)/g, '');
                    const value = document.getElementById("input-" + name).value;
                    targetURL = targetURL.replace(match, value)

                });

            const container = document.createElement('div');
            container.id = "result-container";
            container.style.margin = "10px";
            container.style.marginLeft = "10px";
            container.style.maxHeight = "200px";
            element.appendChild(container);

            fetch(targetURL)
                .then((response) => {
                    const linebreak = document.createElement("br");
                    const status = document.createElement('span');
                    status.innerText = "Status :" + response.status;
                    document.getElementById("result-container").appendChild(status);
                    const statusText = document.createElement('span');
                    statusText.innerText = "Content :" + response.statusText;
                    document.getElementById("result-container").appendChild(linebreak);
                    document.getElementById("result-container").appendChild(statusText);
                    return response.json()
                })
                .then((data) => {
                    const linebreak = document.createElement("br");
                    const content = document.createElement('span');
                    content.innerText = "Content :" + JSON.stringify(data.data, null, 4);
                    document.getElementById("result-container").appendChild(linebreak);
                    document.getElementById("result-container").appendChild(content);
                });

        }

        element.appendChild(button);


    })


    //-----------------------------------------------------------------------------------------

    // $("td:contains('»»»»')").parent().css( "display", "none" );
    // const coll = $("td:contains('»»»')").parent();
 
    // console.log(coll)
    // var i;
    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function() {
    //     console.log(this)
    //     this.style.display === "table-row-group"
    //     let contents = []
    //     console.log()
    //     if(this.nextElementSibling.firstChild.innerText.split("").length === this.firstChild.innerText.split("").length)
    //         contents.push(this.nextElementSibling)
    //     // var contents = this.nextElementSibling;
    //     contents.forEach(content => {
    //         if (content.style.display === "table-row-group") {
    //             content.style.display = "none";
    //           } else {
    //             content.style.display = "table-row-group";
    //           }
    //     });
        
    //   });
    // }

});


//835c23f5-403e-4cbd-9fe9-906aec2f1b31
