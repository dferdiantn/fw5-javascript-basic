
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hobby: "berenang",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

    const {street, city} = data.address

    console.log({
        ...data,
        name: "Ferdi",
        email: "dwiferdiantono@gmail.com",
        hobby: "Berenang"
    })
    console.log(street)
    console.log(city)
