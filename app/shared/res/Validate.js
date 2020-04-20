export function validateEmail(emailId) {
  let isValid = false
  if (emailId.length === 0 || emailId.length < 10 || emailId.length > 50) {
    isValid = false
  }
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const pattern = regex

  if (!pattern.test(emailId)) {
    isValid = false
  } else {
    const strEmail = emailId.substring(emailId.indexOf('@') + 1, emailId.length)
    const reversed = strEmail.split('').join('')
    const str = reversed.split('.')
    if (str.length !== undefined && str.length > 1 && str.length < 4) {
      if (str.length === 2) {
        // gmail.com
        if (str[0].length > 1 && str[1].length > 1 && str[1].length < 4) {
          isValid = true
        } else {
          isValid = false
        }
      } else if (str.length === 3) {
        // gmail.com.com
        if (
          str[0].length > 1 &&
          str[1].length > 1 &&
          str[1].length < 4 &&
          str.length > 2 &&
          str[2] !== undefined &&
          str[2].length > 1 &&
          str[2].length < 4
        ) {
          isValid = true
        } else {
          isValid = false
        }
      }
    } else {
      isValid = false
    }
  }
  return isValid
}

export const validPasswordLength = password => {
  let isValid = false
  if (password.length > 7 && password.length < 21) {
    isValid = true
  }
  return isValid
}

export const validPasswordSpace = password => {
  return !/\s/g.test(password)
}

export const validPasswordSmallAlphabet = password => {
  const regex = new RegExp(/^(?=.*[a-z])/)
  return regex.test(password)
}

export const validPasswordCapitalAlphabet = password => {
  const regex = new RegExp(/^(?=.*[A-Z])/)
  return regex.test(password)
}

export const validPasswordDigits = password => {
  const regex = new RegExp(/^(?=.*[0-9])/)
  return regex.test(password)
}

export const validPasswordSpecialCharacter = password => {
  const regex = new RegExp(/^(?=.*[!@#*])/)
  // const regex = new RegExp(`^[a-zA-Z0-9 ,@.%&]{${8},${20}}$`);
  return regex.test(password)
}

export const validFullName = name => {
  const regex = new RegExp(/^[a-zA-Z ]+$/)
  return regex.test(name)
}

export const validIfscCode = code => {
  const regex = new RegExp('^[A-Za-z]{4}0[A-Z0-9a-z]{6}$')
  return regex.test(code)
}

export const validAccountNumber = code => {
  const regex = new RegExp('[0-9]{9,18}')
  return regex.test(code)
}

export const validateMobNumLength = number => {
  let isValid = false
  if (number.length === 10) {
    isValid = true
  }
  return isValid
}

export const validateMobNum = number => {
  const re = /^[0][5-9]\d{9}$|^[5-9]\d{9}$/
  const mFormat = /([0-9]).*?\1{6,}/ // Bharat duplicate digit check || 6 duplicate digits are allowed to enter
  return re.test(number) && !mFormat.test(number) // Bharat\
}

export const validateOnlyNumbers = number => {
  const regex = new RegExp(/^[0-9]+$/)
  return regex.test(number)
}

export const validateOnlyNumbersExceptDot = number => {
  const regex = new RegExp(/^\d+(\.\d{1,2})?$/)
  return regex.test(number)
}

export const validateAlphanumericWithSpace = string => {
  const reg = /^[A-Za-z\d\s]+$/
  return reg.test(string)
}

export const validateAlphanumericWithoutSpace = string => {
  const reg = /^[a-zA-Z0-9]*$/
  return reg.test(string)
}

export const validatePanCard = string => {
  const reg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
  return reg.test(string)
}

export const addressDetailsValidation = string => {
  // Only ". , / -" char allowed
  // const reg = new RegExp(/^[^-\s][a-zA-Z0-9\s.,/-]+$/);
  const reg = new RegExp(/^[a-zA-Z0-9\s.,/-]+$/)
  // const reg = /[.,/-]+$/;
  return reg.test(string)
}

export const personalDetailsValidation = string => {
  // Only Dots "." char allowed
  const reg = new RegExp(/[^a-zA-Z\s.]/)
  return reg.test(string)
}

export const validateRedemptionUnits = val => {
  const reg = /^[1-9]\d*(((\d{3}){1})?(\.\d{0,4})?)$/
  return reg.test(val)
}

export const validateRedemptionAmount = val => {
  const reg = /^\d+$/
  return reg.test(val)
}
