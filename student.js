function cannotBeEmpty(value) {
  if (this.is_empty(value)) {
    return "cannot be empty";
  }
  return true;
}

// validate('first_name', cannotBeEmpty)

// validate('last_name', cannotBeEmpty)

// validate('email', function(value) {
//   if (this.is_empty(value)) {
//     return "cannot be empty";
//   }
//   if (!this.is_email(value))  {
//     return "is not a valid email";
//   }
//   return true;
// })

var requiredFields = ['restaurant_name', 'crust_thickness', 'crust_flavor', 'crust_texture'];

for (var i = 0; i < requiredFields.length; i++) {
  validate(requiredFields[i], cannotBeEmpty);
}

// validate('password', function(value) {
//   if (this.is_empty(value)) {
//     return "cannot be empty";
//   }
//   return true;
// })

// validate('password_confirm', function(value) {
//   if (this.is_empty(value)) {
//     return "cannot be empty";
//   }
//   return true;
// })

// validate('dream', function(value) {
//   if (this.is_empty(value)) {
//     return "cannot be empty";
//   }
//   return true;
// })

// validate('phone_number', function(value) {
//   if (!this.is_empty(value) && !this.is_phone_number(value)) {
//     return "must be in a valid format"
//   }
//   else if (!this.is_empty(value) && this.is_phone_number(value)) {
//     return true;
//   }
//   return true;
// })

validate('price', function(value) {
  if (this.is_empty(value) || this.is_price(value)) {
    return true;
  }
  return "must be a valid whole number (e.g., 9, 12)"
})

// validate('phone_number', function(value) {
//   if (!this.is_empty(value)) {
//     if ( !this.is_phone_number(value)) {
//       return "must be in a valid format"
//     }
//   }

//   return true;
// })

// validate('phone_number', function(value) {
//   if (this.is_empty(value)) {
//     return true;
//   } else {
//     if (this.is_phone_number(value) ) {
//       return true;
//     } else {
//       return "must be in a valid format"
//     }
//   }
// })

// validate('form', function(elements) {
//   if (elements['password'].value !== elements['password_confirm'].value) {
//     return "Password and Password Confirm must match.";
//   }
//   return true;
// })

