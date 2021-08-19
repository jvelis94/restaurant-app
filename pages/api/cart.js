import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function handler(req,res) {
    if (req.method === 'POST') {
        const order = req.body.order;
        const newOrder = await prisma.order.upsert({
          where: { id: 1 },
          update: {},
          create: {
            status: order.status,
            subtotal: order.subtotal,
            tax: order.tax,
            tip: order.tip,
            total: order.total,
            orderItems: {
              create: {
                quantity: 1,
                product: {
                  connect: { id: req.body.product.id }
                }
              }
            },
            user: {
              connect: { id: 1} 
            }
          }
        })
        res.json(newOrder)    
    }
}

export default handler