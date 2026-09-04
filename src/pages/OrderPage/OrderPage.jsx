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
  WrapperDate,
  OrderDate,
} from './OrderPage.styled';
import { ProfileWrapper } from './OrderPage.styled';
import { useNavigate } from 'react-router-dom';
import placeholder from '../../../public/nofoto.png';

export const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('orders', orders);
  const navigate = useNavigate();
  const statusLabels = {
  pending: 'Створено',
  confirmed: 'Підтверджено',
  paid: 'Сплачено',
  delivered: 'Доставлено',
  done: 'Завершено',
  cancelled: 'Скасовано',
};

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/orders?filters[email][$eq]=${encodeURIComponent(user.email)}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

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
                const products =
                  typeof item.products === 'string'
                    ? JSON.parse(item.products)
                    : item.products || [];

                return (
                  <OrderCard key={order.id || item.order_number}>
                    <OrderHeader>
                      
                        <WrapperDate>
                          <OrderNumber>№ {item.order_number}</OrderNumber>
                         {item.date && (
        <OrderDate>
           Дата створення замовлення:{' '}
    {new Date(item.date).toLocaleDateString('uk-UA')}
        </OrderDate>
      )}
                        </WrapperDate>
                        <StatusBadge status={item.status_order}>
  {statusLabels[item.status_order] || 'Створено'}
</StatusBadge>
                      
                    </OrderHeader>

                    <ProductsList>
                      {products.map((prod) => (
                        <ProductItem
                          key={prod.id}
                          onClick={() => navigate(`/product/${prod.slug}`)}
                        >
                          <img
                            src={prod.image || placeholder}
                            alt={prod.name}
                          />
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
                      {item.city && (
                        <span>
                          <b>Місто:</b> {item.city}
                        </span>
                      )}
                      {item.delivery_method && (
                        <span>
                          <b>Доставка:</b> {item.delivery_method}
                        </span>
                      )}
                      {item.delivery_address && (
                        <span>
                          <b>Адреса:</b> {item.delivery_address}
                        </span>
                      )}
                      {item.ttn && (
                        <span>
                          <b>ТТН:</b> {item.ttn}
                        </span>
                      )}
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
