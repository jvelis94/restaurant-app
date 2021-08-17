const menuItems = [
    {
      name: 'meatball sundae',
      label: '',
      category: 'Appetizers',
      blurb: "grandma's meatballs, marinara & herbed ricotta whipped topping",
      details: '',
      origin: '',
      abv: '',
      price: '10',
      rating: ''
    },
    {
      name: 'jalapeno popper grilled cheese',
      label: '',
      category: 'Appetizers',
      blurb: 'on sourdough w/house bleu cheese sauce',
      details: '',
      origin: '',
      abv: '',
      price: '10',
      rating: ''
    },
    {
      name: 'pretzel pops',
      label: '',
      category: 'Appetizers',
      blurb: 'soft salty pretzel served with a dipping melty cheese sauce',
      details: '',
      origin: '',
      abv: '',
      price: '8',
      rating: ''
    },
    {
      name: 'fried buffalo mac',
      label: '',
      category: 'Appetizers',
      blurb: "crusted buffalo chicken mac n'cheese balls flash fried to perfection",
      details: '',
      origin: '',
      abv: '',
      price: '8',
      rating: ''
    },
    {
      name: 'ahi cupcakes',
      label: '',
      category: 'Appetizers',
      blurb: 'a baroness original; spicy & poke style ahi tuna in mini phyllo cups',
      details: '',
      origin: '',
      abv: '',
      price: '12',
      rating: ''
    },
    {
      name: "skillet mac n' cheese",
      label: '',
      category: 'Appetizers',
      blurb: "our infamous seven cheese n'mac uber crusted",
      details: '',
      origin: '',
      abv: '',
      price: '10',
      rating: ''
    },
    {
      name: 'pimento cheese dip',
      label: '',
      category: 'Appetizers',
      blurb: 'housemade pimento cheese ball, sides of picked & herbed Ritz',
      details: '',
      origin: '',
      abv: '',
      price: '10',
      rating: ''
    },
    {
      name: 'bone-in',
      label: '',
      category: 'Wings',
      blurb: 'mild or hot; served with house bleu cheese & picked veggies',
      details: '',
      origin: '',
      abv: '',
      price: '12',
      rating: ''
    },
    {
      name: 'boneless',
      label: '',
      category: 'Wings',
      blurb: 'mild or hot; served with house bleu cheese & picked veggies',
      details: '',
      origin: '',
      abv: '',
      price: '12',
      rating: ''
    },
    {
      name: 'spicy ahi',
      label: '',
      category: 'Salads',
      blurb: 'sushi-grade tuna, scallions, cucumber, toasted ses…s, sesame-citrus vinaigrette & carrot-celery slaw',
      details: '',
      origin: '',
      abv: '',
      price: '16',
      rating: ''
    },
    {
      name: 'julia caesar',
      label: '',
      category: 'Salads',
      blurb: "seasoned & grilled chicken, house croutons, chef's…omaine lettuce & loads of freshly grated parmesan",
      details: '',
      origin: '',
      abv: '',
      price: '15',
      rating: ''
    },
    {
      name: "choc'cuterie",
      label: '',
      category: 'Sweets',
      blurb: 'chocolate board consisting of 4 different hand-pic…e whiskey pretzel sticks. Perfect craving killer!',
      details: '',
      origin: '',
      abv: '',
      price: '12',
      rating: ''
    },
    {
      name: 'black iron cookie',
      label: '',
      category: 'Sweets',
      blurb: 'multi-layered chocolate-pocket cookies with housem…hiskey-caramel drizzle & a sweet red wine drizzle',
      details: '',
      origin: '',
      abv: '',
      price: '10',
      rating: ''
    },
    {
      name: 'Judith',
      label: '',
      category: 'Burgers',
      blurb: 'Basic Baroness Burger',
      details: "Pat LaFrieda special blend beef steamed Martin's p…lettuce, sauteed onion, beefsteak tomato, pickles",
      origin: '',
      abv: '',
      price: '14',
      rating: ''
    },
    {
      name: 'Whitney',
      label: '',
      category: 'Burgers',
      blurb: "Big Bacon Mac n' cheese",
      details: "house mac n' cheese stuffed burger wrapped in trip…ese sauce crisp pancetta bits steamed potato roll",
      origin: '',
      abv: '',
      price: '20',
      rating: ''
    },
    {
      name: 'Quinn',
      label: '',
      category: 'Burgers',
      blurb: 'Brunch Between Buns',
      details: 'an egg-cooked inside the beef; smashed hashbrown; …up; double pepperjack cheese; steamed potato roll',
      origin: '',
      abv: '',
      price: '20',
      rating: ''
    },
    {
      name: 'Suzy Q',
      label: '',
      category: 'Burgers',
      blurb: 'The Baroness BBQ Beauty',
      details: "Montreal seasoned beef burger; sharp cheddar; fres…urly fries; Chef's BBQ sauce; steamed potato roll",
      origin: '',
      abv: '',
      price: '16',
      rating: ''
    },
    {
      name: 'Yvette',
      label: '',
      category: 'Burgers',
      blurb: 'Curry Veggie Burger Delight',
      details: "Chef's chipotle black bean veggie patty; arcadian …rette; savory curry sauce; salted pretzel brioche",
      origin: '',
      abv: '',
      price: '14',
      rating: ''
    },
    {
      name: 'Dixie',
      label: 'Staff Pick',
      category: 'Burgers',
      blurb: 'An Old-School House Favorite',
      details: 'thirteen uber-secret spices; brisket short-rib pat…oasted garlic rosemary aioli; steamed potato roll',
      origin: '',
      abv: '',
      price: '13',
      rating: ''
    },
    {
      name: 'Francine',
      label: '',
      category: 'Burgers',
      blurb: 'Blooming Onion Burger',
      details: 'house seasoned blended beef patty steak sauce; fri… w/jalapeno cheese; garlic aioli; pretzel brioche',
      origin: '',
      abv: '',
      price: '16',
      rating: ''
    },
    {
      name: 'Adele',
      label: '',
      category: 'Burgers',
      blurb: 'French Onion Soup Burger',
      details: 'brisket blend burger filled with french onion soup… fresh scallions; custom made pretzel brioche bun',
      origin: '',
      abv: '',
      price: '18',
      rating: ''
    },
    {
      name: 'Kiki',
      label: 'Staff Pick',
      category: 'Burgers',
      blurb: 'Buffalo Wing Inspired Burger',
      details: 'Montreal seasoned beef patty; house buffalo sauce;…se crumbles; housemade ranch; steamed potato roll',
      origin: '',
      abv: '',
      price: '14',
      rating: ''
    },
    {
      name: 'Tina',
      label: '',
      category: 'Burgers',
      blurb: 'Peanut Butter & Black Pepper Bacon',
      details: 'brisket short-rib blend patty; smoked bacon; sharp…ddar cheese; smokey peanut sauce; sea pretzel bun',
      origin: '',
      abv: '',
      price: '18',
      rating: ''
    },
    {
      name: 'Gloria',
      label: '',
      category: 'Burgers',
      blurb: 'Bleu Cheese Au Poivre',
      details: 'our brisket blend black pepper crusted burger char…oivre sauce; crispy smoked bacon; pretzel brioche',
      origin: '',
      abv: '',
      price: '18',
      rating: ''
    },
    {
      name: 'Celine',
      label: '',
      category: 'Burgers',
      blurb: 'Bloody Mary Burger',
      details: 'montreal seasoned beef; bloody caesar sauce; picke…armesan cheese; fresh celery; pretzel brioche bun',
      origin: '',
      abv: '',
      price: '15',
      rating: ''
    },
    {
      name: 'Shoestring French Fries',
      label: '',
      category: 'Sides',
      blurb: 'seasalt & pepper seasoned',
      details: '',
      origin: '',
      abv: '',
      price: '5',
      rating: ''
    },
    {
      name: 'house salad',
      label: '',
      category: 'Sides',
      blurb: 'served with citrus vinaigrette',
      details: '',
      origin: '',
      abv: '',
      price: '5',
      rating: ''
    },
    {
      name: 'SFY',
      label: '',
      category: 'Beers',
      blurb: 'Tropical, Assertive, Lush, Oily, Candied Tangerines. Hopped with Mosaic, Simcoe & Columbus',
      details: '',
      origin: 'Brooklyn, NY',
      abv: '8.3',
      price: '10',
      rating: '4'
    },
    {
      name: 'Liquid Sorcery',
      label: '',
      category: 'Beers',
      blurb: 'A juicy smooth IPA. Aromas of melon, cantaloupe ri…lon, strawberry, notes of of pineapple and candy.',
      details: '',
      origin: 'Hopewell Junction, NY',
      abv: '6',
      price: '9',
      rating: '4'
    },
    {
      name: 'Fly Like',
      label: '',
      category: 'Beers',
      blurb: 'Juicy yet dry, spritzy, and refreshing. Brewed wit…mplementary citrus character. Super sessionable.\n',
      details: '',
      origin: 'Brooklyn, NY',
      abv: '4',
      price: '10',
      rating: '3.8'
    },
    {
      name: 'Ultrasphere',
      label: '',
      category: 'Beers',
      blurb: 'Sour IPA w/ raw wheat, malted oat, milk sugar, raspberry & vanilla; hopped w/ Citra & Mosaic',
      details: '',
      origin: 'Beacon, NY',
      abv: '6',
      price: '10',
      rating: '4.5'
    },
    {
      name: 'Ultimate Beats',
      label: '',
      category: 'Beers',
      blurb: 'DIPA with coconut and dry-hopped with Mosaic.',
      details: '',
      origin: 'Queens, NY',
      abv: '4.1',
      price: '10',
      rating: '4.1'
    },
    {
      name: 'Beety Wihite',
      label: '',
      category: 'Cocktails',
      blurb: 'Beet Infused Vodka',
      details: 'arugula; fresh lime juice',
      origin: '',
      abv: '',
      price: '16',
      rating: ''
    },
    {
      name: 'Violet Beauregarde',
      label: '',
      category: 'Cocktails',
      blurb: 'Lemon-ginger infused bourbon',
      details: 'blueberry jam; vanilla; fresh lemon juice; topped with seltzer water',
      origin: '',
      abv: '',
      price: '16',
      rating: ''
    },
    {
      name: 'The Nightwitch',
      label: '',
      category: 'Cocktails',
      blurb: 'Black peppercorn infused gin',
      details: 'fresh strawberries; fresh lemon juice; splash of champagne',
      origin: '',
      abv: '',
      price: '16',
      rating: ''
    },
    {
      name: 'Cuchi Cuchi',
      label: '',
      category: 'Cocktails',
      blurb: 'Cinnamon Infused Rum',
      details: 'fresh lime juice; agave syrup',
      origin: '',
      abv: '',
      price: '16',
      rating: ''
    }
  ]

  export default menuItems