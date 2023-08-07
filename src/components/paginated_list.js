"use client"

import {useEffect, useState} from "react"
import PageNumbers from "./page_numbers"

const ITEMS_PER_PAGE = 10

const PaginatedList = (
  {itemList, itemRowFunc, selectedItemId, setSelectedItem}
) => {
  let pageCount
  if (itemList && itemList.length) {
    pageCount = Math.ceil(itemList.length/ITEMS_PER_PAGE)
  } else {
    pageCount = 0
  }

  const [selectedPage, setSelectedPage] = useState(1)
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    // TODO: This is inefficient. Make it better
    let matchedItem = null
    if (itemList) {
      itemList.forEach(item => {
        if(item.id === selectedItemId) {
          matchedItem = item
        }
      })
    }
    setSelectedItem(matchedItem)
  }, [selectedItemId, itemList, setSelectedItem])

  useEffect(() => {
    if(itemList) {
      const initialIndex = (selectedPage-1) * ITEMS_PER_PAGE
      let availableItems = itemList.slice(initialIndex, initialIndex+ITEMS_PER_PAGE)

      let emptyItemCount = 0
      while (availableItems.length < ITEMS_PER_PAGE) {
        availableItems.push(emptyItemCount)
        emptyItemCount = emptyItemCount + 1
      }
      setVisibleItems(availableItems)
    }
  }, [selectedPage, itemList])

  if(!visibleItems || visibleItems.length === 0) {
    return <></>
  }

  return <>
    {visibleItems.map((item, index) => {
      if (item && item.id) {
        const showTopBorder=(index == 0)
        return itemRowFunc(item, showTopBorder)
      } else {
        return <div key={`blank_${item}`} className="h-[51px] col-span-7"></div>
      }
    })}
    <div className="col-span-4">
      <PageNumbers
        pageCount={pageCount}
        selectedPage={selectedPage}
        handlePageSelected={(pageNumber) => {setSelectedPage(pageNumber)}}
      />
    </div>
    <div className="col-span-3"></div>
  </>
}

export default PaginatedList
