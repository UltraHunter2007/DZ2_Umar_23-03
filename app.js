var starbucks = {
    coffee: {
        espresso: {
            description: 'Эспрессо — это небольшое количество концентрированного кофе (30-40мл), приготовленного в кофемашине путём прохождения через фильтр с молотым кофе горячей воды под давлением. Вкус правильно приготовленного эспрессо поистине великолепен! Эспрессо раскрывает все уникальные оттенки и нотки вкуса различных кофейных зерен.',
            price: 2.45,
            presence: false

        },
        cappuccino: {
            description: 'Капучино — самый известный кофейный напиток на основе эспрессо. В нём сохраняется баланс: чувствуется вкус эспрессо, но он не преобладает над вкусом молока. Это золотая середина между латте и флэт уайтом и хороший вариант для первого знакомства с кофе.',
            price: 3.35,
            presence: true
        },
        americano: {
            description: 'Американо — это эспрессо с добавлением горячей воды. Допускается разбавление эспрессо водой в соотношении 1:1, 1:2 или 1:4. Классическая пропорция — 1:1, но вы можете приготовить американо так, как вам нравится. Чем больше воды, тем менее концентрированным получится напиток.',
            price: 3.55,
            presence: true
        },
        latte: {
            description: 'Латте — самый большой и самый молочный кофейный напиток на основе эспрессо. Подойдёт для тех, кто не любит яркий вкус кофе. Его готовят в чашку объёмом 250–300 мл и используют одну порцию эспрессо. Остальной объем напитка составляет молоко и немного молочной пены.',
            price: 2.95,
            presence: true
        }
    },
    tea: {
        green: {
            description: 'Зеленый чай не надоедает, хоть его вкус легко разбить на составляющие – аппетитные цветочные нотки, травянистая терпкость, и едва ощутимое карамельное послевкусие.',
            price: 1.05,
            presence: true
        },
        mint: {
            description: 'Стрессы, депрессии, гиперактивность, неврозы… Современный человек сталкивается с массой психологических и эмоциональных проблем. Чай с мятой – натуральное успокоительное средство, известное с древних времён.',
            price: 1.15,
            presence: false

        },
        white: {
            description: 'Для белого чая характерны тонкий весенний аромат и очень нежный, свежий и завораживающий цветочный вкус с фруктовыми нотками и долгим сладковатым послевкусием.',
            price: 1.10,
            presence: true
        },
        black: {
            description: 'Вкус чёрного чая лишён горечи, настой имеет оранжевый или красный цвет. Чай обладает сложным действием, одновременно тонизирующим и успокаивающим.',
            price: 1.00,
            presence: true
        }
    }
}

