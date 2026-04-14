// src/component/RupeesConvter/Conveter.jsx

export const convertToRupees = (price) => {
  return Math.floor((Number(price) || 0) * 80)
}