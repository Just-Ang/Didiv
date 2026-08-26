import { useEffect, useState } from 'react';
import {

  Container,

  MainContent,
  Title,
  OrderList,
  OrderCard,
  OrderHeader,
  OrderNumber,
  StatusBadge,
  ProductsList,
  ProductItem,
  ProductInfo,
  DeliveryDetails,
} from './OrderPage.styled';
import { ProfileWrapper } from './OrderPage.styled';

export const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchOrders = async () => {
      try {
       
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders?filters[email][$eq]=${encodeURIComponent(user.email)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        
        // Перевіряємо чи повертається масив напряму, чи через data.data (як у Strapi)
        const ordersData = Array.isArray(data) ? data : data.data || [];
        setOrders(ordersData);
      } catch (error) {
        console.error('Помилка завантаження замовлень:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, user.email]);

  return (
  
      <Container>
        <ProfileWrapper>
          {/* Сайдбар користувача */}
        

          {/* Основний контент замовлень */}
          <MainContent>
            <Title>Мої замовлення</Title>

            {loading ? (
              <p>Завантаження замовлень...</p>
            ) : orders.length === 0 ? (
              <p>У вас поки немає замовлень.</p>
            ) : (
              <OrderList>
                {orders.map((order) => {
                  // Парсимо атрибути / поля замовлення
                  const item = order.attributes || order;
                  const products = typeof item.products === 'string' 
                    ? JSON.parse(item.products) 
                    : item.products || [];

                  return (
                    <OrderCard key={order.id || item.order_number}>
                      <OrderHeader>
                        <div>
                          <OrderNumber>№ {item.order_number}</OrderNumber>
                          <StatusBadge status={item.status_order}>
                            {item.status_order || 'pending'}
                          </StatusBadge>
                        </div>
                      </OrderHeader>

                      <ProductsList>
                        {products.map((prod) => (
                          <ProductItem key={prod.id}>
                            <img src={prod.image} alt={prod.name} />
                            <ProductInfo>
                              <p>{prod.name}</p>
                              <span>
                                {prod.quantity} шт. × {prod.price} грн
                              </span>
                            </ProductInfo>
                          </ProductItem>
                        ))}
                      </ProductsList>

                      <DeliveryDetails>
                        {item.city && <span><b>Місто:</b> {item.city}</span>}
                        {item.delivery_method && <span><b>Доставка:</b> {item.delivery_method}</span>}
                        {item.delivery_address && <span><b>Адреса:</b> {item.delivery_address}</span>}
                        {item.ttn && <span><b>ТТН:</b> {item.ttn}</span>}
                      </DeliveryDetails>
                    </OrderCard>
                  );
                })}
              </OrderList>
            )}
          </MainContent>
        </ProfileWrapper>
      </Container>

  );
};