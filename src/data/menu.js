export const menu = [
  {
    category: 'Beverages',
    image: '/images/categories/cold-beverages.jpg',
    items: [
      { name: 'Caramel Frappe', image: '/images/items/caramel-frappe.jpg', desc: 'A velvety blend of rich coffee, chilled milk, and buttery caramel notes, finished with a smooth frothy crown.', price: 180, badges: ['veg', 'bestseller'] },
      { name: 'Hazelnut Frappe', image: '/images/items/hazelnut-frappe.jpg', desc: 'Creamy iced coffee infused with roasted hazelnut essence for a refined, nutty finish.', price: 180, badges: ['veg'] },
      { name: 'Chocolate Frappe', image: '/images/items/chocolate-frappe.jpg', desc: 'Decadent cocoa blended with chilled milk and ice, delivering deep chocolate indulgence.', price: 180, badges: ['veg'] },
      { name: 'KitKat Frappe', image: '/images/items/kitkat-frappe.jpg', desc: 'A playful fusion of crushed KitKat, milk, and ice for a crisp chocolate crunch.', price: 180, badges: ['veg', 'bestseller'] },
      { name: 'Oreo Frappe', image: '/images/items/oreo-frappe.jpg', desc: 'Classic Oreo cookies blended into a thick, creamy frappe with a nostalgic sweetness.', price: 180, badges: ['veg'] },

      { name: 'Blue Curacao', image: '/images/items/blue-curacao.jpg', desc: 'A vibrant citrus cooler with subtle orange zest and a refreshing tropical finish.', price: 70, badges: ['veg'] },
      { name: 'Blue Lagoon', image: '/images/items/blue-lagoon.jpg', desc: 'A sparkling blend of citrus and blue curaçao syrup, light, crisp, and refreshing.', price: 70, badges: ['veg', 'bestseller'] },
      { name: 'Green Apple Splash', image: '/images/items/green-apple-splash.jpg', desc: 'Sharp green apple notes balanced with chilled soda for a crisp, thirst-quenching drink.', price: 70, badges: ['veg'] },
      { name: 'Orange Mint Fusion', image: '/images/items/orange-mint-fusion.jpg', desc: 'Fresh orange juice uplifted with cool mint undertones for a bright, refreshing sip.', price: 70, badges: ['veg'] },
      { name: 'Virgin Mojito', image: '/images/items/virgin-mojito.jpg', desc: 'Classic lime and mint muddled with soda for a timeless, refreshing mocktail.', price: 70, badges: ['veg', 'bestseller'] },

      { name: 'Mango Milkshake', image: '/images/items/mango-milkshake.jpg', desc: 'Seasonal mangoes blended with chilled milk for a rich, tropical creaminess.', price: 170, badges: ['veg', 'bestseller'] },
      { name: 'Strawberry Milkshake', image: '/images/items/strawberry-milkshake.jpg', desc: 'Sweet strawberries folded into smooth milk for a classic café-style shake.', price: 170, badges: ['veg'] },
      { name: 'Blackcurrant Milkshake', image: '/images/items/blackcurrant-milkshake.jpg', desc: 'Tangy blackcurrant richness blended with milk for a bold, fruity indulgence.', price: 170, badges: ['veg'] },
      { name: 'Oreo Milkshake', image: '/images/items/oreo-milkshake.jpg', desc: 'Creamy milkshake infused with crushed Oreo cookies and chocolate undertones.', price: 170, badges: ['veg'] }
    ]
  },

  {
    category: 'Starters & Sides',
    image: '/images/categories/starters.jpg',
    items: [
      { name: 'Chicken 65', image: '/images/items/chicken-65.jpg', desc: 'Crispy fried chicken tossed in aromatic spices and curry leaves for a bold South Indian bite.', price: 250, badges: ['spicy', 'bestseller'] },
      { name: 'Chicken Chilli', image: '/images/items/chicken-chilli.jpg', desc: 'Wok-tossed chicken with peppers, onions, and a fiery chilli-soy glaze.', price: 260, badges: ['spicy'] },
      { name: 'Chicken Manchuria', image: '/images/items/chicken-manchuria.jpg', desc: 'Juicy chicken bites coated in a tangy Indo-Chinese sauce with garlic and spring onions.', price: 260, badges: ['spicy'] },
      { name: 'Broasted Chicken (Crispy)', image: '/images/items/broasted-chicken.jpg', desc: 'Golden fried chicken with a perfectly seasoned, ultra-crispy exterior.', price: 270, badges: ['bestseller'] },
      { name: 'Broasted Fish', image: '/images/items/broasted-fish.jpg', desc: 'Tender fish fillets fried until crisp, seasoned with subtle coastal spices.', price: 280, badges: [] },
      { name: 'Paratha', image: '/images/items/paratha.jpg', desc: 'Soft, flaky flatbread cooked on a hot griddle for a comforting, buttery finish.', price: 20, badges: ['veg'] }
    ]
  },

  {
    category: 'Chicken & Special Dishes',
    image: '/images/categories/mandi-chicken.jpg',
    items: [
      { name: 'Chicken Mandi', image: '/images/items/chicken-mandi.jpg', desc: 'Slow-cooked chicken served over fragrant mandi rice infused with Middle Eastern spices.', price: 250, badges: ['bestseller'] },
      { name: 'Chicken Combo', image: '/images/items/chicken-combo.jpg', desc: 'A hearty assortment of signature chicken preparations paired with flavorful rice.', price: 1100, badges: ['bestseller'] }
    ]
  },

  {
    category: 'Mutton',
    image: '/images/categories/mutton.jpg',
    items: [
      { name: 'Mutton Mandi', image: '/images/items/mutton-mandi.jpg', desc: 'Succulent mutton slow-cooked to perfection and served over delicately spiced mandi rice.', price: 320, badges: ['bestseller'] },
      { name: 'Mutton Combo', image: '/images/items/mutton-combo.jpg', desc: 'A generous platter featuring premium mutton cuts with aromatic rice accompaniments.', price: 1400, badges: [] }
    ]
  },

  {
    category: 'Seafood & Veg',
    image: '/images/categories/seafood-veg.jpg',
    items: [
      { name: 'Fish Mandi', image: '/images/items/fish-mandi.jpg', desc: 'Delicately spiced fish served atop fragrant mandi rice with a coastal aroma.', price: 320, badges: [] },
      { name: 'Paneer Mandi', image: '/images/items/paneer-mandi.jpg', desc: 'Soft paneer cubes layered over aromatic mandi rice, crafted for a rich vegetarian experience.', price: 280, badges: ['veg', 'bestseller'] },
      { name: 'Prawns Mandi', image: '/images/items/prawns-mandi.jpg', desc: 'Juicy prawns infused with gentle spices, served over long-grain mandi rice.', price: 280, badges: ['chef-special'] }
    ]
  },

  {
    category: 'Desserts',
    image: '/images/categories/desserts.jpg',
    items: [
      { name: 'Caramel Milkcake', image: '/images/items/caramel-milkcake.jpg', desc: 'Soft milkcake layered with silky caramel glaze for a rich, melt-in-mouth finish.', price: 250, badges: ['veg'] },
      { name: 'Blueberry Milkcake', image: '/images/items/blueberry-milkcake.jpg', desc: 'Creamy milkcake topped with tangy blueberry compote.', price: 250, badges: ['veg'] },
      { name: 'Strawberry Milkcake', image: '/images/items/strawberry-milkcake.jpg', desc: 'Light milkcake infused with fresh strawberry sweetness.', price: 250, badges: ['veg'] },
      { name: 'Biscoff Milkcake', image: '/images/items/biscoff-milkcake.jpg', desc: 'Decadent milkcake layered with caramelized Biscoff spread.', price: 300, badges: ['veg', 'bestseller'] },
      { name: 'Nutsoverload Milkcake', image: '/images/items/nutsoverload-milkcake.jpg', desc: 'A rich milkcake generously topped with roasted nuts for extra crunch.', price: 300, badges: ['veg'] },
      { name: 'Triple Layer Choco Torte', image: '/images/items/triple-layer-choco-torte.jpg', desc: 'An indulgent three-layer chocolate torte with deep cocoa richness.', price: 290, badges: ['veg'] },
      { name: 'Triple Layer KitKat Torte', image: '/images/items/triple-layer-kitkat-torte.jpg', desc: 'Chocolate torte layered with crunchy KitKat and smooth cream.', price: 340, badges: ['veg'] }
    ]
  }
]
