import { useState } from 'react';

import { AdminName, AnswerBox, Container, DateText, Form, Input, QuestionItem, QuestionList, QuestionText, SubmitBtn, TextArea, UserInfo, UserName } from './FAQSection.styled';

const FAQSection = ({ productId, questions }) => {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      data: {
        question: question,
        userName: name,
        product: productId, // ID поточного товару
      }
    };

    const response = await fetch(`${
            import.meta.env.VITE_API_URL
          }/api/questions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    console.log(productId)

    if (response.ok) {
      alert('Запитання надіслано! Воно з’явиться після модерації.');
      setQuestion('');
      setName('');
    }
  };

  return (
    <Container>
  <Form onSubmit={handleSubmit}>
<Input 
          placeholder="Ваше ім'я" 
          value={name} // ДОДАНО
          onChange={(e) => setName(e.target.value)} // ДОДАНО
          required 
        />
        <TextArea 
          placeholder="Запитайте нас про цей товар..." 
          value={question} // ДОДАНО
          onChange={(e) => setQuestion(e.target.value)} // ДОДАНО
          required 
        />
    <SubmitBtn>Надіслати запитання</SubmitBtn>
  </Form>

  <QuestionList>
        {questions && questions.length > 0 ? (
          questions.map((q) => (
            <QuestionItem key={q.id}>
              <UserInfo>
                <UserName>{q.userName || 'Гість'}</UserName>
                <DateText>{new Date(q.createdAt).toLocaleDateString()}</DateText>
              </UserInfo>
              <QuestionText>{q.question}</QuestionText>
              
              {/* Показуємо відповідь, тільки якщо вона є */}
              {q.answer && (
                <AnswerBox>
                  <AdminName>Адміністратор</AdminName>
                  <p>{q.answer}</p>
                </AnswerBox>
              )}
            </QuestionItem>
          ))
        ) : (
          <p style={{textAlign: 'center', color: '#999'}}>Запитань поки немає. Будьте першим!</p>
        )}
      </QuestionList>
</Container>
  );
};

export default FAQSection;