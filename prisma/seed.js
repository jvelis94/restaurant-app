// import menuItems from '../data/MenuItems'
const {menuItems} = require('../data//MenuItems')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const firstUser = await prisma.user.create({
    data: {
        phoneNumber: '7189643418',
    }
  })

  for (let menuItem of menuItems) {
      await prisma.product.create({
        data: {
            name: menuItem.name,
            label: menuItem.label,
            category: menuItem.category,
            blurb: menuItem.blurb,
            details: menuItem.details,
            origin: menuItem.origin,
            abv: 0,
            price: Number(menuItem.price),
        }
      })
  }

  
  console.log({ firstUser })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })