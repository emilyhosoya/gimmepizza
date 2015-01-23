function cannotBeEmpty(value) {
  if (this.is_empty(value)) {
    return "cannot be empty";
  }
  return true;
}

validate('restaurant_name', cannotBeEmpty);



// function radiosNotEmpty(name) {
//     if (checkRadio(document.forms[name])) {
//         return true;
//     } else {
//         return "must have one selected!";
//     }
// }
// function checkRadio(name) {
//     var radio = document.forms[name];
//     for (var option in radio) {
//         if (radio[option].checked) {
//             return true;
//         }
//     }
//     return false;
// }

// var requiredRadios = ['crust_thickness', 'crust_flavor', 'crust_texture'];

// for (var i = 0; i < requiredRadios.length; i++) {
//   validate(requiredRadios[i], radiosNotEmpty);
// }


validate('price', function(value) {
  if (this.is_empty(value) || this.is_price(value)) {
    return true;
  }
  return "must be a valid number"
})



validate('form', function(elements) {
  if (!elements['crust_thickness'].value || !elements['crust_flavor'].value || !elements['crust_texture'].value) {
    return "You must select an option for each crust category";
  }
  return true;
})