var teaOrCoffee = prompt('Хотите ли вы заказать чай или кофе?').toLowerCase()
if (teaOrCoffee === 'чай') {
    var teaType = prompt('Какой чай вы бы хотели заказать?').toLowerCase()
    if (teaType === 'зеленый') {
        if (starbucks.tea.green.presence === true) {
            console.log('Вот ваш заказ. Цена этого продукта -  $1.05. Пожалуйста, оплатите.')
            var money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.tea.green.price) {
                console.log('Можете брать ваш заказ. Приходите еще!')
            } else if (money > starbucks.tea.green.price) {
                change = money - starbucks.tea.green.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            } else if (money < starbucks.tea.green.price) {
                debt = starbucks.tea.green.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        } else {
            console.log('К сожалению, этот продукт закончился.')
        }
    } else if (teaType === 'мятный') {
        if (starbucks.tea.mint.presence === true) {
            console.log('Вот ваш заказ. Цена этого продукта -  $1.15. Пожалуйста, оплатите.')
            money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.tea.mint.price) {
                console.log('Можете брать ваш заказ. Приходите еще!')
            } else if (money > starbucks.tea.mint.price) {
                change = money - starbucks.tea.mint.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            } else if (money < starbucks.tea.mint.price) {
                debt = starbucks.tea.mint.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        } else {
            console.log('К сожалению, этот продукт закончился.')
        }
    } else if (teaType === 'черный') {
        if (starbucks.tea.black.presence === true) {
            console.log('Вот ваш заказ. Цена этого продукта -  $1.00. Пожалуйста, оплатите.')
            money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.tea.black.price) {
                console.log('Можете брать ваш заказ. Приходите еще!')
            } else if (money > starbucks.tea.black.price) {
                change = money - starbucks.tea.black.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            } else if (money < starbucks.tea.black.price) {
                debt = starbucks.tea.black.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        } else {
            console.log('К сожалению, этот продукт закончился.')
        }
    } else if (teaType === 'белый') {
        if (starbucks.tea.white.presence === true) {
            console.log('Вот ваш заказ. Цена этого продукта -  $1.10. Пожалуйста, оплатите.')
            money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.tea.white.price) {
                console.log('Можете брать ваш заказ. Приходите еще!')
            } else if (money > starbucks.tea.white.price) {
                change = money - starbucks.tea.white.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            } else if (money < starbucks.tea.white.price) {
                debt = starbucks.tea.white.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        } else {
            console.log('К сожалению, этот продукт закончился.')
        }
    } else {
        alert('К сожалению у нас нет такого чая. Выберите другой.')
    }
}else if (teaOrCoffee === 'кофе'){
    coffeeType = prompt('Какой кофе вы бы хотели заказать?').toLowerCase();
    if (coffeeType === 'эспрессо'){
        if (starbucks.coffee.espresso.presence === true){
            console.log('Вот ваш заказ. Цена этого продукта -  $2.45. Пожалуйста, оплатите.')
            money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.coffee.espresso.price){
                console.log('Можете брать ваш заказ. Приходите еще!')
            }else if (money > starbucks.coffee.espresso.price){
                change = money - starbucks.coffee.espresso.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            }else if (money < starbucks.coffee.espresso.price){
                debt = starbucks.coffee.espresso.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        }else{
            console.log('К сожалению, этот продукт закончился.')
        }
    }else if (coffeeType === 'капуччино') {
        if (starbucks.coffee.cappuccino.presence === true) {
            console.log('Вот ваш заказ. Цена этого продукта -  $3.35. Пожалуйста, оплатите.')
            money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.coffee.cappuccino.price){
                console.log('Можете брать ваш заказ. Приходите еще!')
            }else if (money > starbucks.coffee.cappuccino.price){
                change = money - starbucks.coffee.cappuccino.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            }else if (money < starbucks.coffee.cappuccino.price){
                debt = starbucks.coffee.cappuccino.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        }else{
            console.log('К сожалению, этот продукт закончился.')
        }
    }else if (coffeeType === 'американо') {
        if (starbucks.coffee.americano.presence === true) {
            console.log('Вот ваш заказ. Цена этого продукта -  $3.55. Пожалуйста, оплатите.')
            money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.coffee.americano.price){
                console.log('Можете брать ваш заказ. Приходите еще!')
            }else if (money > starbucks.coffee.americano.price){
                change = money - starbucks.coffee.americano.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            }else if (money < starbucks.coffee.americano.price){
                debt = starbucks.coffee.americano.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        }else{
            console.log('К сожалению, этот продукт закончился.')
        }
    }else if (coffeeType === 'латте') {
        if (starbucks.coffee.latte.presence === true) {
            console.log('Вот ваш заказ. Цена этого продукта -  $2.95. Пожалуйста, оплатите.')
            money = Number(prompt('Введите количество денег в долларах.'))
            if (money === starbucks.coffee.latte.price){
                console.log('Можете брать ваш заказ. Приходите еще!')
            }else if (money > starbucks.coffee.latte.price){
                change = money - starbucks.coffee.latte.price
                console.log('Вот ваша сдача. Можете брать ваш заказ. Приходите еще!')
            }else if (money < starbucks.coffee.latte.price){
                debt = starbucks.coffee.latte.price - money
                console.log('Залпатите еще ' + debt + ' и можете брать заказ.')
            }else{
                console.log('Это не похоже на доллары. Пожалуйста, заплатите долларами')
            }
        }else{
            console.log('К сожалению, этот продукт закончился.')
        }
    }else{
        alert('К сожалению у нас нет такого кофе. Пожалуйста, выберите другой.')
    }
}else {
    alert('Вы можете выбрать только чай или кофе.')
}