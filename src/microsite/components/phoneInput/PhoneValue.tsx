import React from "react";

export const PhoneValue = ({phone} : {phone: string[]}) => {
  
  const phoneFormat = Array(11).fill('_').map((char, index) => phone[index] ? phone[index] : char)
  
  return (
  <>
    {phoneFormat.map((digit, index) => {
      if (index === 1) return '(' + digit;
      if (index === 3) return digit + ')'
      if (index === 6) return digit + '-'
      if (index === 8) return digit + '-'
      return digit
    })}
  </>
)}