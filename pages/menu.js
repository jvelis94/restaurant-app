import React, {useContext, useEffect, useState} from 'react'
import menuItems from '../data/MenuItems'
import MenuItem from '../components/MenuItems/MenuItem'
import MenuNav from '../components/UI/MenuNav'
import MenuSearch from '../components/UI/MenuSearch'
import Cart from './cart'
import OrderContext from '../store/order-context'



const Menu = (props) => {
    const menuItems = ["Appetizers", "Wings", "Burgers", "Sides", "Beers", "Cocktails", "Salads", "Sweets"]
    const [activeCategory, setActiveCategory] = useState('Appetizers');
    const [currentSearchResults, setCurrentSearchResults] = useState([])
    const [openSearchResults, setOpenSearchResults] = useState(false);
    const ctx = useContext(OrderContext)

    const changeActiveItem = (category) => {
      setActiveCategory(category)
    }

    const handleMenuSearchInput = (searchInput) => {
      if (searchInput.length > 2) {
        setOpenSearchResults(true)
        let searchResults = props.data.filter(item => {
          let itemFlattened = item.name.toLowerCase()
          return itemFlattened.includes(searchInput.toLowerCase())
        })
        setCurrentSearchResults(searchResults)
      } else {
        setOpenSearchResults(false)
      }
    }
  
    const handleCloseSearchResults = () => {
      setOpenSearchResults(false);
    };

    
    const searchResultsContainer = (
      <div>
          {currentSearchResults.map(item => (
            <MenuItem key={item.name} item={item} />
          ))}
      </div>
    )

    const allResultsFilterable = (
      <div>
        <MenuNav categories={menuItems} activeCategory={activeCategory} changeActiveItem={changeActiveItem}/>
        {props.data.filter(item => item.category === activeCategory).map(item => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    )
    

    return (
      <div>
        <div>
          <MenuSearch handleMenuSearchInput={handleMenuSearchInput} handleCloseSearchResults={handleCloseSearchResults}/>
          { openSearchResults ? searchResultsContainer : allResultsFilterable }
        </div>
        <div>
          <Cart orders={ctx.orders}/>
        </div>
      </div>
    )
}

export async function getStaticProps(context) {
    return {
      props: {
        data: menuItems,
      },
    };
  }



export default Menu