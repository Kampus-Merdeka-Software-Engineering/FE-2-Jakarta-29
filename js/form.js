
const form = document.querySelector('form');
const url = "https://mhealth.cyclic.app/kritik/create";

document.getElementById('submit-button').addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const kritik = document.getElementById('kritik').value;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({name, kritik}),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })

    const result = await response.json()
    console.log(result)

    document.getElementById('name').value = '';
    document.getElementById('kritik').value = '';
})
