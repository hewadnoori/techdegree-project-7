document.addEventListener('DOMContentLoaded', () => {
    const alerty = document.querySelector(".alert");
    console.log(alerty);

    alerty.addEventListener('click', (e) => {
        const close = e.target.textContent;
        console.log(close);
        if (close === "x") {
            alerty.className = 'hidden';
        }
    });

    // alerty.addEventListener('click', (e) => {
    //     const close = event.target;
    //     console.log(close);
    //     if (close === "x") {
    //         alert.className = 'hidden';
    //     }
    // })






})
