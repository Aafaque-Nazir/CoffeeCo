'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState([]);

    // Load orders from localStorage on mount
    useEffect(() => {
        const savedOrders = localStorage.getItem('coffeeco_orders');
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
    }, []);

    // Save orders to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('coffeeco_orders', JSON.stringify(orders));
    }, [orders]);

    const addOrder = (orderData) => {
        const newOrder = {
            id: `ORD${Date.now()}`,
            date: new Date().toISOString(),
            status: 'Processing',
            ...orderData
        };
        setOrders(prev => [newOrder, ...prev]);
        return newOrder;
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrders() {
    return useContext(OrderContext);
}
