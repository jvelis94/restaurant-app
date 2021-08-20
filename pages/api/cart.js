import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function handler(req,res) {
    if (req.method === 'POST') {
        console.log('running post request')
        const order = req.body.order;
        // console.log(order)
        const newOrder = await prisma.order.upsert({
          where: { id: order.id },
          update: {
            orderItems: {
              create: {
                quantity: 1,
                product: {
                  connect: { id: req.body.product.id }
                }
              }
            }
          },
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