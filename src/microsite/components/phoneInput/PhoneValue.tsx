import React from "react";

export const PhoneValue = ({phone} : {phone: string[]}) => (
<>
 {phone.map ((digit, index) => {
   if (!digit) return '_'
   if (index === 0) return digit + '('
   if (index === 3) return digit + ')'
   if (index === 6) return digit + '-'
   if (index === 8) return digit + '-'
   return digit
 })}

</>
)