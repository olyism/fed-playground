const getNewData = (
  prevData: string | string[],
  newValue: string,
): (undefined | string | string[]) => {
  if (Array.isArray(prevData)) {
    if (prevData.includes(newValue)) {
      return prevData.filter((value) => value !== newValue)
    } else {
      return [ ...prevData, newValue]
    }
  } else {
    return prevData === newValue ? undefined : newValue
  }
}

export default getNewData
