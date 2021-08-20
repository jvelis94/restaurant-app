import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function handler(req,res) {
    if (req.method === 'POST') {
        console.log('running post request')
        const order = req.body;
        // console.log(order)
        const newOrder = await prisma.order.upsert({
          where: { id: order.orderId },
          update: {
            orderItems: {
              create: {
                quantity: 1,
                product: {
                  connect: { id: order.product.id }
                }
              }
            }
          },
          create: {
            status: "open",
            subtotal: 0,
            tax: 0,
            tip: 0,
            total: 0,
            orderItems: {
              create: {
                quantity: 1,
                product: {
                  connect: { id: order.product.id }
                }
              }
            },
            user: {
              connect: { id: 1 } 
            }
          }
        })
        console.log('disconnecting now...')
        await prisma.$disconnect()
        res.json(newOrder)
    }

    if (req.method === "GET") {
      console.log('running get request')
      const user = "7189643418"
      const order = await prisma.order.findFirst({
        where: {
          status: "open",
          user: { phoneNumber: user }
        },
        include: {
          orderItems: {
            include: {
              product: true
            }
          }
        },
        orderBy: {
          id: "asc"
        }
      })
      console.log('disconnecting now...')
      await prisma.$disconnect()
      res.json(order)
    }

    if (req.method === "PATCH") {
      console.log('running patch request')
      const orderItemReq = req.body
      console.log(orderItemReq)
      const orderItem = await prisma.orderItem.update({
        where: {
          id: orderItemReq.id
        },
        data: {
          quantity: orderItemReq.quantity
        }
      })
      res.json(orderItem)
    }

    if (req.method === "DELETE") {
      console.log("running delete request")
      const orderItemReq = req.body
      console.log(orderItemReq)
      const orderItem = await prisma.orderItem.delete({
        where: {
          id: orderItemReq.id
        }
      })
      res.status(201).json({ message: 'successfully deleted order item' });
    }
}

export default handler