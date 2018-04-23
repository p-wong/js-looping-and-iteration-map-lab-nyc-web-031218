// Code your solution in this file.
function lowerCaseDrivers (data) {
  return data.map (function (driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes (data) {
  return data.map (function (name) {
    return { firstName: name.split(' ')[0], lastName: name.split(' ')[1]}
  })
}

function attributesToPhrase (data) {
  return data.map (function (name) {
    return `${name.name} is from ${name.hometown}`
  })
}
