import { WidgetItemsData } from "@/app/modal/_data/widgetItems"

const filterItems = (
  allItems: WidgetItemsData[],
  currentFormData: string | string[] | undefined
): (WidgetItemsData[] | undefined) => {
  if (!currentFormData?.length) return undefined

  if (Array.isArray(currentFormData)) {
    return allItems.filter((item) => {
      const { value } = item
      return value && currentFormData.includes(value)
    })
  } else {
    const match = allItems.find((item) => item.value === currentFormData)
    return match ? [ match ] : undefined
  }
}

export default filterItems
