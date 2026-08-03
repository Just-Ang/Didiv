import { useEffect, useState } from "react";
import {
  Card,
  Title,
  Label,
  Input,
  SaveButton,
} from "./ProfilePage.styled";

export const ProfilePage = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const user = await res.json();

        setUserId(user.id);

        setForm({
          first_name: user.first_name || "",
          last_name: user.last_name || "",
          email: user.email || "",
          phone: user.phone || "",
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: form.first_name,
            last_name: form.last_name,
            phone: form.phone,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Помилка оновлення");
      }

      alert("Дані успішно збережено");
    } catch (err) {
      console.error(err);
      alert("Не вдалося оновити дані");
    }
  };

  if (loading) {
    return <p>Завантаження...</p>;
  }

  return (
    <Card>
      <Title>Особисті дані</Title>

      <Label>
        Ім я
        <Input
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Прізвище
        <Input
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Email
        <Input
          value={form.email}
          disabled
        />
      </Label>

      <Label>
        Телефон
        <Input
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </Label>

      <SaveButton onClick={handleSave}>
        Зберегти
      </SaveButton>
    </Card>
  );
};