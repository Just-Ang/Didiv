import { Button, CartPreviewItem, CartPreviewList, PreviewImg, PreviewInfo, Summary } from "./OrderSummary.styled";
import placeholder from '../../../../public/nofoto.png';

const OrderSummary = ({ cartItems, totalAmount, totalQuantity, isFormValid, handleSubmit }) => {
  
  return(
  <Summary>
    <h3>Ваше замовлення</h3>
    <CartPreviewList>
      {cartItems.map((item, index) => (
        <CartPreviewItem key={`${item.id}-${index}`}>
          <PreviewImg   src={item.images?.[0]?.url || placeholder} alt={item.name} />
          <PreviewInfo>
            <p className="item-name">{item.name}</p>
            <p className="item-details">{item.quantity} шт. × {item.price} грн</p>
          </PreviewInfo>
          <span className="item-total">{item.price * item.quantity} грн</span>
        </CartPreviewItem>
      ))}
    </CartPreviewList>
    <div className="summary-row">
      <span>Товари ({totalQuantity})</span>
      <span>{totalAmount} грн</span>
    </div>
    <div className="summary-row">
      <span>Доставка</span>
      <span>За тарифами перевізника</span>
    </div>
    <hr />
    <div className="total">
      <span>Всього до сплати:</span>
      <span>{totalAmount} грн</span>
    </div>
    <Button type="submit" disabled={!isFormValid} onClick={handleSubmit} style={{ opacity: isFormValid ? 1 : 0.5, cursor: isFormValid ? 'pointer' : 'not-allowed' }}>
      Підтвердити замовлення
    </Button>
    {!isFormValid && <p style={{ color: '#888', fontSize: '12px', marginTop: '10px', textAlign: 'center' }}>Заповніть всі поля правильно, щоб продовжити</p>}
  </Summary>
)};
export default OrderSummary;