(function() {
    const btn = document.querySelectorAll(".btn")
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#name')
    const customerText = document.querySelector('#para')

    let index = 0
    const customers = []
    
    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'John', 'lorem hsahj asjkjkf asfjjo dsdoihf fgefyugogun gn uwqoiwufjd pg')
    createCustomer(1, 'Sandy', 'lorem there are many possibility that i will work')
    createCustomer(2, 'Tony', 'lorem this javascript language is the best i am loving it ')
    createCustomer(3, 'Robert', 'lorem I am a smart person i build amazon clone. Now i am learning backend programming.')

    btn.forEach(function(button){
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('btnleft')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('btnright')){
                index++
                if(index === customers.length){
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

} )(); 