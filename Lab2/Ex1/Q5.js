const fs = require('fs')

const user = {
  id: 19522026,
  name: 'Dang Hai Trang Phuc',
  age: 21
}

const data = JSON.stringify(user)

fs.writeFile('user.json', data, err => {
  if (err) {
    throw err
  }
  console.log('Data of JSON is saved!')
})

