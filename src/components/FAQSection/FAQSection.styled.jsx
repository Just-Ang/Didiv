import styled from 'styled-components';
export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 0 15px;
  font-family: 'Inter', sans-serif; // або той, що у тебе основний
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4a3632;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #4a3632;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #4a3632;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const QuestionList = styled.div`
  margin-top: 30px;
`;

export const QuestionItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const UserName = styled.span`
  font-weight: bold;
  color: #333;
`;

export const DateText = styled.span`
  font-size: 12px;
  color: #999;
`;

export const QuestionText = styled.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`;

export const AnswerBox = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: #f0f0f0;
  border-left: 3px solid #4a3632;
  font-size: 14px;
`;

export  const AdminName = styled.div`
  font-weight: bold;
  color: #4a3632;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &::before {
    content: '●';
    font-size: 10px;
  }
`;