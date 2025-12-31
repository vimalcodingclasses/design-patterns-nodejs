import { Request, Response } from 'express';
import { OrderContext } from './OrderContext';

// Mock database (In-memory storage for example)
const activeOrders: Map<string, OrderContext> = new Map();

export class OrderController {

    // POST /orders
    createOrder(req: Request, res: Response) {
        const id = Date.now().toString();
        const order = new OrderContext(id);
        activeOrders.set(id, order);

        return res.status(201).json({
            message: 'Order created',
            id,
            status: order.getState().name
        });
    }

    // POST /orders/:id/ship
    shipOrder(req: Request, res: Response) {
        const { id } = req.params;
        const order = activeOrders.get(id);

        if (!order) return res.status(404).json({ message: 'Order not found' });

        try {
            // The magic happens here. We don't check 'if status === pending'.
            // We just ask the order to ship. If it's in the wrong state, it throws.
            order.requestShip();

            return res.json({
                message: 'Shipment initiated',
                status: order.getState().name
            });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    // POST /orders/:id/cancel
    cancelOrder(req: Request, res: Response) {
        const { id } = req.params;
        const order = activeOrders.get(id);

        if (!order) return res.status(404).json({ message: 'Order not found' });

        try {
            order.requestCancel();
            return res.json({
                message: 'Order cancelled',
                status: order.getState().name
            });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}