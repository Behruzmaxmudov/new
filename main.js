
//  login : Behruz
//  parol : Maxmudov

let x = prompt('Kimsiz:') 

if (x == 'Behruz') {
    let a =  prompt('Parol:')
    if (a == 'Maxmudov') {
        document.write('Welcome !')
    } else if (a == null) {
        document.write('Canceled !')
    } else {
        document.write('Xatolik !')
    }
} else if (x == null) {
    document.write('Canceled !')
} else {
    document.write('Bunday foydalanuvchi yo\q !')
}