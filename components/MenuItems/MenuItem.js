import menuItems from '../../data/MenuItems';
import styles from './MenuItem.module.css'
import Image from 'next/image'
import appetizers from '../../public/thumbnails/appetizers.jpg'
import beers from '../../public/thumbnails/beers.jpg'
import burgers from '../../public/thumbnails/burgers.jpg'
import cocktails from '../../public/thumbnails/cocktails.jpg'
import salads from '../../public/thumbnails/salads.jpg'
import sides from '../../public/thumbnails/sides.jpg'
import sweets from '../../public/thumbnails/sweets.jpg'
import wings from '../../public/thumbnails/wings.jpg'

const MenuItem = (props) => {
    const { name, label, category, blurb, abv, details, origin, price, rating } = props.item
    let nameSplit = name.split(' ')
    let nameCapiTalizedEachWord = nameSplit.map(word => `${word[0].toUpperCase()}${word.substring(1)}`).join(' ')

    const menuItemImages = {
        "Appetizers": appetizers,
        "Wings": wings,
        "Burgers": burgers,
        "Sides": sides,
        "Beers": beers,
        "Cocktails": cocktails,
        "Salads": salads,
        "Sweets": sweets
    }

    let selectedJpgImage = menuItemImages[category]

    return (
        <div className={styles.menuItem_container}>
            <div className={styles.menuItem_image}>
                <Image 
                    src={selectedJpgImage}
                    alt="menu-item" 
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.menuItem_info}>
                <h2 className={styles.menuItem_h2}>{nameCapiTalizedEachWord}</h2>
                <p className={styles.menuItem_p}>{blurb}</p>
                <h3 className={styles.menuItem_h3}>${price}</h3>
            </div>
        </div>
    );
    
}

export default MenuItem